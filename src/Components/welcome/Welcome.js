import React from "react";
import Register from "../register/Register";
import Signin from "../signin/Signin";

const Welcome = ({ user }) => {
  const userCredential = (email, isSignin) => {
    return user(email, isSignin);
  };
  return (
    <div>
      <div className="fl w-50 tc">
        <Register />
      </div>

      <div className="fl w-50 tc">
        <Signin userCredential={userCredential} />
      </div>
    </div>
  );
};

export default Welcome;
