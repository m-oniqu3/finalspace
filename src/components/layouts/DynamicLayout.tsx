import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/ui/Container";

import { ReactNode } from "react";

const DynamicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-indigo-100 min-h-screen">
      <Navbar showSearchbar={false} />
      <Container className="py-14 relative top-14">{children}</Container>
    </div>
  );
};

export default DynamicLayout;
