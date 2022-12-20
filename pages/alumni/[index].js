import Profile from "../../components/Profile.js";
// import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Link from "next/Link";

export default function lecturer({ crews }) {
  return (
    <div>
      <div className="bg-[url('../public/lecturer_bg.svg')] bg-cover bg-top min-h-[480px] text-white font-bold flex flex-col justify-center">
        <h1 className="px-20 text-7xl uppercase">Lecturers</h1>
      </div>
      <div className="my-10 mx-auto px-10  h-full w-full max-w-[1920px]">
        <div className="flex">
          <div className="w-[20%] flex flex-col">
            <div className="pt-10">
              <Link href="/lecturer/0">Lecturers</Link>
            </div>
            <div className="pt-10">
              <Link href="/alumni/0">Alumni</Link>
            </div>
          </div>
          <div className="w-[80%] flex flex-wrap">
            {crews.map((crew) => (
              <div className="w-[25%] p-5 box-border">
                <Profile role={crew.role} name={crew.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const page = context.params; //starts with 0
  const currentPage = page.index * 10;

  const { data } = await axios.get(
    `http://127.0.0.1:8000/alumni/?limit=12&offset=${currentPage}`
  );
  return {
    props: {
      crews: data.results,
    },
  };
}
