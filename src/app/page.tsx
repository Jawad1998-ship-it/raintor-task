import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-amber-50 w-full min-h-screen">
      <div className="flex gap-12">
        <Link href="/home" className="bg-green-200 px-5 py-2 rounded-2xl">
          Task 1 - UI Design
        </Link>
        <Link href="/tracking" className="bg-green-200 px-5 py-2 rounded-2xl">
          Task 2 - Tracking
        </Link>
        <Link href="/users" className="bg-green-200 px-5 py-2 rounded-2xl">
          Task 3 - Users
        </Link>
      </div>
    </div>
  );
}
