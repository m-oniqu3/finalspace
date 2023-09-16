"use client";

import { HeartIcon } from "@heroicons/react/24/outline";
import { MouseEvent } from "react";

const Like = () => {
  const handleLike = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("liked");
  };

  return (
    <div onClick={handleLike}>
      <HeartIcon className="h-7 w-7 text-indigo-900 " />
    </div>
  );
};

export default Like;
