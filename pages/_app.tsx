import React, { useState } from "react";
import 'styles/global.css'
import { AppProps } from 'next/app'
import LoadingSpinner from "components/loading";

export default function App({ Component, pageProps }: AppProps) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleFetch = () => {
    setIsLoading(true);
    fetch("https://reqres.in/api/users?page=0")
      .then((response) => response.json())
      .then((response) => {
         setTimeout(() => {
           setUsers(response.data);
           setIsLoading(false);
         }, 3000);
      })
      .catch(() => {
         setErrorMessage("Unable to fetch user list");
         setIsLoading(false);
      });
  };

  const renderUser = (
    <div className="userlist-container">
      {users.map((item, index) => (
        <div className="user-container" key={index}>
          <img src={item.avatar} alt="" />
          <div className="userDetail">
            <div className="first-name">{`${item.first_name}                
                                   ${item.last_name}`}</div>
            <div className="last-name">{item.email}</div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {isLoading ? <LoadingSpinner /> : <Component {...pageProps} />}
      {errorMessage && <div className="error">{errorMessage}</div>}
      <button onClick={handleFetch} disabled={isLoading}>
        Fetch Users
      </button>
    </>
  )
}