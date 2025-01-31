import React from "react";

const Section: React.FC<{ className?: string; children: React.ReactNode }> = ({
  children,
  className,
}) => {
  return (
    <div className={`${className} container w-full my-20 p-4 z-[0]`}>
      {children}
    </div>
  );
};

export default Section;
