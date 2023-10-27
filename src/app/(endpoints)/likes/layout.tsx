import LikesNav from "@/app/(endpoints)/likes/LikesNav";
import DynamicLayout from "@/components/layouts/DynamicLayout";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favourites | Final Space Wiki",
  description: "Your favourite characters, locations, and episodes from the show Final Space.",
};

interface Props {
  children: React.ReactNode;
}

const layout = (props: Props) => {
  return (
    <DynamicLayout>
      <LikesNav />
      <main className="pt-6">{props.children}</main>
    </DynamicLayout>
  );
};

export default layout;
