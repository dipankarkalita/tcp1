"use client";

import { useEffect, useState } from "react";

function Provider({ children }) {
  const [hydration, setHydration] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHydration(true);
    }
  }, []);

  return (
    <>
      {hydration ? (
        <>{children}</>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center w-full h-screen">
            <div className="homeLoader mt-6"></div>
          </div>
        </>
      )}
    </>
  );
}

export default Provider;
