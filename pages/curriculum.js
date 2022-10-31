import styles from "../styles/Curriculum.module.css";
import Image from "next/image";
import program_structure from "../public/program_structure.svg";

export default function curriculum() {
  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.heading}>
          <h1 className={styles.h1}>Curriculum</h1>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.left}>
            <h2 className={styles.h2}>
              B.Eng. in Software Engineering Program
            </h2>
          </div>
          <div className={styles.right}>
            <p className={styles.p}>
              The B.Eng. in Software Engineering Programis a 4-year
              undergraduate program aiming at producing graduates who are
              capable of working confidently in the international software
              industry as well as pursuing postgraduate study and research in
              leading universities worldwide. The curriculum of the program is
              designed in accordance with the recent ACM/IEEE guideline for
              undergraduate curriculum in software engineering.
            </p>
          </div>
        </div>
        <div className={styles.row2}>
          <div className={styles.structure}>
            <h2 className={styles.h2}>Programming structure</h2>
          </div>
          <div className={styles.imagecontainer}>
            <Image src={program_structure} alt="Program structure" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>
            <h2 className={styles.h2}>YEAR 1 & YEAR 2</h2>
          </div>
          <div className={styles.right}>
            <p className={styles.p}>
              In the first two years, the students will study basic courses in
              mathematics, computer science, and software engineering and
              develop their programming skills using various programming
              languages (including Python, C, C++, Java, etc.). Also, the
              students will be trained to communicate correctly and effectively.
              <br />
              <br />
              At the end of Year 2, every student is required to undertake an
              internship in a software company for 8 - 10 weeks. All the courses
              in the first two years will be held at the International College
              in the Bangkok Campus of KMITL.
            </p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>
            <h2 className={styles.h2}>YEAR 3 and YEAR 4 (KMITL)</h2>
          </div>
          <div className={styles.right}>
            <p className={styles.p}>
              In Year 3 and Year 4, the students will learn advanced topics in
              software engineering and important software development
              methodologies that are used in practice. The students will have
              opportunities to the apply the knowledge and skills they have
              acquired to conduct a team software project in Year 3 and a
              one-year research project in Year 4. Students entering Year 3 are
              required to take one of the following specializations:
              <br />
              <br />
              <b>Enterprise Software Engineering</b> - Specializing inlarge and
              complex software for enterprises and distributed systems
              <br />
              <br />
              <b>Internet of Things</b> - Specializing in the Internet of
              Things, including embedded and mobile systems
              <br />
              <br />
              <b>Intelligent Systems</b> - Specializing in applications of
              artificial intelligence and data science, including machine
              learning and Big Data
              <br />
              <br />
              The study plans for these three specializations differ in some
              required courses. Also the students are recommended to toe work on
              their senior projects that utilize the knowledge of their
              respective specializations.
            </p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>
            <h2 className={styles.h2}>
              Year 3 and Year 4 <br />
              (KMITL-Glasgow Double-Degree Program)
            </h2>
          </div>
          <div className={styles.right}>
            <p className={styles.p}>
              The students joining the KMITL-Glasgow Double-DegreeProgram will
              take courses in Years 3 and 4 in the Software Engineering program
              at the Schoolof Computing Science, University of Glasgow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
