"use client"
import React, { createContext, useState } from "react";
import { redirect } from "next/navigation";

import HAS from "hive-auth-wrapper";

export const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    // Implement login logic using hive-auth-wrapper (refer to previous example)
    // Update user state with the logged-in user information
    const APP_META = {
      name: "myapp",
      description: "My HAS compatible application",
      icon: undefined,
    };

    // Create an authentication object
    const auth = {
      username: "username", // required - replace "username" with your Hive account name (without the @)
      expire: undefined,
      key: undefined,
    };
    if (auth.expire > Date.now()) {
      // previous authentication is still valid - no need to log in again
      resolve(true);
    } else {
      let challenge_data = undefined;
      // optional - create a challenge to sign with the posting key
      challenge_data = {
        key_type: "posting",
        challenge: JSON.stringify({
          login: auth.username,
          ts: Date.now(),
        }),
      };

      HAS.authenticate(auth, APP_META, challenge_data, (evt) => {
        console.log(evt); // process auth_wait message
      })
        .then((res) => {
          resolve(res);
          redirect("/org");
        }) // Authentication request approved
        .catch((err) => reject(err)); // Authentication request rejected or error occured
    }
  };

  const logout = () => {
    setUser(null);
    // Handle logout logic (e.g., clear token)
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
