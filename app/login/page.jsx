import React from "react";
import styles from "../ui/dashboard/login/login.module.css";
import { authenticate } from "../lib/action";
const page = () => {
  return (
    <div className={styles.container}>
      <form action={authenticate} className={styles.form}>
        <h1>Login</h1>
        <input type="text" name="username" placeholder="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default page;
