import { useEffect,useRef } from "react";
import { signout } from "../authApi/authService";
import { useNavigate } from "react-router-dom";

const AutoSignOut = () => {
    const navigate = useNavigate();
    const timeoutIdRef = useRef(null);

  useEffect(() => {
    const resetTimeout = () => {
        if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
        timeoutIdRef.current = setTimeout(() => {
          handleSignout();
        }, 15 * 60 * 1000); // 15 dakika
      };

    const handleSignout = async () => {
      try {
        await signout();
        localStorage.removeItem("user");
        navigate("/");
      } catch (error) {
        console.error("Sign out error:", error);
      }
    };

    // Kullanıcı aktivitelerini dinleme
    window.addEventListener("mousemove", resetTimeout);
    window.addEventListener("keydown", resetTimeout);

    // Cleanup
    resetTimeout(); // Başlangıçta zamanlayıcıyı başlat
    return () => {
      if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
      window.removeEventListener("mousemove", resetTimeout);
      window.removeEventListener("keydown", resetTimeout);
    };
  }, [navigate]);

  return null;
};

export default AutoSignOut;
