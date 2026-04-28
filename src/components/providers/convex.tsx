import { ConvexProvider, ConvexReactClient } from "convex/react";
import React from "react";

const convexUrl = import.meta.env.VITE_CONVEX_URL ?? "http://127.0.0.1:3210";
const convex = new ConvexReactClient(convexUrl);

export function ConvexClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConvexProvider client={convex}>
      {children}
    </ConvexProvider>
  );
  //  VITE_CONVEX_URL=https://next-flamingo-70.convex.cloud
}
