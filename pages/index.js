import Image from "next/image";
import Profile from "../components/Profile.js";
import learnmore_arrow from "../public/learnmore_arrow.svg";
import Link from "next/Link";
import axios from "axios";

export default function Home({ profs, alumni }) {
  return (
    <div className="mt-28">
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
            <div className="flex flex-wrap mb-2 pt-2 pb-4 cursor-pointer">
              <Link href="/admission">
                <Image src={learnmore_arrow} alt="learnmore arrow" />
              </Link>
              <Link href="/admission">
                <span className="self-center pl-2 whitespace-nowrap">
                  Learn more about the admission
                </span>
              </Link>
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
                  <div className="cursor-pointer">
                    <Link href="/program">
                      <h3 className="text-2xl">PROGRAM</h3>
                    </Link>
                    <Link href="/program">
                      <p className="text-base">Software Engineering program</p>
                    </Link>
                  </div>
                  <div className="flex flex-wrap py-2 cursor-pointer">
                    <Link href="/program">
                      <Image src={learnmore_arrow} alt="learnmore arrow" />
                    </Link>
                    <Link href="/program">
                      <span className="self-center pl-2 whitespace-nowrap">
                        Learn more
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[url('../public/news_index.svg')] bg-cover h-64 w-full my-5 p-0 flex flex-col justify-end text-white font-bold">
              <div className="bg-[rgb(0,0,0,0.6)] flex flex-col justify-center">
                <div className="px-6 py-4 flex justify-between">
                  <div className="cursor-pointer">
                    <Link href="/news">
                      <h3 className="text-2xl">News</h3>
                    </Link>
                    <Link href="/news">
                      <p className="text-base">News around kmitl</p>
                    </Link>
                  </div>
                  <div className="flex flex-wrap py-2 cursor-pointer">
                    <Link href="/news">
                      <Image src={learnmore_arrow} alt="learnmore arrow" />
                    </Link>
                    <Link href="/news">
                      <span className="self-center pl-2 whitespace-nowrap">
                        Learn more
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[50%] w-full flex flex-col justify-start pl-10">
            <div className="bg-[url('../public/glasgowjoin.svg')] bg-cover h-[34.5rem] w-full my-5 p-0 flex flex-col justify-end text-white font-bold">
              <div className="bg-[rgb(0,0,0,0.6)] flex flex-col justify-center">
                <div className="px-6 py-[1.375rem] flex justify-between">
                  <div className="flex flex-col justify-center cursor-pointer">
                    <Link href="/kmitl_glasgow">
                      <p className="text-2xl">Join Glasgow - KMITL program</p>
                    </Link>
                  </div>
                  <div className="flex flex-wrap py-2 cursor-pointer">
                    <Link href="/kmitl_glasgow">
                      <Image src={learnmore_arrow} alt="learnmore arrow" />
                    </Link>
                    <Link href="/kmitl_glasgow">
                      <span className="self-center pl-2 whitespace-nowrap">
                        Learn more
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-0 mx-auto h-full w-full max-w-[1920px] px-10">
        <div className="flex flex-col pt-16">
          <h3 className="text-4xl font-bold">OUR LECTURERS</h3>
          <p className="text-xl font-regular">
            Professionals that works with us
          </p>
          <div className="flex self-center py-10">
            {profs.map((prof) => (
              <Profile
                role="Professor"
                name={prof.name}
                tel={prof.name}
                email={prof.email}
                twitter={prof.twitter}
                facebook={prof.facebook}
                about={prof.about}
              />
            ))}
          </div>
          <div className="py-2.5 px-11 flex flex-wrap self-center text-white">
            <Link href="/lecturer/0">
              <button className="text-white text-base font-bold btn btn-wide">
                Show More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="my-0 mx-auto h-full w-full max-w-[1920px] px-10">
        <div className="flex flex-col pt-16">
          <h3 className="text-4xl font-bold">OUR ALUMNI</h3>
          <p className="text-xl font-regular">Respectable seniors</p>
          <div className="flex self-center py-10">
            {alumni.map((alumnus) => (
              <Profile
                role="Alumni"
                name={alumnus.name}
                tel={alumnus.name}
                email={alumnus.email}
                twitter={alumnus.twitter}
                facebook={alumnus.facebook}
                about={alumnus.about}
              />
            ))}
          </div>
          <div className="py-2.5 px-11 flex flex-wrap self-center text-white">
            <Link href="/alumni/0">
              <button className="text-white text-base font-bold btn btn-wide">
                Show More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const profResponse = await axios.get(
    "http://127.0.0.1:8000/professors/?limit=4"
  );
  const profsResult = profResponse.data.results;
  const alumniResponse = await axios.get(
    "http://127.0.0.1:8000/alumni/?limit=4"
  );
  const alumniResult = alumniResponse.data.results;
  return {
    props: {
      profs: profsResult,
      alumni: alumniResult,
    },
  };
}
