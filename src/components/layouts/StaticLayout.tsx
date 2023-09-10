import Navbar from "@/components/navbar/Navbar";
import { Fragment, ReactNode } from "react";

function StaticLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Navbar showSearchbar={true} />
      <Fragment>{children}</Fragment>
    </main>
  );
}

export default StaticLayout;
