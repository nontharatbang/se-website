import styles from "../styles/Program.module.css";
import Image from "next/image";
import learnmore_arrow from "../public/learnmore_arrow.svg";
import Link from "next/Link";

export default function program() {
  return (
    <div>
      <div className="bg-[url('../public/program_background.svg')] bg-cover bg-center min-h-[480px] text-white font-bold">
        <div>
          <h1 className="px-20 pt-[140px] text-7xl uppercase">
            Explore program
          </h1>
          <h1 className="px-20 pt-4 text-7xl uppercase">
            Avaiable at SE@kmitl
          </h1>
        </div>
      </div>
      <div className="my-0 mx-auto px-10 h-full w-full max-w-[1920px]">
        <div className="my-8 mx-auto">
          <h3 className="pl-11 text-2xl font-bold">PROGRAM</h3>
        </div>
        <div className="px-10 w-full flex">
          <div className="max-w-[40%] w-full px-2 flex">
            <div className="bg-[url('../public/curriculum.svg')] bg-cover rounded-lg h-[390px] w-full my-4 flex flex-col justify-end text-white font-bold">
              <div className="bg-[rgb(0,0,0,0.6)] rounded-b-lg h-20 flex flex-col justify-center">
                <div className="px-5 py-2 flex justify-between">
                  <div>
                    <Link href="/curriculum">
                      <p className="pt-1 text-2xl uppercase">curriculum</p>
                    </Link>
                  </div>
                  <div className="flex flex-wrap py-2">
                    <Image src={learnmore_arrow} alt="learnmore arrow" />
                    <Link href="/curriculum">
                      <span className="self-center pl-2 whitespace-nowrap">
                        Learn more
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[60%] w-full px-2 flex">
            <div className="bg-[url('../public/kmitl_glasgow.svg')] bg-cover rounded-lg h-[390px] w-full my-4 flex flex-col justify-end text-white font-bold">
              <div className="rounded-b-lg h-20 flex flex-col justify-center">
                <div className="px-5 py-2 justify-between">
                  <div>
                    <Link href="/kmitlxglasgow">
                      <p className="pt-1 text-2xl uppercase">kmitl x glasgow</p>
                    </Link>
                  </div>
                  <div className="flex flex-wrap py-2">
                    <Image src={learnmore_arrow} alt="learnmore arrow" />
                    <Link href="/kmitlxglasgow">
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
        <div className="px-10 w-full flex">
          <div className="max-w-[60%] w-full px-2 flex">
            <div className="bg-[url('../public/study_plan.svg')] bg-cover rounded-lg h-[390px] w-full my-4 flex flex-col justify-end text-white font-bold">
              <div className="rounded-b-lg h-20 flex flex-col justify-center">
                <div className="px-5 py-2 justify-between">
                  <div>
                    <Link href="/studyplan">
                      <p className="pt-1 text-2xl uppercase">Study plan</p>
                    </Link>
                  </div>
                  <div className="flex flex-wrap py-2">
                    <Image src={learnmore_arrow} alt="learnmore arrow" />
                    <Link href="/studyplan">
                      <span className="self-center pl-2 whitespace-nowrap">
                        Learn more
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[40%] w-full px-2 flex">
            <div className="bg-[url('../public/internship.svg')] bg-cover rounded-lg h-[390px] w-full my-4 flex flex-col justify-end text-white font-bold">
              <div className="bg-[rgb(0,0,0,0.6)] rounded-b-lg h-20 flex flex-col justify-center">
                <div className="px-5 py-2 flex justify-between">
                  <div>
                    <Link href="/internship">
                      <p className="pt-1 text-2xl uppercase">Internship</p>
                    </Link>
                  </div>
                  <div className="flex flex-wrap py-2">
                    <Image src={learnmore_arrow} alt="learnmore arrow" />
                    <Link href="/internship">
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
        <div className="px-10 w-full flex">
          <div className="max-w-[40%] w-full px-2 flex">
            <div className="bg-[url('../public/study_abroad.svg')] bg-cover rounded-lg h-[390px] w-full my-4 flex flex-col justify-end text-white font-bold">
              <div className="bg-[rgb(0,0,0,0.6)] rounded-b-lg h-20 flex flex-col justify-center">
                <div className="px-5 py-2 flex justify-between">
                  <div>
                    <Link href="/curriculum">
                      <p className="pt-1 text-2xl uppercase">study abroad</p>
                    </Link>
                  </div>
                  <div className="flex flex-wrap py-2">
                    <Image src={learnmore_arrow} alt="learnmore arrow" />
                    <Link href="/curriculum">
                      <span className="self-center pl-2 whitespace-nowrap">
                        Learn more
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[60%] w-full px-2 flex">
            <div className="bg-[url('../public/lecturer.svg')] bg-cover rounded-lg h-[390px] w-full my-4 flex flex-col justify-end text-white font-bold">
              <div className="rounded-b-lg h-20 flex flex-col justify-center">
                <div className="px-5 py-2 justify-between">
                  <div>
                    <Link href="/kmitlxglasgow">
                      <p className="pt-1 text-2xl uppercase">lecturer</p>
                    </Link>
                  </div>
                  <div className="flex flex-wrap py-2">
                    <Image src={learnmore_arrow} alt="learnmore arrow" />
                    <Link href="/kmitlxglasgow">
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
    </div>
  );
}
