import styles from "../styles/Glasgow.module.css";
import Image from "next/image";
import glasgow_icon from "../public/glasgow_icon.svg";
import Link from "next/Link";

export default function curriculum() {
  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.heading}>
          <h1 className={styles.h1}>Kmitl - Glasgow</h1>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.left}>
            <h2 className={styles.h2}>
              KMITL-Glasgow Double-Degree Program in Software Engineering
            </h2>
          </div>
          <div className={styles.right}>
            <p className={styles.p}>
              The KMITL-Glasgow Double-Degree Program in Software Engineering is
              a collaboration between KMITL and the University of Glasgow, UK.
              The program enables qualified students who have completed Year 2
              in the SE program at the International College to enter Years 3
              and 4 of the Software Engineering program at the University of
              Glasgow's School of Computing Science. At Glasgow, the student
              will have an opportunity to study with world-renowned academics,
              as well as working on team projects with multi-national talents.
              This is an excellent opportunity for the students who wish to gain
              studying and living experience in the UK.
            </p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>
            <h2 className={styles.h2}>About University of Glasgow</h2>
            <div className={styles.imagecontainer}>
              <Image src={glasgow_icon} alt="glasogw icon" />
            </div>
          </div>
          <div className={styles.right}>
            <p className={styles.p}>
              Founded in 1451, theUniversity of Glasgow(Glasgow, United Kingdom)
              is one of the oldest universities in the world, and has been
              ranked asone of the world's top 100 universities. With its long
              history in advanced research, the University of Glasgow has been
              home tosix Nobel-prize winners. The University'sSchool of
              Computing Sciencehas consistently been ranked in theUK's top 10 in
              computing. Glasgow'sSoftware Engineering programis one of the
              first programs in the world that specialize in software
              engineering and is highly respected by software industry.
            </p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>
            <h2 className={styles.h2}>Admission</h2>
          </div>
          <div className={styles.right}>
            <p className={styles.p}>
              Requirements for the students who wish to join this double-degree
              program: Completed Year 2 of the B.Eng. in Software Engineering
              program with GPA of 3.0 or more IELTS score of 6.5 or more, with
              no subtest below 6.0
            </p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>
            <h2 className={styles.h2}>Degrees</h2>
          </div>
          <div className={styles.right}>
            <p className={styles.p}>
              Students who have completed Year 4 of this double-degree program
              will be awarded a BSc Honours degree in Software Engineering from
              the University of Glasgow and aB.Eng. degree in Software
              Engineering from KMITL. Students who maintain good academic
              records during their studies at the University of Glasgow will be
              eligible to transfer to a one-year Master program in Software
              Engineering at the end of Year 4 and graduate with the Master of
              Science degree in Software Engineering awarded by University of
              Glasgow at the end of Year 5.
            </p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>
            <h2 className={styles.h2}>Tuition Fees</h2>
          </div>
          <div className={styles.right}>
            <p className={styles.p}>
              The tuition fee rates are as follows*:
              <br />
              <br />
              2 years at KMITL, Tuition fee : THB 180,000 per year
              <br />
              <br />
              2 years at Glasgow, Tuition fee with scholarship : GBP 17,536 per
              year
              <br />
              <br />* Rates as of Academic Year 2020. Every student joining the
              double-degree program is entitled to theKMITL - Glasgow
              Undergraduate Scholarship which provides 20% reduction from the
              full tuition-fee rate for international students at Glasgow
              University.
            </p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>
            <h2 className={styles.h2}>Application Procedure</h2>
          </div>
          <div className={styles.right}>
            <p className={styles.p}>
              Applications for KMITL-Glasgow Double-Degree Program in Software
              Engineering are made when students finish the second semester of
              Year 2 of their study in the SE program. Second-year SE students
              who meet the requirements above and wish to apply need to inform
              the SE program director before the end of Year 2 Semester 2 and
              submit their applications on the UCAS systemno later than 30 June
              (of the year they are planning to enter UoG) at&nbsp;
              <Link href="https://www.ucas.com/students">
                https://www.ucas.com/students.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}