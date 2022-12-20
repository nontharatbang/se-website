import Profile from "../../components/Profile.js";
import { useState } from "react";
import Router from "next/router";
import axios from "axios";
import React from "react";
import Link from "next/Link";

export default function news({ newsList }) {
  return (
    <div className="mt-28">
      <div className="bg-[url('../public/news_bg.svg')] bg-cover bg-top min-h-[480px] text-white font-bold flex flex-col justify-center">
        <h1 className="px-20 text-7xl uppercase">News</h1>
      </div>
      <div className="my-10 mx-auto px-10 h-full w-full max-w-[1920px]">
        {newsList.reverse().map((news) => (
          <div className="px-40 content-center">
            <div className="my-4 card card-side bg-base-100 shadow-xl content-center rounded-sm">
              <figure>
                <img
                  src={`https://res.cloudinary.com/dw7kpdgyk/${news.picture}`}
                  alt="Movie"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl font-extrabold underline">
                  {news.title}
                </h2>
                <p className="w-[40rem] font-medium text-lg leading-7 items-center text-justify">
                  Date: {news.created.slice(0, 10)}
                  <br />
                  <br />
                  Detail: {news.detail}
                </p>
                <div className="card-actions justify-end">
                  <button className="btn hover:bg-orange-400 bg-orange-400 text-white">
                    Read Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { data } = await axios.get(`http://127.0.0.1:8000/news/`);

  return {
    props: {
      newsList: data,
    },
  };
}
