import DynamicNavbar from "@/components/navbar/DynamicNavbar";
import { Fragment, ReactNode } from "react";

const DynamicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <DynamicNavbar />
      <Fragment>{children}</Fragment>
    </div>
  );
};

export default DynamicLayout;
