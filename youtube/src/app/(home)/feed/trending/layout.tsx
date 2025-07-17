import React from "react";

interface trendProps{
  children: React.ReactNode
}


const Trending = ({children}:trendProps) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default Trending;