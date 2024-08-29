import React from "react";

const LoginButton = () => {
  const handleLogin = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  return <button onClick={handleLogin}>구글계정으로 로그인하기</button>;
};

export default LoginButton;
