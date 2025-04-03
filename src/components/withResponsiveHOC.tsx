import { useState, useEffect } from "react";

const withResponsive = <P extends object>(WrappedComponent: React.ComponentType<P & { isMobile: boolean }>) => {
  return (props: P) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return <WrappedComponent {...props} isMobile={isMobile} />;
  };
};

export default withResponsive;
