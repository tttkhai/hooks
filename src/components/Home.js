import React, { useContext, createContext } from "react";
import {UseContext} from './UseContext'
import { login, logout } from "../services/login";


function Home() {
    const { user, setUser } = useContext(UseContext);
    console.log(user);

    return (
      <div>
        <h2>Home page</h2>
        <div>
          {user.id ? (
            <>
              <div>
                {user.first} {user.last}
              </div>
              <button
                onClick={async () => {
                  const currentUser = await logout();
                  setUser(currentUser);
                }}
              >
                logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={async () => {
                  const currentUser = await login();
                  setUser(currentUser);
                }}
              >
                login
              </button>
            </>
          )}
        </div>
      </div>
    );
}
export default Home
