import React, { useState, useEffect } from "react";

const withScale = (WrappedComponent) => {
  const WithScale = (props) => {
    const [scale, setScale] = useState(() => {
      const scale = Math.min(
        window.innerWidth / 1273,
        window.innerHeight / 716
      );
      return scale > 1 ? 1 : scale;
    });

    useEffect(() => {
      window.addEventListener("resize", calculateScale);
      return () => {
        window.removeEventListener("resize", calculateScale);
      };
    }, []);

    const calculateScale = (e) => {
      const scale = Math.min(
        window.innerWidth / 1273,
        window.innerHeight / 716
      );
      setScale(scale > 1 ? 1 : scale);
    };

    return <WrappedComponent {...props} scale={scale} />;
  };

  return WithScale;
};

export default withScale;
