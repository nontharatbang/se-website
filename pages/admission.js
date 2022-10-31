import styles from "../styles/Admission.module.css";
import Image from "next/image";
import Link from "next/Link";

export default function admission() {
  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.heading}>
          <h1 className={styles.h1}>admissions</h1>
        </div>
      </div>
      <div className={styles.button1}>TCAS Admissions</div>
      <div className={styles.button2}>Direct Admissions</div>
      <div className={styles.button3}>Application Procedure and Schedule</div>
      <div className={styles.first_section}>
        The B.Eng. in Software Engineering program welcomes both Thai and
        international applicants. For 2021 Admissions, the program accepts new
        students through 2 admission channels: <br></br>
        <br />
        1. TCAS Admissions <br /> 2. Direct Admissions <br /> In both channels,
        there are a number of application rounds. International applicants
        residing outside Thailand are recommended to apply through direct
        admissions. Please see below for the admission requirements and
        schedules for each round of each admission channel.
      </div>
      <div className={styles.button4}>TCAS Admissions</div>
      <div className={styles.second_section}>
        TCAS admissions are open to Thai and non-Thai nationals who graduated or
        about to graduate from schools in Thailand. Currently, TCAS Round 1 is
        open. There are many application tracks for applicants of the Software
        Engineering program in TCAS Round 1. See below for the admissions
        requirements and schedule for each track. <br /> 1. การรับแบบ Portfolio
        โครงการเรียนดี ช้างเผือก กลุ่มโรงเรียนสายสามัญ <br /> 2. การรับแบบ
        Portfolio โครงการรางวัลและประกาศนียบัตรทางวิชาการ <br /> 3. การรับแบบ
        Portfolio โครงการเพชรยอดมงกุฎ <br /> 4. การรับแบบ Portfolio
        โครงการโรงเรียนวิทยาศาสตร์ <br /> 5. โควตานักเรียน
        มูลนิธิส่งเสริมโอลิมปิกวิชาการและพัฒนามาตรฐานวิทยาศาสตร์ศึกษา
        ในพระอุปถัมภ์สมเด็จพระเจ้าพี่นางเธอ เจ้าฟ้ากัลยาณิวัฒนา
        กรมหลวงนราธิวาสราชนครินทร์ (สอวน.) <br /> Applications for TCAS Round 1
        can be submitted on KMITL's TCAS admissions website until21 December
        2020 at https://www1.reg.kmitl.ac.th/TCAS/tcas.php
      </div>
      <div className={styles.button5}>Direct Admissions</div>
      <div className={styles.third_section}>
        Thai and non-Thai candidates both in Thailand and abroad may apply for
        admissions directly with the Faculty of Engineering, KMITL. Selection of
        successful candidates through the direct admissions is based on the
        submitted academic records, standardized test scores, and an interview.
        There is no paper examination. <br /> <br></br> Note that, even though
        the direct admissions are done through the Faculty of Engineering
        directly, all accepted candidates who are Thai nationals are still
        required to confirm the acceptance of their admission offers on the
        national TCAS website during the period specified by the Council of
        University Presidents of Thailand (CUPT). <br /> Please see the
        application procedure and criteria below. <br /> <br></br>1. Eligibility
        requirements <br /> <br></br>To be eligible for consideration, you must
        satisfy the requirements set out in 1.1, 1.2, 1.3, and 1.4 below. <br />
        <br></br>
        1.1 Educational qualifications <br /> <br></br>You must have obtained or
        be expected to obtain prior to the start of Academic Year 2021 an
        educational qualification equivalent to (or higher than) a high school
        diploma in Thailand. Please see https://bit.ly/2Eax5aLfor the criteria
        for high school equivalency endorsed by the Council of University
        Presidents of Thailand. <br /> <br></br> 1.2 General academic
        requirement <br></br> <br /> You are expected to demonstrate good
        academic competence. Specifically, you must be able to provide at least
        one of the following: <br /> SAT general test score of 1020 or higher
        <br />
        GSAT score of 1020 or higher <br /> ACT composite score of 19 or higher
        <br />
        IB Diploma score of 29 or higher <br /> Cumulative GPA in high school (5
        semesters) in the 75th percentile <br /> National higher education board
        exam or university entrance exam (such as A-Level, Gaokao, GAT/PAT) that
        the admission committee considers equivalent to one of the above
        qualifications <br />
        <br></br>
        1.3 Subject specific requirement <br /> <br></br>You are expected to
        demonstrate an excellent level of knowledge and skills of mathematics.
        Specifically, you must be able to provide at least one of the following:
        <br />
        SAT Math score of 600 or higher <br /> GSAT Math score of 600 or higher
        <br />
        SAT subject test Mathematics Level 1 or Mathematics Level 2 score of 600
        or higher <br /> ACT mathematics score of 23 or higher <br /> IB Diploma
        score for a mathematics subject with a score of 5 or higher <br /> AP
        test for a mathematics subject with a score of 4 or higher <br />
        A-Level or AS-Level for a mathematics subject with grade B or higher
        <br /> PAT 1 (mathematics) score of 90 or higher <br /> Overall average
        of the grades for all mathematics subjects taken in high school at least
        3 out 4 (or equivalent) <br /> Test score or qualification that the
        admission committee considers equivalent to one of the above <br />
        <br></br>1.4 English language proficiency <br /> You are expected to
        demonstrate excellent skills of English language for academic purposes.
        Specifically, you are expected to provide at least one of the following:
        <br />
        TOEFL (iBT) score of 79 or higher <br /> TOEFL (ITP or paper-based test)
        score of 550 or higher <br /> IELTS score of 6.0 or higher <br />
        Cambridge English Exams (FCE/CAE/CPE) score of 170 or higher <br /> IB -
        English A1 or A2 score of 4 or higher <br /> IB - English B (HL) score
        of 5 or higher <br /> KMITL-TEP score of B2 or higher <br /> Note: The
        applicant who marginally fails the above requirement on English language
        proficiency may be admitted upon the condition that the applicant
        enrolls and passes English as a Second Language (ESL) courses offered by
        the Faculty of Engineering before or during the first year of study at
        KMITL. Additional fees may apply.
      </div>
      <div className={styles.button6}>Application Procedure and Schedule</div>
    </div>
  );
}
