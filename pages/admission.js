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
      <div className={styles.button1}>Early Round Direct Admissions</div>
      <div className={styles.button2}>Application Requirements</div>
      <div className={styles.button3}>Admissions Schedule</div>
      <div className={styles.button1}>Application Submission</div>
      <div className={styles.button2}>
        Tuition Fees and Enrollment Confirmation
      </div>
      <div className={styles.button3}>Scholarships</div>
      <div className={styles.first_section}>
        School of Engineering, King Mongkut's Institute of Technology Ladkrabang
        invites qualified applicants to apply for admissions to the School of
        Engineering in 4 years Bachelor's Degree Programs, 5 years Unified
        Bachelor's & Master's Degree Program (KMITL - AIT) and 5 years Unified
        Bachelor's & Master's Degree Program (KMITL - CMKL) for Academic Year
        2023 (beginning in August 2023). This round of admissions is opened to
        all applicants with excellent academic backgrounds. Selection of
        qualified candidates is based on the applicant's academic records,
        standardized test scores, and English proficiency test results, along
        with a personal statement, letters of recommendation, past academic
        activities, the interview and other supplementary documents. <br></br>
        <br></br>
      </div>
      <div className={styles.second_section}>
        1. Programs and Number of Acceptances <br />
        Selection Procedure: <br /> &emsp;&emsp; 1. You may apply up to a
        maximum of 3 programs choices as listed in 1.1. Direct Admissions 1-1
        (Early Round) : 4 years Bachelor's Degree Programs. Specify the ranking
        when considering the application <br />
        &emsp;&emsp; 2. (Optional) After you have completely applied to program
        1.1 and paid for the application fee payment, you may apply to the lists
        of 1.2 or 1.3 Direct Admissions 1-1 (Early Round) : 5 years Unified
        Bachelor's & Master's Degree Program KMITL - AIT or KMITL - CMKL
      </div>
      <div className={styles.third_section}>
        1.1 Direct Admissions 1-1 (Early Round) : 4 years Bachelor's Degree
        Programs <br />
        &emsp;&emsp; This is a maximum target number of accepted students for
        academic year 2023. The program won't open in the next round if the
        number is reached.
      </div>
      <div className={styles.fourth_section}>
        1.2 Direct Admissions 1-1 (Early Round) : 5 years Unified Bachelor's &
        Master's Degree Program (KMITL - AIT) <br />
        &emsp;&emsp;Students will spend the first seven (7) semesters (3.5
        years) at KMITL for bachelor courses, and do the 8th semester of
        Bachelor Capstone Projects at Asian Institute of Technology (AIT) ,
        while at the same time do the Master's program at AIT, credits earned
        from which will be transferred to the bachelor's degree, students will
        have the opportunity to complete the master program in 3 semesters and 1
        inter-semester (1.5 years).
      </div>
      <div className={styles.fifth_section}>
        1.3 Direct Admissions 1-1 (Early Round) : 5 years Unified Bachelor's &
        Master's Degree Program (KMITL - CMKL) <br />
        &emsp;&emsp;Students will spend the first 6 semesters (3 years) at KMITL
        for bachelor courses, and do the 7th - 8th semester of Bachelor Capstone
        Projects at CMKL University (CMKL) and School of Engineering, King
        Mongkut's Institute of Technology Ladkrabang (KMITL) to graduate with a
        Bachelor's degree at the end of Year 4 at KMITL . The coursework of
        Master's Degree will start from 7th semester and finish with a Master's
        degree at the end of Year 5.
      </div>
      <div className={styles.sixth_section}>
        2. Application Requirements <br /> 2.1 Bachelor's Requirements (Based on
        KMITL) <br />
        &emsp;&emsp; 2.1.1 Educational background <br />
        &emsp;&emsp;The applicant must satisfy at least one of the following
        requirements:
        <br />
        &emsp;&emsp;1) Graduated or studying in Matthayom 6.
        <br /> &emsp;&emsp;2) Graduated in qualification equivalent to Matthayom
        6 as approved by the Ministry of Education. <br />
        &emsp;&emsp;(The applicants who submit this educational background,
        please contact SIIE office.) <br />
        &emsp;&emsp;3) Graduated or studying at an accredited college or
        higher-education institution in Thailand or aboard The applicant must
        provide an official final transcript and their official high school
        diplomas and/or certificates of completion from their school before the
        start of Academic Year 2022.
        <br /> <br></br>
        &emsp;&emsp;2.1.2 Academics Record The applicant should submit at least
        one of the following standardized test results and obtain a score which
        meet the minimum requirements as specified below:
        <br />
        <br></br>Remark: <br />* The applicants for Financial Engineering and
        Software Engineering are required to meet one of these additional
        requirements. <br />
        &emsp;&emsp;- SAT or GSAT Math score of 600 or higher <br />
        &emsp;&emsp;- or SAT subject test Math Level 1 or Math Level 2 score of
        600 or higher <br />
        &emsp;&emsp;- or ACT Math score of 23 or higher <br />
        &emsp;&emsp;- or IB Diploma score for a subject in Mathematics with a
        score of 5 or higher
        <br />
        &emsp;&emsp;- or AP test for a subject in Mathematics with a score of 4
        or higher <br />
        &emsp;&emsp;- or A-Level or AS-Level for a subject in Mathematics with
        grade B or above <br />
        &emsp;&emsp;- orPat1Scoreof90orhigher <br />
        &emsp;&emsp;- or Cumulative GPA of all Math subjects in high school at
        least 3 out of 4 (or equivalent) <br />
        &emsp;&emsp;** For Software Engineering Certificate provided by School
        of Engineering – KMITL *can not* be used as a substitution of any
        standardized test results, however it can be submitted for consideration
        as additional document.
        <br />
        <br></br>
        &emsp;&emsp;2.1.3 Language Requirement (for non-native English speakers)
        <br />
        The applicant should submit at least one of the following English
        proficiency Test score and obtain a score which meets the minimum
        requirement specified below:
        <br /> <br></br>
        Remark: <br />
        1. Applicants who have an English proficiency score meeting with minimum
        or over requirement can be admitted without conditions (The score has to
        be valid not more than 2 years from the date of application deadline).{" "}
        <br />
        2. Applicants who do not submit any English proficiency test score or
        have lower than the required can be conditionally accepted by taking
        SIIE Pre-sessional English Course for 30 hours before the start of the
        first semester and enrolling in additional English as a Second Language
        (ESL) courses at KMITL in the first semester.
        <br />
        <br></br>
        &emsp;&emsp;2.1.4 Personal Statement <br />
        &emsp;&emsp;Please write an essay (650 words or fewer) that demonstrates
        your ability to communicate your thoughts and your related experience in
        the field of study.
        <br />
        <br></br>
        &emsp;&emsp;2.1.5 Two Recommendation Letters <br />
        &emsp;&emsp;The applicant should upload PDFs or JPG snapshots of the
        letters of recommendation from your advisors or teachers.
      </div>
      <div className={styles.seventh_section}>3.Admission Schedule</div>
    </div>
  );
}
