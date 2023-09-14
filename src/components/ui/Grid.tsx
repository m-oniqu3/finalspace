import React from "react";

interface Props {
  children: React.ReactNode;
}

const Grid = (props: Props) => {
  const { children } = props;
  return (
    <div className="flex flex-wrap justify-center items-center gap-16">
      {children}
    </div>
  );
};

export default Grid;
