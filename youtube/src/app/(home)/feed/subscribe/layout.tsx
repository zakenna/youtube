import React from "react";


interface subProps{
  children: React.ReactNode;
}

export const Sublayout = ({children}:subProps) => {
  return (
    <div>
      {children}
    </div>
  );
};
