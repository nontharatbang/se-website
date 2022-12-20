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
    <div className="mt-28">
      <div className="bg-[url('../public/news_bg.svg')] bg-cover bg-top min-h-[480px] text-white font-bold flex flex-col justify-center">
        <h1 className="px-20 text-7xl uppercase">News</h1>
      </div>
      <div className="my-10 mx-auto px-10 h-full w-full max-w-[1920px]">
        <div className="px-40 content-center">
          <div className="card card-side bg-base-100 shadow-xl content-center rounded-sm">
            <figure>
              <img
                src="https://res.cloudinary.com/dw7kpdgyk/image/upload/v1671554192/Project/kmitl_news1Edited_2_vdliv6.svg"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-extrabold underline">
                There is a flood due to heavy rain in KMITL (Heading)
              </h2>
              <p className="w-[40rem] font-medium text-lg leading-7 items-center text-justify">
                11 Sep. 2022 (date)
                <br />
                <br />
                (content) For the past two days, the rain continues to fall
                without any sign of stopping. Many people have a hard time
                driving from their home to the university.
              </p>
              <div className="card-actions justify-end">
                <button className="btn hover:bg-orange-400 bg-orange-400 text-white">
                  <Link href="/news/newsinfo">Read Now(Chang this later)</Link>
                </button>
              </div>
            </div>
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
