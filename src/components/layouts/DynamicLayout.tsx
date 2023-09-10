import Navbar from "@/components/navbar/Navbar";
import { Fragment, ReactNode } from "react";

const DynamicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar showSearchbar={false} />
      <Fragment>{children}</Fragment>
    </div>
  );
};

export default DynamicLayout;
