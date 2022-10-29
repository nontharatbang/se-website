import styles from "../styles/Program.module.css";
import Image from "next/image";
import learnmore_arrow from "../public/learnmore_arrow.svg";
import Link from "next/Link";

export default function program() {
  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.heading}>
          <h1 className={styles.h1}>Explore program</h1>
          <h1 className={styles.h1}>Avaiable at SE@kmitl</h1>
        </div>
      </div>
      <div className={styles.pagelink}>
        <div className={styles.letter}>
          <h3 className={styles.h3}>PROGRAM</h3>
        </div>
        <div className={styles.row}>
          <div className={styles.left1}>
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
                      <p className={styles.p}>kmitl - glasgow</p>
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
