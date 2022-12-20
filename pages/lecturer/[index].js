// import styles from "../styles/Lecturer.module.css";
import Profile from "../../components/Profile.js";
// import { useEffect, useState } from "react";
import axios from "axios";
// import { ApiError } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import React from "react";
import { basename } from "path";

export default function lecturer({ crews }) {
  return (
    <div>
      <div className="bg-[url('../public/lecturer_bg.svg')] bg-cover bg-top min-h-[480px] text-white font-bold flex flex-col justify-center">
        <h1 className="px-20 text-7xl uppercase">Lecturers</h1>
      </div>
      <div className="my-10 mx-auto px-10  h-full w-full max-w-[1920px]">
        <div>
          <div>Lecturers</div>
          <div>Alumni</div>
        </div>
        <div>
          {/* <h1>{data.results.name}</h1> */}
          {crews.map((crew) => (
            // <Profile role={crew.role} name={crew.name} />
            <h1>{crew.coursename}</h1>
          ))}
        </div>
        {/* <button onClick={handlePageChange}>Next Page</button> */}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const router = useRouter;
  // const pathData = router.query;
  // console.log(pathData);
  const page = router.asPath;
  console.log(page);
  // const { page } = useParams;

  // console.log(pid);
  const { data } = await axios.get(
    `http://127.0.0.1:8000/courses/?page=${page}`
  );
  return {
    props: {
      crews: data.results,
    },
  };
}
