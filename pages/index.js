import Head from "next/head";
import Image from "next/image";
import Profile from "../components/Profile.js";
import learnmore_arrow from "../public/learnmore_arrow.svg";
import Link from "next/Link";

export default function Home() {
  return (
    <div>
      <div className="bg-[url('../public/index_background.svg')] bg-cover bg-center min-h-808 text-white font-bold">
        <div>
          <h1 className="m-0 pt-72 text-8xl font-bold text-center">
            Software Engineering
          </h1>
          <h2 className="text-6xl font-bold text-center pt-7">
            Admission 2023
          </h2>
        </div>
        <div className="flex items-center text-xl pt-28">
          <div className="max-w-[50%] w-full flex flex-col justify-end pr-10"></div>
          <div className="max-w-[50%] w-full flex flex-col justify-start pl-10">
            <p className="pt-2">Upcoming Admission Round 1</p>
            <p className="pt-2">Dec 2022</p>
            <div className="flex flex-wrap mb-2 pt-2 pb-4">
              <Image src={learnmore_arrow} alt="learnmore arrow" />
              <span className="self-center pl-2 whitespace-nowrap">
                Learn more about the course
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="my-0 mx-auto h-full w-full max-w-[1920px] px-10">
        <div className="flex pt-16">
          <div className="max-w-[50%] w-full flex flex-col justify-end pr-10">
            <div className="bg-[url('../public/program_link.svg')] bg-cover h-64 w-full my-5 p-0 flex flex-col justify-end text-white font-bold">
              <div className="bg-[rgb(0,0,0,0.6)] flex flex-col justify-center">
                <div className="px-6 py-4 flex justify-between">
                  <div>
                    <h3 className="text-2xl">PROGRAM</h3>
                    <p className="text-base">Software Engineering program</p>
                  </div>
                  <div className="flex flex-wrap py-2">
                    <Image src={learnmore_arrow} alt="learnmore arrow" />
                    <span className="self-center pl-2 whitespace-nowrap">
                      Learn more
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[url('../public/event_link.svg')] bg-cover h-64 w-full my-5 p-0 flex flex-col justify-end text-white font-bold">
              <div className="bg-[rgb(0,0,0,0.6)] flex flex-col justify-center">
                <div className="px-6 py-4 flex justify-between">
                  <div>
                    <h3 className="text-2xl">EVENT</h3>
                    <p className="text-base">Software Engineering event</p>
                  </div>
                  <div className="flex flex-wrap py-2">
                    <Image src={learnmore_arrow} alt="learnmore arrow" />
                    <span className="self-center pl-2 whitespace-nowrap">
                      Learn more
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[50%] w-full flex flex-col justify-start pl-10">
            <div className="bg-[url('../public/news_link.svg')] bg-cover h-[34.5rem] w-full my-5 p-0 flex flex-col justify-end text-white font-bold">
              <div className="bg-[rgb(0,0,0,0.6)] flex flex-col justify-center">
                <div className="px-6 py-[1.375rem] flex justify-between">
                  <div className="flex flex-col justify-center">
                    <p className="text-2xl">
                      There is a flood due to heavy rain in KMITL
                    </p>
                  </div>
                  <div className="flex flex-wrap py-2">
                    <Image src={learnmore_arrow} alt="learnmore arrow" />
                    <span className="self-center pl-2 whitespace-nowrap">
                      Learn more
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-0 mx-auto h-full w-full max-w-[1920px] px-10">
        <div className="flex flex-col pt-16">
          <h3 className="text-4xl">OUR LECTURERS</h3>
          <p>Professionals that works with us</p>
          <div className="flex self-center py-10">
            <Profile />
            <Profile />
            <Profile />
            <Profile />
          </div>
          <div className="bg-[#989898] rounded-md py-2.5 px-11 flex flex-wrap self-center text-white cursor-pointer">
            <Link href="/lecturer/0">
              <p className={"text-base"}>Show More</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="my-0 mx-auto h-full w-full max-w-[1920px] px-10">
        <div className="flex flex-col pt-16">
          <h3 className="text-4xl">OUR ALUMNI</h3>
          <p>Respectable seniors</p>
          <div className="flex self-center py-10">
            <Profile />
            <Profile />
            <Profile />
            <Profile />
          </div>
          <div className="bg-[#989898] rounded-md py-2.5 px-11 flex flex-wrap self-center text-white cursor-pointer">
            <Link href="/alumni/0">
              <p className="text-base">Show More</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
