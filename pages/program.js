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
          <h3 className="pl-2 text-2xl font-bold">PROGRAM</h3>
        </div>
        <div className="max-w-[40%] w-full flex flex-col justify-end pr-10">
          <div className="py-0 px-2 max-w-5/12 flex flex-start">
            <div className={styles.curriculum}>
              <div className={styles.shortbox}>
                <div className={styles.shortinfo}>
                  <div>
                    <Link href="/curriculum">
                      <p className={styles.p}>curriculum</p>
                    </Link>
                  </div>
                  <div className={styles.learnmore}>
                    <Image src={learnmore_arrow} alt="learnmore arrow" />
                    <Link href="/curriculum">
                      <span className={styles.span}>Learn more</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right1}>
            <div className={styles.kmitlxglasgow}>
              <div className={styles.longbox}>
                <div className={styles.longinfo}>
                  <div>
                    <Link href="/kmitlxglasgow">
                      <p className={styles.p}>kmitl x glasgow</p>
                    </Link>
                  </div>
                  <div className={styles.learnmore}>
                    <Image src={learnmore_arrow} alt="learnmore arrow" />
                    <Link href="/kmitlxglasgow">
                      <span className={styles.span}>Learn more</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.left2}>
            <div className={styles.studyplan}>
              <div className={styles.longbox}>
                <div className={styles.longinfo}>
                  <div>
                    <Link href="/studyplan">
                      <p className={styles.p}>Study plan</p>
                    </Link>
                  </div>
                  <div className={styles.learnmore}>
                    <Image src={learnmore_arrow} alt="learnmore arrow" />
                    <Link href="/studyplan">
                      <span className={styles.span}>Learn more</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right2}>
            <div className={styles.internship}>
              <div className={styles.shortbox}>
                <div className={styles.shortinfo}>
                  <div>
                    <Link href="/internship">
                      <p className={styles.p}>Internship</p>
                    </Link>
                  </div>
                  <div className={styles.learnmore}>
                    <Image src={learnmore_arrow} alt="learnmore arrow" />
                    <Link href="/internship">
                      <span className={styles.span}>Learn more</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.left1}>
            <div className={styles.studyabroad}>
              <div className={styles.shortbox}>
                <div className={styles.shortinfo}>
                  <div>
                    <Link href="/studyabroad">
                      <p className={styles.p}>study abroad</p>
                    </Link>
                  </div>
                  <div className={styles.learnmore}>
                    <Image src={learnmore_arrow} alt="learnmore arrow" />
                    <Link href="/studyabroad">
                      <span className={styles.span}>Learn more</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right1}>
            <div className={styles.lecturer}>
              <div className={styles.longbox}>
                <div className={styles.longinfo}>
                  <div>
                    <Link href="/lecturer">
                      <p className={styles.p}>lecturer</p>
                    </Link>
                  </div>
                  <div className={styles.learnmore}>
                    <Image src={learnmore_arrow} alt="learnmore arrow" />
                    <Link href="/lecturer">
                      <span className={styles.span}>Learn more</span>
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
