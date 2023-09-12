import Container from "@/components/Container";
import Navbar from "@/components/navbar/Navbar";

import { ReactNode } from "react";

function StaticLayout({ children }: { children: ReactNode }) {
  return (
    <main className="bg-indigo-100 min-h-screen">
      <Navbar showSearchbar={true} />
      <Container className="py-16">{children}</Container>
    </main>
  );
}

export default StaticLayout;
