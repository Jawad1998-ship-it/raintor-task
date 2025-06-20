export interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
  university: string;
  company: { title: string };
}

export interface InputFieldProps {
  label: string;
  type?: string;
}
