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
          <p className="font-medium text-lg leading-7 items-center text-justify">
            This is a maximum target number of accepted students for academic
            year 2023. The program won't open in the next round if the number is
            reached.
          </p>
          <div class="overflow-x-auto relative">
            <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-black-700 text-center uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {" "}
                    1
                  </th>
                  <td class="py-4 px-6"> Biomedical Engineering </td>
                  <td class="py-4 px-6"> 40 </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {" "}
                    2
                  </th>
                  <td class="py-4 px-6"> Chemical Engineering </td>
                  <td class="py-4 px-6"> 25 </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {" "}
                    3
                  </th>
                  <td class="py-4 px-6"> Civil Engineering </td>
                  <td class="py-4 px-6"> 40 </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {" "}
                    4
                  </th>
                  <td class="py-4 px-6"> Computer Engineering </td>
                  <td class="py-4 px-6"> 30 </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
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
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
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
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
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
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {" "}
                    8
                  </th>
                  <td class="py-4 px-6"> Energy Engineering</td>
                  <td class="py-4 px-6"> 25 </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {" "}
                    9
                  </th>
                  <td class="py-4 px-6"> Financial Engineering </td>
                  <td class="py-4 px-6"> 40 </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
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
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {" "}
                    11
                  </th>
                  <td class="py-4 px-6"> Mechanical Engineering </td>
                  <td class="py-4 px-6"> 40 </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {" "}
                    12
                  </th>
                  <td class="py-4 px-6"> Robotics & AI Engineering</td>
                  <td class="py-4 px-6"> 30 </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
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
        </Collaps>
        <Collaps
          label="Direct Admissions 1-2 (First Round) : 5 years Unified
          Bachelor's & Master's Degree Program (KMITL - CMKL)"
        >
          <p className="font-medium text-lg leading-7 items-center text-justify">
            Students will spend the first 6 semesters (3 years) at KMITL for
            bachelor courses, and do the 7th - 8th semester of Bachelor Capstone
            Projects at CMKL University (CMKL) and School of Engineering, King
            Mongkut's Institute of Technology Ladkrabang (KMITL) to graduate
            with a Bachelor's degree at the end of Year 4 at KMITL . The
            coursework of Master's Degree will start from 7th semester and
            finish with a Master's degree at the end of Year 5.
          </p>
          <div class="overflow-x-auto relative">
            <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-black-700 text-center uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {" "}
                    1
                  </th>
                  <td class="py-4 px-6"> Biomedical Engineering </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {" "}
                    2
                  </th>
                  <td class="py-4 px-6"> Chemical Engineering </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {" "}
                    3
                  </th>
                  <td class="py-4 px-6"> Civil Engineering </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {" "}
                    4
                  </th>
                  <td class="py-4 px-6"> Computer Engineering </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {" "}
                    5
                  </th>
                  <td class="py-4 px-6">
                    {" "}
                    Electrical Engineering - Electrical Power major
                  </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {" "}
                    6
                  </th>
                  <td class="py-4 px-6">
                    {" "}
                    Electrical Engineering - Mechatronics major{" "}
                  </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {" "}
                    7
                  </th>
                  <td class="py-4 px-6">
                    {" "}
                    Engineering Management and Entrepreneurship{" "}
                  </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {" "}
                    8
                  </th>
                  <td class="py-4 px-6"> Energy Engineering</td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {" "}
                    9
                  </th>
                  <td class="py-4 px-6">
                    {" "}
                    Industrial Engineering and Logistics Management
                  </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {" "}
                    10
                  </th>
                  <td class="py-4 px-6"> Mechanical Engineering </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {" "}
                    11
                  </th>
                  <td class="py-4 px-6"> Robotics & AI Engineering</td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {" "}
                    12
                  </th>
                  <td class="py-4 px-6"> Software Engineering</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Collaps>
        <div className="px-10 my-10 w-full flex">
          <div className="max-w-[40%] w-full px-2 flex">
            <h2 className="text-2xl font-bold">
              Application Requirements : <br /> Bachelor's Requirements (Based
              on KMITL)
            </h2>
          </div>
          <div className="max-w-[60%] w-full px-2">
            <h2 class="mb-2 text-lg font-semibold ">
              Educational background <br />
              The applicant must satisfy at least one of the following
              requirements:
            </h2>
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
            <h2 class="mb-2 text-lg font-semibold ">
              <br /> Academics Record <br /> The applicant should submit at
              least one of the following standardized test results and obtain a
              score which meet the minimum requirements as specified below:
            </h2>
            <div class="overflow-x-auto relative">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-black-700 text-center uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
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
            <h2 class="mb-2 text-lg font-semibold ">
              <br /> Language Requirement (for non-native English speakers){" "}
              <br />
              The applicant should submit at least one of the following English
              proficiency Test score and obtain a score which meets the minimum
              requirement specified below:
            </h2>
          </div>
        </div>
        <div className="px-10 my-10 w-full flex">
          <div className="max-w-[40%] w-full px-2 flex">
            <h2 className="text-2xl font-bold">Admissions Schedule</h2>
          </div>
          <div className="max-w-[60%] w-full px-2">
            <h2 class="mb-2 text-lg font-semibold ">
              Should you have any problem or question, please contact:
            </h2>
            <h2 class="mb-2 text-lg font-semibold ">
              Internship advisor: Dr. Natthapong Jungteerapanich
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
