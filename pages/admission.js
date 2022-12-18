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
      <section id= {styles.requirement}>
        <div className={styles.title}>
        <p>&emsp;&emsp;School of Engineering, King Mongkut's Institute of Technology Ladkrabang
        invites qualified applicants to apply for admissions to the School of
        Engineering in 4 years Bachelor's Degree Programs, 5 years Unified
        Bachelor's & Master's Degree Program (KMITL - AIT) and 5 years Unified
        Bachelor's & Master's Degree Program (KMITL - CMKL) for Academic Year
        2023 (beginning in August 2023). This round of admissions is opened to
        all applicants with excellent academic backgrounds. Selection of
        qualified candidates is based on the applicant's academic records,
        standardized test scores, and English proficiency test results, along
        with a personal statement, letters of recommendation, past academic
        activities, the interview and other supplementary documents. <br></br></p>
        </div>
        <div className={styles.first_section}>
          <p>1. Programs and Number of Acceptances <br />
        Selection Procedure: <br /> &emsp;&emsp; 1. You may apply up to a
        maximum of 3 programs choices as listed in 1.1. Direct Admissions 1-1
        (Early Round) : 4 years Bachelor's Degree Programs. Specify the ranking
        when considering the application <br />
        &emsp;&emsp; 2. (Optional) After you have completely applied to program
        1.1 and paid for the application fee payment, you may apply to Direct Admissions 1-1 (First Round) : 5 years Unified
        Bachelor's & Master's Degree Program KMITL - AIT or KMITL - CMKL</p>
        </div>
        <div className={styles.requirementbox}>
          <div className={styles.programtext}>
            <h1> &nbsp;&nbsp;&nbsp;Direct Admissions 1-1 (Early Round) : 4 years Bachelor's Degree Programs</h1>
            <div className={styles.programtextdesc}>
              <div className={styles.directadmissiontext}>
              <p> &emsp;This is a maximum target number of accepted students for
        academic year 2023. The program won't open in the next round if the
        number is reached.</p>
              </div>
            </div>
            <div className={styles.programtextdesc}>
              <div className={styles.directadmissiontext}>
              <h1> Direct Admissions 1-2 (First Round) : 5 years Unified Bachelor's & Master's Degree Program (KMITL - CMKL)</h1>
              <p> &emsp;Students will spend the first 6 semesters (3 years) at KMITL for bachelor courses, and do the 7th - 8th semester of Bachelor Capstone 
                Projects at CMKL University (CMKL) and School of Engineering, King Mongkut's Institute of Technology Ladkrabang (KMITL) to graduate with a Bachelor's degree 
                at the end of Year 4 at KMITL . The coursework of Master's Degree will start from 7th semester and finish with a Master's degree at the end of Year 5.</p>
              </div>
            </div>
          </div>
          <div className={styles.programtable}>
          <table className={styles.content}>
          <thead>
            <tr>
              <th> No. </th>
              <th> Programs </th>
              <th> Persons</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> 1 </td>
              <td> Biomedical Engineering </td>
              <td> 40 </td>
            </tr>
            <tr>
              <td> 2 </td>
              <td> Chemical Engineering </td>
              <td> 25 </td>
            </tr>
            <tr>
              <td> 3 </td>
              <td> Civil Engineering </td>
              <td> 40 </td>
            </tr>
            <tr>
              <td> 4 </td>
              <td> Computer Engineering </td>
              <td> 30 </td>
            </tr>
            <tr>
              <td> 5 </td>
              <td> Electrical Engineering - Electrical Power major </td>
              <td> 35 </td>
            </tr>
            <tr>
              <td> 6 </td>
              <td> Electrical Engineering - Mechatronics major </td>
              <td> 25 </td>
            </tr>
            <tr>
              <td> 7 </td>
              <td> Engineering Management and Entrepreneurship </td>
              <td> 30 </td>
            </tr>
            <tr>
              <td> 8 </td>
              <td> Energy Engineering </td>
              <td> 25 </td>
            </tr>
            <tr>
              <td> 9 </td>
              <td> Financial Engineering </td>
              <td> 40 </td>
            </tr>
            <tr>
              <td> 10 </td>
              <td> Industrial Engineering and Logistics Management </td>
              <td> 40 </td>
            </tr>
            <tr>
              <td> 11 </td>
              <td> Mechanical Engineering </td>
              <td> 40 </td>
            </tr>
            <tr>
              <td> 12 </td>
              <td> Robotics & AI Engineering </td>
              <td> 30 </td>
            </tr>
            <tr>
              <td> 13 </td>
              <td> Software Engineering </td>
              <td> 50 </td>
            </tr>
          </tbody>
        </table>
          </div>
        </div>
      </section>
      <section id = {styles.applicationrequire}>
        <div className={styles.third_section}>
          <p> 2. Application Requirements <br /> 2.1 Bachelor's Requirements (Based on
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
        higher-education institution in Thailand or aboard <br></br>The applicant must
        provide an official final transcript and their official high school
        diplomas and/or certificates of completion from their school before the
        start of Academic Year 2023.
        <br /> <br></br> 
        &emsp;&emsp;2.1.2 Academics Record <br></br>The applicant should submit at least
        one of the following standardized test results and obtain a score which
        meet the minimum requirements as specified below:</p>
        </div>
      </section>
      <div className={styles.third_section}>
        <div className={styles.programtable}>
          <table className={styles.content}>
          <thead>
            <tr>
              <th> Program </th>
              <th> SAT I </th>
              <th> GSAT</th>
              <th> ACT </th>
              <th> IB Diploma</th>
              <th> Certificate</th>
              <th> Any national higher education board exam result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> Software Engineering </td>
              <td> 1020 </td>
              <td> 1020 </td>
              <td> GPA at least 5 semesters in the class rank of 75th percentile </td>
              <td> 29 </td>
              <td> - </td>
              <td> A Level, Gaokao, GAT/PAT, TGAT/TPAT National Exam</td>
            </tr>
          </tbody>
        </table>
          </div>
          <div className={styles.remarktext}>
            <p><br></br>Remark: <br />* The applicants for Software Engineering are required to meet one of these additional requirements. <br />
        &emsp;&emsp;- SAT or GSAT Math score of 600 or higher <br />
        &emsp;&emsp;- SAT subject test Math Level 1 or Math Level 2 score of 600 or higher <br />
        &emsp;&emsp;- or ACT Math score of 23 or higher <br />
        &emsp;&emsp;- or IB Diploma score for a subject in Mathematics with a
        score of 5 or higher
        <br />
        &emsp;&emsp;- or AP test for a subject in Mathematics with a score of 4
        or higher <br />
        &emsp;&emsp;- or A-Level or AS-Level for a subject in Mathematics with
        grade B or above <br />
        &emsp;&emsp;- or Pat 1 Score of 90 or higher <br />
        &emsp;&emsp;- or Cumulative GPA of all Math subjects in high school at
        least 3 out of 4 (or equivalent) <br />
        &emsp;&emsp;** For Software Engineering Certificate provided by School
        of Engineering - KMITL *can not* be used as a substitution of any
        standardized test results, however it can be submitted for consideration
        as additional document.</p>
          </div>
        </div>
        <section id = {styles.language}>
        <div className={styles.languagetext}>
        <p>&emsp;&emsp;2.1.3 Language Requirement (for non-native English speakers) <br />
        The applicant should submit at least one of the following English
        proficiency Test score and obtain a score which meets the minimum
        requirement specified below:</p>
        </div>
        <div className={styles.programtable}>
          <table className={styles.content2}>
          <thead>
            <tr>
              <th> English Proficiency Test </th>
              <th> Minimum Score </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> TOEFL - paper-based </td>
              <td> 550 </td>
            </tr>
            <tr>
              <td> TOEFL - CBT </td>
              <td> 213 </td>
            </tr>
            <tr>
              <td> TOEFL - IBT </td>
              <td> 79 </td>
            </tr>
            <tr>
              <td> IELTS </td>
              <td> 6 </td>
            </tr>
            <tr>
              <td> Cambridge English Exams FCE or CAE or CPE </td>
              <td> 170 </td>
            </tr>
            <tr>
              <td> IB - English A1 or A2 </td>
              <td> 4 </td>
            </tr>
            <tr>
              <td> IB - English B (HL) </td>
              <td> 5 </td>
            </tr>
            <tr>
              <td> KMITL-TEP </td>
              <td> B2 </td>
            </tr>
          </tbody>
        </table>
          </div>
        <br /> <br></br>
        </section>
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
      <div className={styles.seventh_section}>3.Admission Schedule</div>
    </div>
  );
}
