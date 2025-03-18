import { useEffect, useState, createContext, useContext } from "react";
import Cookies from "js-cookie";
import { hookLogin, hookRegister, authorize, adminAuthoeize, hookcurrentUser } from "@/Hooks/authentication";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthorize, setAuthorize] = useState(false);
  const [currentUser, setCurrentuser] = useState(null);

  useEffect(() => {
    authorize()
      .then((data) => {
        if (data) {
          setAuthorize(true);
          getCurrentUser();
        } else {
          setAuthorize(false);
        }
      })
      .catch((error) => {
        console.error("Authorization failed:", error);
        setAuthorize(false);
      });
  }, []);

  async function getCurrentUser() {
    try {
      const userData = await hookcurrentUser();
      const admin=await adminAuthoeize()
      setCurrentuser({ ...userData.data, is_admin: admin});
    } catch (error) {
      console.error("Failed to fetch current user:", error);
    }
  }


  function logout() {
    Cookies.remove("Token");
    setAuthorize(false);
    setCurrentuser(null);
  }

  return (
    <AuthContext.Provider value={{ isAuthorize, currentUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
