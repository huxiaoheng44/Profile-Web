import React from "react";
import baseURL from "../../config";
import { useEffect, useRef } from "react";
import { useUser } from "../../UserContext";

const GoogleLoginButton = (props) => {
  //Get the user state from context
  const { setUserId, setUserAvatar, setUserName } = useUser();

  useEffect(() => {
    window.handleLogin = (response) => {
      console.log(response);
      // POST to /api/login
      fetch(baseURL + "/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tokenId: response.credential }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("userInfo:", data);
          setUserName(data.name);
          setUserAvatar(data.picture);
          setUserId(data.googleid);

          // use session to store user info
          sessionStorage.setItem("userName", data.name);
          sessionStorage.setItem("userAvatar", data.picture);
          sessionStorage.setItem("userId", data.googleid);
        });
    };

    return () => {
      window.handleLogin = undefined;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // make sure the google login button is always showed
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = () => {};
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div
        id="g_id_onload"
        data-client_id="428394025772-7dku9vrms7l56cpcf28l9a2ara40098r.apps.googleusercontent.com"
        data-context="use"
        data-ux_mode="popup"
        data-callback="handleLogin"
        data-nonce=""
        data-auto_select="true"
        data-itp_support="true"
      ></div>

      <div
        className="g_id_signin"
        data-type="icon"
        data-shape="circle"
        data-theme="filled_blue"
        data-text="signin_with"
        data-size="medium"
      ></div>
    </>
  );
};

export default GoogleLoginButton;
