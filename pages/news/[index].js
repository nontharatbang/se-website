import Profile from "../../components/Profile.js";
import { useState } from "react";
import Router from "next/router";
import axios from "axios";
import React from "react";
import Link from "next/Link";

export default function news({ crews, maxIndex }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function previousClickHandler(index) {
    if (index >= 0) {
      setCurrentIndex(index);
      Router.push(`/news/${index}`);
    }
  }

  function nextClickHandler(index) {
    if (index < maxIndex) {
      setCurrentIndex(index);
      Router.push(`/alumni/${index}`);
    }
  }

  return (
    <div>
      <div className="bg-[url('../public/news_bg.svg')] bg-cover bg-top min-h-[480px] text-white font-bold flex flex-col justify-center">
        <h1 className="px-20 text-7xl uppercase">News</h1>
      </div>
      <div className="my-10 mx-auto px-10  h-full w-full max-w-[1920px]">
        <div className="flex">
          <div className="w-[20%] flex flex-col">
            <div className="py-4 px-10">
              <Link href="/lecturer/0">
                <button className="text-white text-2xl font-bold btn btn-wide">
                  Lecturers
                </button>
              </Link>
            </div>
            <div className="py-4 px-10">
              <Link href="/alumni/0">
                <button className="text-white text-2xl font-bold btn btn-wide">
                  Alumni
                </button>
              </Link>
            </div>
          </div>
          <div className="w-[80%] flex flex-wrap">
            {crews.map((crew) => (
              <div className="w-[25%] p-4 box-border">
                <Profile
                  role="Alumni"
                  name={crew.name}
                  tel={crew.name}
                  email={crew.email}
                  twitter={crew.twitter}
                  facebook={crew.facebook}
                  about={crew.about}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="pt-10 flex justify-center">
          <div className="w-[20%] btn-group grid grid-cols-2">
            <button
              className="btn btn-outline"
              onClick={() => previousClickHandler(currentIndex - 1)}
            >
              Previous page
            </button>
            <button
              className="btn btn-outline"
              onClick={() => nextClickHandler(currentIndex + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const id = context.params; //starts with 0
  const offset = id.index * 12; //offset = index * 12(item per page)

  const { data } = await axios.get(
    `http://127.0.0.1:8000/alumni/?limit=12&offset=${offset}`
  );

  const totalPage = Math.ceil(data.count / 12);
  return {
    props: {
      crews: data.results,
      maxIndex: totalPage,
    },
  };
}
