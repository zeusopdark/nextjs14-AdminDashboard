import React from "react";
import styles from "../../../ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";
import { singleUser } from "@/app/lib/data";
import { updateUser } from "@/app/lib/action";

const SingleUserPage = async ({ params }) => {
  const { id } = params;
  const user = await singleUser(id.toString());

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" fill alt="" />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user._id.toString()} />

          <label htmlFor="">Username</label>
          <input type="text" name="username" placeholder={user.username} />

          <label htmlFor="">Email</label>
          <input type="email" name="email" placeholder={user.email} />

          <label htmlFor="">Password</label>
          <input type="password" name="password" />

          <label htmlFor="">Phone</label>
          <input type="number" name="phone" placeholder={user.phone} />

          <label htmlFor="">Address</label>

          <textarea type="text" name="address" placeholder={user.address} />

          <label htmlFor="isAdmin">Is Admin?</label>
          <select name="isAdmin" id="isAdmin" defaultValue={user.isAdmin}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <label htmlFor="isActive">Is Active?</label>
          <select name="isActive" id="isActive" defaultValue={user.isActive}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
