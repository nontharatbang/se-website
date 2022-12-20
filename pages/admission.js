import Link from "next/Link";
import Collaps from "../components/Collaps.js";

export default function admission() {
  return (
    <div>
      <div className="bg-[url('../public/admissionpic.svg')] bg-cover bg-center min-h-[480px] text-white font-bold">
        <div>
          <h1 className="px-20 pt-[200px] text-7xl uppercase">Admission</h1>
        </div>
      </div>
      <div className="my-10 mx-auto px-10 h-full w-full max-w-[1920px]">
        <div className="px-10 my-10 w-full flex">
          <div className="max-w-[40%] w-full px-2 flex">
            <h2 className="text-2xl font-bold">
              Direct Admission 1-2 (First Round)
            </h2>
          </div>
          <div className="max-w-[60%] w-full px-2 flex">
            <p className="font-medium text-lg leading-7 items-center text-justify">
              School of Engineering, King Mongkut's Institute of Technology
              Ladkrabang invites qualified applicants to apply for admissions to
              the School of Engineering in 4 years Bachelor's Degree Programs, 5
              years Unified Bachelor's & Master's Degree Program (KMITL - AIT)
              and 5 years Unified Bachelor's & Master's Degree Program (KMITL -
              CMKL) for Academic Year 2023 (beginning in August 2023). This
              round of admissions is opened to all applicants with excellent
              academic backgrounds. Selection of qualified candidates is based
              on the applicant's academic records, standardized test scores, and
              English proficiency test results, along with a personal statement,
              letters of recommendation, past academic activities, the interview
              and other supplementary documents.
            </p>
          </div>
        </div>
        <div className="px-10 my-10 w-full flex">
          <div className="max-w-[40%] w-full pr-10">
            <h2 className="text-2xl font-bold">
              Programs and Number of Acceptances
            </h2>
          </div>
          <div className="max-w-[60%] w-full px-2">
            <h2 class="mb-2 text-lg font-semibold ">Selection Procedure:</h2>
            <ul class="space-y-1 list-decimal list-inside">
              <li>
                You may apply up to a maximum of 3 programs choices as listed in
                1.1. Direct Admissions 1-2 (First Round) : 4 years Bachelor's
                Degree Programs. Please specify the ranking when considering the
                application.
              </li>
              <li>
                (Optional) After you have completely applied to program 1.1 and
                paid for the application fee payment, you may apply to the lists
                of 1.2 or 1.3 Direct Admissions 1-2 (First Round) : 5 years
                Unified Bachelor's & Master's Degree Program KMITL - AIT or
                KMITL - CMKL
              </li>
            </ul>
          </div>
        </div>
        <Collaps
          label="Direct Admissions 1-1 (Early Round) : 4 years Bachelor's
              Degree Programs"
        >
          <div class=" w-full flex">
          <div class="max-w-[50%] w-full px-2 py-5 flex">
          <p className="font-medium text-lg leading-7 items-center text-justify ">
            This is a maximum target number of accepted students for academic
            year 2023.  <br/> The program won't open in the next round if the number is
            reached.
          </p>
          </div>
          <div class="max-w-[50%] w-full px-2 py-5 flex">
            <table class="w-3/4 text-sm text-center text-gray-500 ">
              <thead class="text-xs text-black-700 text-center uppercase bg-orange-50">
                <tr>
                  <th scope="col" class="py-3 px-6">
                    {" "}
                    No.{" "}
                  </th>
                  <th scope="col" class="py-3 px-6">
                    {" "}
                    Programs{" "}
                  </th>
                  <th scope="col" class="py-3 px-6">
                    {" "}
                    Persons{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {" "}
                    1
                  </th>
                  <td class="py-4 px-6"> Biomedical Engineering </td>
                  <td class="py-4 px-6"> 40 </td>
                </tr>
                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {" "}
                    2
                  </th>
                  <td class="py-4 px-6"> Chemical Engineering </td>
                  <td class="py-4 px-6"> 25 </td>
                </tr>
                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {" "}
                    3
                  </th>
                  <td class="py-4 px-6"> Civil Engineering </td>
                  <td class="py-4 px-6"> 40 </td>
                </tr>
                <tr class="bg-white border-b ">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {" "}
                    4
                  </th>
                  <td class="py-4 px-6"> Computer Engineering </td>
                  <td class="py-4 px-6"> 30 </td>
                </tr>
                <tr class="bg-white border-b ">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {" "}
                    5
                  </th>
                  <td class="py-4 px-6">
                    {" "}
                    Electrical Engineering - Electrical Power major
                  </td>
                  <td class="py-4 px-6"> 35 </td>
                </tr>
                <tr class="bg-white border-b ">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {" "}
                    6
                  </th>
                  <td class="py-4 px-6">
                    {" "}
                    Electrical Engineering - Mechatronics major{" "}
                  </td>
                  <td class="py-4 px-6"> 25 </td>
                </tr>
                <tr class="bg-white border-b ">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {" "}
                    7
                  </th>
                  <td class="py-4 px-6">
                    {" "}
                    Engineering Management and Entrepreneurship{" "}
                  </td>
                  <td class="py-4 px-6"> 30 </td>
                </tr>
                <tr class="bg-white border-b ">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {" "}
                    8
                  </th>
                  <td class="py-4 px-6"> Energy Engineering</td>
                  <td class="py-4 px-6"> 25 </td>
                </tr>
                <tr class="bg-white border-b ">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {" "}
                    9
                  </th>
                  <td class="py-4 px-6"> Financial Engineering </td>
                  <td class="py-4 px-6"> 40 </td>
                </tr>
                <tr class="bg-white border-b ">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {" "}
                    10
                  </th>
                  <td class="py-4 px-6">
                    {" "}
                    Industrial Engineering and Logistics Management
                  </td>
                  <td class="py-4 px-6"> 40 </td>
                </tr>
                <tr class="bg-white border-b ">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {" "}
                    11
                  </th>
                  <td class="py-4 px-6"> Mechanical Engineering </td>
                  <td class="py-4 px-6"> 40 </td>
                </tr>
                <tr class="bg-white border-b ">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {" "}
                    12
                  </th>
                  <td class="py-4 px-6"> Robotics & AI Engineering</td>
                  <td class="py-4 px-6"> 30 </td>
                </tr>
                <tr class="bg-white border-b ">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {" "}
                    13
                  </th>
                  <td class="py-4 px-6"> Software Engineering</td>
                  <td class="py-4 px-6"> 50 </td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        </Collaps>
        <Collaps
          label="Direct Admissions 1-2 (First Round) : 5 years Unified
          Bachelor's & Master's Degree Program (KMITL - CMKL)"
        >
          <div class=" w-full flex">
          <div class="max-w-[40%] w-full px-2 py-5 flex">
          <p className="font-medium text-lg leading-7 items-center text-justify ">
          Students will spend the first 6 semesters (3 years) at KMITL for bachelor courses, and do the 7th - 8th semester of Bachelor Capstone Projects at CMKL University (CMKL) and School of Engineering, King Mongkut's Institute of Technology Ladkrabang (KMITL) to graduate with a Bachelor's degree at the end of Year 4 at KMITL . The coursework of Master's Degree will start from 7th semester and finish with a Master's degree at the end of Year 5.
          </p>
          </div>
          <div class="max-w-[60%] w-full pl-20 py-5 flex">
            <table class="w-5/6 text-sm text-center text-gray-500 ">
              <thead class="text-xs text-black-700 text-center uppercase bg-orange-50">
                <tr>
                    <th scope="col" class="py-3 px-6">
                      {" "}
                      No.{" "}
                    </th>
                    <th scope="col" class="py-3 px-6">
                      {" "}
                      Programs{" "}
                    </th>
                  </tr>
              </thead>
              <tbody>
              <tr class="bg-white border-b ">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {" "}
                    1
                  </th>
                  <td class="py-4 px-6"> Biomedical Engineering </td>
                </tr>
                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {" "}
                    2
                  </th>
                  <td class="py-4 px-6"> Chemical Engineering </td>
                </tr>
                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {" "}
                    3
                  </th>
                  <td class="py-4 px-6"> Civil Engineering </td>
                </tr>
                <tr class="bg-white border-b ">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {" "}
                    4
                  </th>
                  <td class="py-4 px-6"> Computer Engineering </td>
                </tr>
                <tr class="bg-white border-b ">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {" "}
                    5
                  </th>
                  <td class="py-4 px-6">
                    {" "}
                    Electrical Engineering - Electrical Power major
                  </td>
                </tr>
                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {" "}
                    6
                  </th>
                  <td class="py-4 px-6">
                    {" "}
                    Electrical Engineering - Mechatronics major{" "}
                  </td>
                </tr>
                <tr class="bg-white border-b ">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {" "}
                    7
                  </th>
                  <td class="py-4 px-6">
                    {" "}
                    Engineering Management and Entrepreneurship{" "}
                  </td>
                </tr>
                <tr class="bg-white border-b ">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {" "}
                    8
                  </th>
                  <td class="py-4 px-6"> Energy Engineering</td>
                </tr>
                <tr class="bg-white border-b ">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {" "}
                    9
                  </th>
                  <td class="py-4 px-6">
                    {" "}
                    Industrial Engineering and Logistics Management
                  </td>
                </tr>
                <tr class="bg-white border-b ">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {" "}
                    10
                  </th>
                  <td class="py-4 px-6"> Mechanical Engineering </td>
                </tr>
                <tr class="bg-white border-b ">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {" "}
                    11
                  </th>
                  <td class="py-4 px-6"> Robotics & AI Engineering</td>
                </tr>
                <tr class="bg-white border-b ">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {" "}
                    12
                  </th>
                  <td class="py-4 px-6"> Software Engineering</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        </Collaps>
        <Collaps
          label="Application Requirements : Bachelor's Requirements (Based on KMITL)">
          <p className="font-medium text-lg leading-7 items-center text-justify">
          Educational background <br/> The applicant must satisfy at least one of the following requirements:
          </p>
          <ul class="space-y-1 list-decimal list-inside">
              <li>Graduated or studying in Matthayom 6.</li>
              <li>
                Graduated in qualification equivalent to Matthayom 6 as approved
                by the Ministry of Education. (The applicants who submit this
                educational background, please contact SIIE office.)
              </li>
              <li>
                Graduated or studying at an accredited college or
                higher-education institution in Thailand or aboard The applicant
                must provide an official final transcript and their official
                high school diplomas and/or certificates of completion from
                their school before the start of Academic Year 2023. <br />
              </li>
          </ul>
          <p className="font-medium text-lg leading-7 items-center text-justify">
          <br /> Academics Record <br/> The applicant should submit at least one of the following standardized test results and obtain a score which meet the minimum requirements as specified below:
          </p>
          <div class="overflow-x-auto relative">
              <table class="w-full text-sm text-left text-gray-500 ">
                <thead class="text-xs text-black-700 text-center uppercase bg-orange-50 ">
                  <tr>
                    <th scope="col" class="py-3 px-6">
                      {" "}
                      Programs{" "}
                    </th>
                    <th scope="col" class="py-3 px-6">
                      {" "}
                      SAT I{" "}
                    </th>
                    <th scope="col" class="py-3 px-6">
                      {" "}
                      GSAT{" "}
                    </th>
                    <th scope="col" class="py-3 px-6">
                      {" "}
                      ACT{" "}
                    </th>
                    <th scope="col" class="py-3 px-6">
                      {" "}
                      Any national higher education board exam result
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b ">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {" "}
                      Software Engineering
                    </th>
                    <td class="py-4 px-6"> 1020 </td>
                    <td class="py-4 px-6"> 1020 </td>
                    <td class="py-4 px-6">
                      {" "}
                      GPA at least 5 semesters in the class rank of 75th
                      percentile
                    </td>
                    <td class="py-4 px-6">
                      {" "}
                      A Level, Gaokao, GAT/PAT, TGAT/TPAT National Exam
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 class="mb-2 text-lg font-semibold ">
              <br /> Remark: <br /> The applicants for Software Engineering are
              required to meet one of these additional requirements.
            </h2>
            <ul class="space-y-1 list-disc list-inside">
              <li>SAT or GSAT Math score of 600 or higher</li>
              <li>
                SAT subject test Math Level 1 or Math Level 2 score of 600 or
                higher
              </li>
              <li>or ACT Math score of 23 or higher</li>
              <li>
                A-Level or AS-Level for a subject in Mathematics with grade B or
                above
              </li>
              <li> Pat 1 Score of 90 or higher </li>
              <li>
                {" "}
                Cumulative GPA of all Math subjects in high school at least 3
                out of 4 (or equivalent)
              </li>
              <li>
                {" "}
                * For Software Engineering Certificate provided by School of
                Engineering - KMITL *can not* be used as a substitution of any
                standardized test results, however it can be submitted for
                consideration as additional document.
              </li>
            </ul>
            <div class=" w-full flex">
          <div class="max-w-[40%] w-full px-2 py-5 flex pr-20">
          <p className="font-medium text-lg leading-7 items-center text-justify ">
          <br /> Language Requirement (for non-native English speakers){" "}
              <br />
              The applicant should submit at least one of the following English
              proficiency Test score and obtain a score which meets the minimum
              requirement specified below:
          </p>
          </div>
          <div class="max-w-[60%] w-full pl-20 py-5 flex">
            <table class="w-1/2 text-sm text-center text-gray-500 pl-50">
              <thead class="text-xs text-black-700 text-center uppercase bg-orange-50 ">
                <tr>
                      <th scope="col" class="py-3 px-6">
                        {" "}
                        English Proficiency Test{" "}
                      </th>
                      <th scope="col" class="py-3 px-6">
                        {" "}
                        Minimum Score{" "}
                      </th>
                    </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b ">
                      <th
                        scope="row"
                        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                      >
                        {" "}
                        TOEFL - paper-based
                      </th>
                      <td class="py-4 px-6">550 </td>
                    </tr>
                    <tr class="bg-white border-b">
                      <th
                        scope="row"
                        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {" "}
                        TOEFL - CBT
                      </th>
                      <td class="py-4 px-6">213 </td>
                    </tr>
                    <tr class="bg-white border-b ">
                      <th
                        scope="row"
                        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {" "}
                        TOEFL - IBT
                      </th>
                      <td class="py-4 px-6">79 </td>
                    </tr>
                    <tr class="bg-white border-b ">
                      <th
                        scope="row"
                        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {" "}
                        IELTS
                      </th>
                      <td class="py-4 px-6"> 6</td>
                    </tr>
                    <tr class="bg-white border-b ">
                      <th
                        scope="row"
                        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                      >
                        {" "}
                        Cambridge English Exams FCE or CAE or CPE
                      </th>
                      <td class="py-4 px-6">170 </td>
                    </tr>
                    <tr class="bg-white border-b ">
                      <th
                        scope="row"
                        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                      >
                        {" "}
                        IB - English A1 or A2
                      </th>
                      <td class="py-4 px-6"> 4 </td>
                    </tr>
                    <tr class="bg-white border-b ">
                      <th
                        scope="row"
                        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                      >
                        {" "}
                        IB - English B (HL)
                      </th>
                      <td class="py-4 px-6">5 </td>
                    </tr>
                    <tr class="bg-white border-b ">
                      <th
                        scope="row"
                        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                      >
                        {" "}
                        KMITL-TEP
                      </th>
                      <td class="py-4 px-6"> B2 </td>
                    </tr>
                </tbody>
              </table>
          </div>
          </div>
            <h2 class="mb-2 text-lg font-semibold ">
              <br /> Remark: <br /> The applicants for Software Engineering are
              required to meet one of these additional requirements.
            </h2>
            <ul class="space-y-1 list-decimal list-inside">
              <li>Applicants who have an English proficiency score meeting with minimum or over requirement can be admitted without conditions 
                (The score has to be valid not more than 2 years from the date of application deadline).</li>
              <li>
              Applicants who do not submit any English proficiency test score or have lower than the required can be conditionally accepted by 
              taking SIIE Pre-sessional English Course for 30 hours before the start of the first semester and enrolling in additional English as a Second Language (ESL) 
              courses at KMITL in the first semester.
              </li>
            </ul>
            <h2 class="mb-2 text-lg font-semibold ">
              <br /> Personal Statement : <br/> Please write an essay (650 words or fewer) that demonstrates your ability to communicate your thoughts and your related experience in the field of study.
            </h2>
            <h2 class="mb-2 text-lg font-semibold ">
              <br /> Two Recommendation Letters : <br /> The applicant should upload PDFs or JPG snapshots of the letters of recommendation from your advisors or teachers.
            </h2>
        </Collaps>
        <div className="px-10 my-10 w-full flex">
          <div className="max-w-[40%] w-full px-2 flex">
            <h2 className="text-2xl font-bold">Admissions Schedule</h2>
          </div>
          <div class="overflow-x-auto relative">
              <table class="w-full text-sm text-left text-gray-500 ">
                <thead class="text-xs text-black-700 text-center uppercase bg-orange-50 ">
                  <tr>
                    <th scope="col" class="py-3 px-6">
                      {" "}
                      Details{" "}
                    </th>
                    <th scope="col" class="py-3 px-6">
                      {" "}
                      Dates{" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b ">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {" "}
                      1. Application filing and Application Fee Payment Period <br/>  <Link href = "http://new.reg.kmitl.ac.th/admission"><a className="text-blue-800">
                        {" "}
                        http://new.reg.kmitl.ac.th/admission
                      </a></Link>
                    </th>
                    <td class="py-4 px-6"> Now - December 23, 2022 </td>
                  </tr>
                  <tr class="bg-white border-b ">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {" "}
                      2. Interview Candidate Notification <br/>  <Link href = "http://new.reg.kmitl.ac.th/admission"><a className="text-blue-800">
                        {" "}
                        http://new.reg.kmitl.ac.th/admission
                      </a></Link>
                    </th>
                    <td class="py-4 px-6">January 10, 2023 </td>
                  </tr>
                  <tr class="bg-white border-b ">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {" "}
                      3. Candidate Interview Date
                    </th>
                    <td class="py-4 px-6">January 15, 2023 </td>
                  </tr>
                  <tr class="bg-white border-b ">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {" "}
                      4. Interview Result Announcement <br /> <Link href = "http://new.reg.kmitl.ac.th/admission"><a className="text-blue-800">
                        {" "}
                        http://new.reg.kmitl.ac.th/admission
                      </a></Link>
                    </th>
                    <td class="py-4 px-6"> January 27, 2023 </td>
                  </tr>
                  <tr class="bg-white border-b ">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {" "}
                      5. TCAS Clearing House (for Thai Nationality only)
                    </th>
                    <td class="py-4 px-6"> Feb 7-8, 2023 </td>
                  </tr>
                  <tr class="bg-white border-b ">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {" "}
                      6 . Enrollment Confirmation and Tuition Fee Payment <br/> <Link href = "http://www.reg.kmitl.ac.th"><a className="text-blue-800">
                        {" "}
                        http://www.reg.kmitl.ac.th
                      </a></Link>
                    </th>
                    <td class="py-4 px-6"> Feb 17-23, 2023 </td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
        <div className="px-10 my-10 w-full flex">
          <div className="max-w-[40%] w-full px-2 flex">
            <h2 className="text-2xl font-bold">
              Application Submission
            </h2>
          </div>
          <div className="max-w-[60%] w-full px-2 flex">
            <ul className="steps steps-vertical lg:steps-horizontal">
              <li className="step step-primary">Applicants must apply via online application system</li>
              <li className="step step-primary">Applicants must print out the pay in slip to deposit a 1000 baht non refundable application fee through any Kasikorn Bank (KBank) counter (with 10 Baht fee) or scanning barcode via any Mobile Banking application (no fees charged).</li>
              <li className="step step-primary">Applicants must upload all necessary documents as the following in 1 pdf file (up to 4MB insize only) to online application system with subject filename as Application ID.</li>
            </ul>
          </div>
        </div>
        <div className="px-10 my-10 w-full flex">
          <div className="max-w-[40%] w-full px-2 flex">
            <h2 className="text-2xl font-bold">
            Tuition Fees and Enrollment Confirmation
            </h2>
          </div>
          <div className="max-w-[60%] w-full px-2">
            <h2 class="mb-2 text-lg font-semibold ">The tuition fees for Software Engineering program in Academic Year 2023 are as follows:</h2>
            <div class="overflow-x-auto relative">
            <table class="w-full text-sm text-center text-gray-500 ">
              <thead class="text-xs text-black-700 text-center uppercase bg-orange-50 ">
                <tr>
                  <th scope="col" class="py-3 px-6">
                    {" "}
                    No.{" "}
                  </th>
                  <th scope="col" class="py-3 px-6">
                    {" "}
                    Programs{" "}
                  </th>
                  <th scope="col" class="py-3 px-6">
                    {" "}
                    THB/Semester{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b ">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {" "}
                    1
                  </th>
                  <td class="py-4 px-6"> Software Engineering</td>
                  <td class="py-4 px-6"> 90,000 </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
        <div className="px-10 my-10 w-full flex">
          <div className="max-w-[40%] w-full pr-10">
            <h2 className="text-2xl font-bold">
            Scholarships
            </h2>
          </div>
          <div className="max-w-[60%] w-full px-2">
            <h2 class="mb-2 text-lg font-semibold ">Academic Excellence Freshmen Scholarship is offered to applicants with excellent academic performances to pursue 
            their undergraduate education in the international programs, the School of Engineering at KMITL. The scholarship will be granted for 1st year students with 
            exceptional academic records. More than 40 scholarships can be awarded. <br /> Minimum Academic requirement:</h2>
            <ul class="space-y-1 list-disc list-inside">
              <li>
              Achieved SAT I General test composite score at least 85 world percentiles
              </li>
              <li>Achieved TOEFL score at least 550 (paper) or 213 (CBT), or 79 (IBT), or Achieve IELTS score at least 6.0.
              </li>
            </ul>
            <h2 class="mb-2 text-lg font-semibold "> <br/ >Scholarship result will be announced on February (before TCAS clearing house period). Those who're selected will receive the offer letter directly to their email.</h2>
          </div>
        </div>
        <div className="px-10 my-10 w-full flex">
          <div className="max-w-[40%] w-full pr-10">
            <h2 className="text-2xl font-bold">
            Contact Information 
            </h2>
          </div>
          <div className="max-w-[60%] w-full px-2">
            <h2 class="mb-2 text-lg font-semibold ">For additional information of Admissions , please contact SIIE office, Faculty of Engineering, KMITL</h2>
            <ul class="space-y-1 list-disc list-inside">
              <li>Phone: +66(0)994961526, +66(0)23298301 Ex 218 ● Line: @siie_kmitl
              </li>
              <li>Email: siie-admission@kmitl.ac.th
              </li>
              <li>Facebook: https://www.facebook.com/KMITL.SIIE
              </li>
            </ul>
            <h2 class="mb-2 text-lg font-semibold "> For additional information of Software Engineering</h2>
            <ul class="space-y-1 list-disc list-inside">
              <li> Contact person: Asst.Prof.Dr.Visit Hirankitti o Mobile Phone +(0)80454 9990
              </li>
              <li> Email: visit.hi@kmitl.acth
              </li>
              <li> Website:http://www.se.kmitl.ac.th
              </li>
              <li> Facebook: https://www.facebook.com/sekmitl</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
