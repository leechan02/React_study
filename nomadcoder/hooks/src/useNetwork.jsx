import { useEffect } from "react";

const useNetwork = (onChange) => {
  const handleNetworkChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
  };
  useEffect(() => {
    window.addEventListener("online", handleNetworkChange);
    window.addEventListener("offline", handleNetworkChange);
    return () => {
      window.removeEventListener("online", handleNetworkChange);
      window.removeEventListener("offline", handleNetworkChange);
    };
  }, []);
}

export default useNetwork;