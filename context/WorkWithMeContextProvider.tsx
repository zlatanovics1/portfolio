"use client";

import { workWithMeContextType } from "@/types/contexts";
import { createContext, useContext, useState } from "react";

const WorkWithMeContext = createContext<workWithMeContextType | null>(null);
export default function WorkWithMeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activePoint, setActivePoint] = useState(1);

  const setPoint = (point: number) => setActivePoint(point);

  return (
    <WorkWithMeContext.Provider
      value={{ activePoint, setActivePoint: setPoint }}
    >
      {children}
    </WorkWithMeContext.Provider>
  );
}

export function useWorkWithMe() {
  const context = useContext(WorkWithMeContext);
  if (!context) throw new Error("Context used outside of its provider!");
  return context;
}
