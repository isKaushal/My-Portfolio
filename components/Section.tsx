import React from "react";

const Section: React.FC<{ className?: string; children: React.ReactNode }> = ({
  children,
  className,
}) => {
  return <div className={`${className} w-full my-20 p-4`}>{children}</div>;
};

export default Section;
