import React, { createContext, useState } from "react";

export const Context = createContext(null);

export default function AuthContext({ children }) {
  const userdata = localStorage.getItem("loginData");
  const [user, setUser] = useState(JSON.parse(userdata));

  return (
    <Context.Provider value={(user, setUser)}>{children}</Context.Provider>
  );
}
