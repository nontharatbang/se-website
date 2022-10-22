import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import learnmore_arrow from "../public/learnmore_arrow.svg";

export default function Home() {
  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.heading}>
          <h1 className={styles.h1}>Software Engineering</h1>
          <h2 className={styles.h2}>Admission 2023</h2>
        </div>
        <div className={styles.headinginfo}>
          <div className={styles.leftbox}></div>
          <div className={styles.rightbox}>
            <p className={styles.p}>Upcoming Admission Round 1</p>
            <p className={styles.p}>Dec 2022</p>
            <div className={styles.learnmore}>
              <Image src={learnmore_arrow} alt="learnmore arrow" />
              <span className={styles.span}>Learn more about the course</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.pagelink}>
        <div className={styles.pagelinkContainer}>
          <div className={styles.leftbox}>
            <div className={styles.programlink}>
              <div className={styles.infobox}>
                <div className={styles.linkinfo}>
                  <div>
                    <h3 className={styles.h3}>PROGRAM</h3>
                    <p className={styles.p}>Software Engineering program</p>
                  </div>
                  <div className={styles.learnmore}>
                    <Image src={learnmore_arrow} alt="learnmore arrow" />
                    <span className={styles.span}>Learn more</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.eventlink}>
              <div className={styles.infobox}>
                <div className={styles.linkinfo}>
                  <div>
                    <h3 className={styles.h3}>EVENT</h3>
                    <p className={styles.p}>Software Engineering event</p>
                  </div>
                  <div className={styles.learnmore}>
                    <Image src={learnmore_arrow} alt="learnmore arrow" />
                    <span className={styles.span}>Learn more</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightbox}>
            <div className={styles.news}>
              <div className={styles.infobox}>
                <div className={styles.newsinfo}>
                  <div>
                    <p className={styles.newsP}>
                      There is a flood due to heavy rain in KMITL
                    </p>
                  </div>
                  <div className={styles.learnmore}>
                    <Image src={learnmore_arrow} alt="learnmore arrow" />
                    <span className={styles.span}>Learn more</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="crew">
        <h3>OUR LECTURERS</h3>
        <p>Professionals that works with us</p>
        {/*  add lecturers here  */}
      </div>
    </div>
  );
}
