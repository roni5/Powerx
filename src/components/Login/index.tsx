import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { login, LoginStatus, logout, selectAuth } from "./authslice";
import styles from "./Login.module.css";

export function Login() {
  const auth = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const [loginUsername, setLoginUsername] = useState("");

  if (auth.status === LoginStatus.LOGGED_IN) {
    return (
      <div className={styles.container}>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
          Welcome
          <span className="uppercase"> {auth.user.name}</span>
        </h1>
        <button
          className="flex items-center  mx-auto text-white bg-lime-500 border-0 py-2 px-8 focus:outline-none hover:bg-lime-600 rounded text-lg"
          onClick={() => dispatch(logout())}
        >
          Logout
        </button>
      </div>
    );
  } else {
    return (
      <form
        className={styles.container}
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(login({ username: loginUsername }));
        }}
      >
        <span className="ml-4 flex items-start flex-col px-6 leading-none">
          <span className="title-font font-medium px-6">Please log in</span>
          <span className="text-md text-gray-600 mb- px-6 ">
            to access resources
          </span>
        </span>
        <input
          className="max-w-md bg-gray-100 rounded border-lime-500 bg-opacity-50  focus:ring-2 focus:ring-lime-200 focus:bg-transparent focus:border-lime-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          type="text"
          placeholder="Username"
          value={loginUsername}
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <button
          className="flex mx-auto text-white bg-lime-500 border-0 py-2 px-8 focus:outline-none hover:bg-lime-600 rounded text-lg"
          disabled={auth.status === LoginStatus.LOGIN_PENDING}
        >
          Login
        </button>
      </form>
    );
  }
}
