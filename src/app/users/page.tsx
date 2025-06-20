"use client";
import React, { useEffect, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { FixedSizeList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { useInView } from "react-intersection-observer";
import { ErrorBoundaryProps, ErrorBoundaryState, User } from "@/types/types";

const fetchUsers = async ({ pageParam = 0 }) => {
  const response = await fetch(
    `https://tech-test.raintor.com/api/users/GetUsersList?take=10&skip=${pageParam}`,
    { method: "GET" }
  );
  if (!response.ok) {
    const errorData = await response.text();
    console.error("API error:", errorData);
    throw new Error(`Failed to fetch users: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
};

const UserCard: React.FC<{ user: User; index: number }> = ({ user, index }) => (
  <div
    className="bg-white p-4 rounded-lg shadow-md mb-2 flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500"
    tabIndex={0}
    role="listitem"
    aria-label={`User ${user.firstName} ${user.lastName}`}
  >
    <img
      src={user.image}
      alt={`${user.firstName}'s avatar`}
      className="w-16 h-16 rounded-full mr-4"
      loading="lazy"
    />
    <div>
      <h3 className="text-lg font-semibold">
        {user.firstName} {user.lastName}
      </h3>
      <p className="text-sm text-gray-600">{user.email}</p>
      <p className="text-sm text-gray-600">{user.phone}</p>
      <p className="text-sm text-gray-600">{user.university}</p>
      <p className="text-sm text-gray-600">{user.company.title}</p>
    </div>
  </div>
);

const SkeletonCard: React.FC = () => (
  <div className="bg-white p-4 rounded-lg shadow-md mb-2 flex animate-pulse">
    <div className="w-16 h-16 rounded-full bg-gray-200 mr-4"></div>
    <div className="flex-1">
      <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-1"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-1"></div>
      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
    </div>
  </div>
);

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default function UserFeed() {
  const { ref, inView } = useInView();
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    getNextPageParam: (lastPage, allPages) => {
      const currentSkip = allPages.length * 10;
      return currentSkip < lastPage.total ? currentSkip : undefined;
    },
  });

  const users =
    data?.pages.flatMap((page) => page.users || page.data || page) ?? [];

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const handleKeyDown = (
    event: React.KeyboardEvent,
    index: number,
    users: User[]
  ) => {
    if (event.key === "ArrowDown") {
      setFocusedIndex((prev) => Math.min(prev + 1, users.length - 1));
      event.preventDefault();
    } else if (event.key === "ArrowUp") {
      setFocusedIndex((prev) => Math.max(prev - 1, 0));
      event.preventDefault();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">User Feed</h1>
      <ErrorBoundary
        fallback={
          <div className="text-center text-red-500">
            <p>Error loading users: {error?.message || "Unknown error"}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Retry
            </button>
          </div>
        }
      >
        <div className="max-w-2xl mx-auto">
          {status === "loading" ? (
            <div role="status" aria-label="Loading users">
              {[...Array(5)].map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : (
            <AutoSizer>
              {({ height, width }) => (
                <FixedSizeList
                  height={height}
                  width={width}
                  itemCount={users.length + (isFetchingNextPage ? 5 : 0)}
                  itemSize={150}
                  role="list"
                  aria-label="User list"
                >
                  {({ index, style }) => {
                    if (index >= users.length) {
                      return <SkeletonCard key={index} />;
                    }
                    const user = users[index];
                    return (
                      <div
                        style={style}
                        onKeyDown={(e) => handleKeyDown(e, index, users)}
                        ref={index === users.length - 1 ? ref : undefined}
                      >
                        <UserCard user={user} index={index} />
                      </div>
                    );
                  }}
                </FixedSizeList>
              )}
            </AutoSizer>
          )}
          {isFetchingNextPage && (
            <div
              className="text-center mt-4"
              role="status"
              aria-label="Loading more users"
            >
              <p>Loading more...</p>
            </div>
          )}
        </div>
      </ErrorBoundary>
    </div>
  );
}
