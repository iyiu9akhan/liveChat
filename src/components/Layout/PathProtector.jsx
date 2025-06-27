import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const PathProtector = ({ children }) => {
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unknown = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        navigate("/login", { replace: true });
      }
      setCheckingAuth(false);
    });

    return () => unknown(); 
  }, [auth, navigate]);

  if (checkingAuth) {
    return null; 
  }

  return children;
};

export default PathProtector;
