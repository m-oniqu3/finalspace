import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = (props: Props) => {
  const { children, className } = props;
  return (
    <div className={`w-[92%] my-0 mx-auto  ${className ?? ""} md:w-[95%]`}>
      {children}
    </div>
  );
};

export default Container;
