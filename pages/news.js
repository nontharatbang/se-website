import { useState } from "react";
import Router from "next/router";
import axios from "axios";
import React from "react";
import Link from "next/Link";

export default function news({ newsList }) {
  const [id, setId] = useState(1);

  const readMoreHandler = (id) => {
    Router.push(`/newsinfo/${id}`);
  };

  const onClickedHandler = () => {
    Router.push("/publish");
  };

  return (
    <div className="mt-28">
      <div className="bg-[url('../public/news_bg.svg')] bg-cover bg-top min-h-[480px] text-white font-bold flex flex-col justify-center">
        <h1 className="px-20 text-7xl uppercase">News</h1>
      </div>
      <div className="my-10 mx-auto px-10 h-full w-full max-w-[1920px]">
        <div className="my-10 px-40 flex justify-end">
          <button
            className="mx-2 text-white btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            onClick={() => onClickedHandler()}
          >
            Create
          </button>
        </div>
        {newsList.map((news) => (
          <div className="px-40 content-center" key={news.id}>
            <div className="my-8 card card-side bg-base-100 shadow-xl content-center rounded-sm">
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
                  <button
                    className="btn hover:bg-orange-400 bg-orange-400 text-white"
                    onClick={() => readMoreHandler(news.id)}
                  >
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

export async function getServerSideProps() {
  const { data } = await axios.get(`http://127.0.0.1:8000/news/`);

  return {
    props: {
      newsList: data.reverse(),
    },
  };
}
