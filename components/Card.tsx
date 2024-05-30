import React from "react";

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="max-w-screen-lg w-full mx-auto relative border-[1.5px] py-8 border-[#F0E4D2]">
      {children}
    </div>
  );
};

export default Card;
