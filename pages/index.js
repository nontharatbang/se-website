import Head from "next/head";
import Image from "next/image";
import Profile from "../component/Profile.js";
import styles from "../styles/Home.module.css";
// import global from "../styles/global.css";
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
            <p className={styles.heroP}>Upcoming Admission Round 1</p>
            <p className={styles.heroP}>Dec 2022</p>
            <div className={styles.learnmore}>
              <Image src={learnmore_arrow} alt="learnmore arrow" />
              <span className={styles.span}>Learn more about the course</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.pagelink}>
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
      <div className={styles.container}>
        <div className={styles.crew}>
          <h3 className={styles.crewH}>OUR LECTURERS</h3>
          <p>Professionals that works with us</p>
          <div className={styles.lecturercards}>
            <Profile />
            <Profile />
            <Profile />
            <Profile />
          </div>
          <div className={styles.showmore}>
            <p className={styles.p}>Show More</p>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.crew}>
          <h3 className={styles.crewH}>OUR LECTURERS</h3>
          <p>Professionals that works with us</p>
          <div className={styles.lecturercards}>
            <Profile />
            <Profile />
            <Profile />
            <Profile />
          </div>
          <div className={styles.showmore}>
            <p className={styles.p}>Show More</p>
          </div>
        </div>
      </div>
    </div>
  );
}
