import React, { useState, useEffect } from "react";

export const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let myTimer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 3000);
    return () => clearTimeout(myTimer);
  }, []);

  return <h1>This block have rendered {count} times!!!</h1>;
};
