import { ReactNode } from "react";

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

export interface SkillCardProps {
  icon?: ReactNode;
  title: string;
  description: string[];
  className?: string;
  isLastCard?: boolean;
}

export interface ProcessCardProps {
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  isHighlighted: boolean;
}

export interface LocationData {
  userName: string;
  lat: number;
  lon: number;
}

export interface LocationData {
  userName: string;
  lat: number;
  lon: number;
}
