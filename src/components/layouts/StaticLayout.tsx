import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/ui/Container";

import { ReactNode } from "react";

function StaticLayout({ children }: { children: ReactNode }) {
  return (
    <main className="bg-indigo-100 min-h-screen">
      <Navbar showSearchbar={true} />
      <Container className="py-14 relative top-14">{children}</Container>
    </main>
  );
}

export default StaticLayout;
