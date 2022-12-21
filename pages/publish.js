import axios from "axios";
import Router from "next/router";

export default function publish() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      title: event.target.title.value,
      picture: event.target.picture.value,
      detail: event.target.detail.value,
    };

    const JSONdata = JSON.stringify(data);
    console.log(JSONdata);
    const endpoint = "http://127.0.0.1:8000/news/";
    console.log();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    console.log(options);

    const response = await fetch(endpoint, options);
  };

  function onClickedHandled() {
    Router.push("/news");
  }

  return (
    <div className="mt-28">
      <div className="mx-auto pt-4 px-20 h-full w-full max-w-[1920px]">
        <h1 className="text-5xl font-bold content-fit flex justify-center">
          Publish a news
        </h1>
        <div className="my-10 h-1 bg-black"></div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="text-2xl font-medium label-text">Title</span>
            </label>
            <input
              id="title"
              type="text"
              placeholder="Title"
              className="w-1/2 input input-bordered"
            />
            <label className="label">
              <span className="text-2xl font-medium label-text">Picture</span>
            </label>
            <input
              id="picture"
              type="text"
              placeholder="Picture url"
              className="w-1/2 input input-bordered"
            />
            <label className="label">
              <span className="text-2xl font-medium label-text">Detail</span>
            </label>
            <textarea
              id="detail"
              className="w-1/2 border-stone-300 textarea textarea-ghost"
              placeholder="news's details"
            ></textarea>
          </div>
          <div className="my-16 flex justify-start">
            <button
              type="submit"
              className="text-white btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
              onClick={() => onClickedHandled()}
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
