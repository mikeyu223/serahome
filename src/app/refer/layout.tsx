import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Refer a Neighbor — SeraHome",
  description:
    "Give $75, get $75. Refer an East Bay neighbor to SeraHome after their first completed clean.",
};

export default function ReferLayout({ children }: { children: ReactNode }) {
  return children;
}
