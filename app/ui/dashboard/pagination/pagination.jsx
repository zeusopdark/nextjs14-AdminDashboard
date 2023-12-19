"use client";
import React, { useState, useEffect } from "react";
import styles from "./pagination.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ count }) => {
  const [currPage, setCurrPage] = useState(1);
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const page = parseInt(searchParams.get("page")) || 1;
  const itemPerPage = 5;
  const current = (page - 1) * itemPerPage;

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set("page", currPage);
    replace(`${pathname}?${params}`);
  }, [currPage]);

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={page <= 1}
        onClick={() => setCurrPage((curr) => curr - 1)}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={current + itemPerPage >= count}
        onClick={() => setCurrPage((curr) => curr + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
