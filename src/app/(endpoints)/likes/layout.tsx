import LikesNav from "@/app/(endpoints)/likes/LikesNav";
import DynamicLayout from "@/components/layouts/DynamicLayout";
import React from "react";

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
