import axios from "axios";
import Router from "next/router";

export default function newsinfo({ news, index }) {
  const updateButtonHandler = () => {
    console.log(index.index);
    Router.push(`/updatenews/${index.index}`);
  };

  const deleteButtonHandler = async () => {
    const endpoint = `http://127.0.0.1:8000/news/${index.index}`;
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(endpoint, options);
    Router.push("/news");
  };

  return (
    <div className="mt-28">
      <div className="mx-auto pt-4 px-20 h-full w-full max-w-[1920px]">
        <div className="flex justify-end">
          <button
            className="mx-2 text-white btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            onClick={() => updateButtonHandler()}
          >
            Update
          </button>
          <button
            className="mx-2 text-white btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            onClick={() => deleteButtonHandler()}
          >
            Delete
          </button>
        </div>
        <div className="my-10">
          <h1 className="text-5xl font-bold content-fit flex justify-center">
            {news.title}
          </h1>
        </div>
        <div className="h-1 bg-black"></div>
        <div className="flex justify-center my-10">
          <img
            className="w-[50rem]"
            src={`https://res.cloudinary.com/dw7kpdgyk/${news.picture}`}
            alt="Movie"
          />
        </div>
        <p className="font-medium text-xl text-left">
          Date: {news.created.slice(0, 10)}
        </p>
        <div className="my-10 flex justify-center">
          <p className="font-medium text-2xl leading-7 items-center text-justify">
            {news.detail}
          </p>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const id = context.params;
  const newsPage = id.index;
  const { data } = await axios.get(`http://127.0.0.1:8000/news/${newsPage}`);

  return {
    props: {
      news: data,
      index: id,
    },
  };
}
