import React from "react";
import styles from "../../../ui/dashboard/users/addUser/addUser.module.css";
import { addUser } from "@/app/lib/action";

const page = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input type="number" placeholder="phone" name="phone" />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <select name="isAdmin" id="isAdmin">
          <option value={false} selected>
            {" "}
            Is Admin?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <select name="isActive" id="isActive">
          <option value={true} selected>
            {" "}
            Is Active?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          required
          name="address"
          id="address"
          rows="16"
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default page;
