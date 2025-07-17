import React from "react";

interface subProps{
  children: React.ReactNode;
}

const Sublayout = ({children}:subProps) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default Sublayout;
