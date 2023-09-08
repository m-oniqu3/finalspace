import StaticNavbar from "@/components/navbar/StaticNavbar";
import { Fragment, ReactNode } from "react";

function StaticLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <StaticNavbar />
      <Fragment>{children}</Fragment>
    </main>
  );
}

export default StaticLayout;
