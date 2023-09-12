import Container from "@/components/Container";
import Navbar from "@/components/navbar/Navbar";

import { ReactNode } from "react";

const DynamicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-indigo-100 min-h-screen">
      <Navbar showSearchbar={false} />
      <Container className="py-16">{children}</Container>
    </div>
  );
};

export default DynamicLayout;
