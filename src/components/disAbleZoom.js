import React, { useRef, useLayoutEffect } from "react";
export const SuspendPinchZoom = ({ children }) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const target = ref.current;
    if (!target) return;
    const disablePinchZoom = (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };
    target.addEventListener("touchmove", disablePinchZoom, { passive: false });
    return () => {
      target.removeEventListener("touchmove", disablePinchZoom);
    };
  }, []);
  return (
    <div ref={ref} className="dd">
      {children}
    </div>
  );
};
