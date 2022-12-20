import Image from "next/image";
import aboard_course from "../public/aboard_course.svg";
import aboard_cost from "../public/aboard_cost.svg";
import aboard_activity from "../public/aboard_activity.svg";
import Link from "next/Link";

export default function Abroad() {
  return (
    <div className="mt-28">
      <div className="bg-[url('../public/abroad_background.svg')] bg-cover bg-center min-h-[480px] text-white font-bold">
        <div>
          <h1 className="px-20 pt-[200px] text-7xl uppercase">Study Abroad</h1>
        </div>
      </div>
      <div className="my-20 mx-auto px-20 h-full w-full max-w-[1920px]">
        <div className="px-10 w-full">
          <h2 className="text-2xl font-bold">
            Exchange Study at Frankfurt University of Applied Sciences
          </h2>
          <br />
          <p className="font-medium text-lg leading-7 items-center text-justify">
            Qualified students in the SE program have an opportunity to join an
            exchange study for one semester in Year 3 Semester 2 at Frankfurt
            University of Applied Sciences (FRA-UAS), our partner university in
            Germany. The students joining the exchange program will be taking
            courses in the Bachelor Program in Computer Science at FRA-UAS and
            the results and credits of the study be transferred back to their
            study in the SE program.
            <br />
            <br />
            This article provides an overview of the exchange program for the
            current SE students who wish to undertake an exchange study at
            FRA-UAS.
            <br />
            <br />
            <b>About Frankfurt University of Applied Sciences</b>
            <br />
            <br />
            Frankfurt University of Applied Sciences (abbreviated as FRA-UAS) is
            a large practice-oriented higher-education institute specializing in
            science and technology. The University is located near the center of
            Frankfurt am Main, a city which is considered a multicultural city
            and the largest financial center in Continental Europe. It has a
            highly international student body, with over 10,000 students from
            more than 100 countries. The University has more than 650 academic
            staff and 220 administrative staff. There are four faculties:
            <br />
            <br />
            1. Architecture and construction <br />
            2. Informatics and engineering <br />
            3. Business and law <br />
            4. Social work and health
            <br />
            <br />
            The degree programs in the University adopts a bi-semester system.
            Each semester is 19-week long, with 15 weeks of teaching. The
            semester times are as follows:
            <br />
            <br />
            Winter Semester : October – February
            <br />
            Summer Semester : Mid March – July
            <br />
            <br />
            FRA-UAS has been offering many postgraduate programs in English and,
            recently, has started to teach a number of undergraduate courses in
            English, including the courses in the second year in its Bachelor
            Program in Computer Science.
            <br />
            <br />
            <b>Exchange Scheme</b>
            <br />
            <br />
            By joining this exchange program, you are to take the following four
            mandatory courses in the Bachelor Program in Computer Science at
            FRA-UAS. The results of the study will be transferred back as the
            results of the equivalent courses in the SE program (see the table
            below).
          </p>
          <div className="text-center">
            <Image src={aboard_course} alt="Courses" width={1000} />
          </div>
          <p className="font-medium text-lg leading-7 items-center text-justify">
            Additionally, in each year, there are 1 - 3 courses in the M.Sc. in
            High Integrity Systems program at FRA-UAS with transferable credits
            which you may take. The list of the courses is to be announced a few
            months before the exchange begins.
            <br />
            <br />
            The following courses are the courses in the SE program in Year 3
            Semester 2 which have no equivalent counterpart at FRA-UAS. You are
            to take these courses in Year 4 Semester 2 instead:
            <br />
            <br />
            Science & Technology for the Modern World
            <br />
            Software Verification and Validation (unless the M.Sc. course
            "Advanced Testing Techniques" is taken at FRA-UAS)
            <br />
            Software Development Process
            <br />
            Compiler Construction (for students in the SE track only)
            <br />
            <br />
            <b>Cost</b>
            <br />
            <br />
            In accordance with the university's regulation, you are required to
            pay the normal tuition fee for Year 3 Semester 1 to KMITL as usual.
            FRA-UAS does not collect additional tuition fee for your study
            there. You are still required to prepare for other expenses during
            your period of study at Frankfurt. The following table provides a
            rough estimate of the essential expenses (not including leisure
            activities, souvenirs and other unnecessary items):
          </p>
          <div className="text-center">
            <Image src={aboard_cost} alt="Courses" width={700} />
          </div>
          <p className="font-medium text-lg leading-7 items-center text-justify">
            <b>Requirements</b>
            <br />
            <br />
            The following is the minimum requirement for joining the exchange
            program at FRA-UAS.
            <br />
            <br />
            Studying in Year 3 Semester 1 of the SE program. <br />
            GPA at the end of Year 2 is 2.7 or higher. <br />
            Excellent English language skills <br />
            Those who do not satisfy these requirements may be accepted at the
            discretion of the International College and FRA-UAS. <br />
            <br />
            <b>Application</b>
            <br />
            <br /> The application procedure is as follows: The candidate fills
            in the International College study abroad application form:
            <br />
            <Link href="https://goo.gl/HPqTbB">
              <a className="text-blue-800 underline">https://goo.gl/HPqTbB</a>
            </Link>
            <br />
            IC evaluates and selects the candidates and announces the result of
            the selection.
            <br />
            IC nominates the selected candidates to FRA-UAS.
            <br />
            The selected candidates complete the application on FRA-UAS website
            <br />
            <Link href="https://www.frankfurt-university.de/en/studies/international-office/incomings/exchange/">
              <a className="text-blue-800 underline">
                https://www.frankfurt-university.de/en/studies/international-office/incomings/exchange/
              </a>
            </Link>
            <br />
            FRA-UAS emails each candidate an acceptance letter and an
            application form for accommodations. <br />
            Accepted candidates start applying for a student visa.
          </p>
          <div className="text-center">
            <Image src={aboard_activity} alt="Activity" width={800} />
          </div>
          <p className="font-medium text-lg leading-7 items-center text-justify">
            Contact <br />
            For all enquiries regarding the exchange study at FRA-UAS, contact{" "}
            <br />
            <br />
            Dr. Jochen Amrehn <br />
            Dr. Natthapong Jungteerapanich <br />
            <br />
            Useful links: <br />
            <Link href="https://www.frankfurt-university.de/en/studies/international-office/">
              <a className="text-blue-800 underline">
                International Office at FRA-UAS
              </a>
            </Link>
            <br />
            <Link href="https://www.frankfurt-university.de/en/studies/bachelor-programs/computer-science-b-sc/for-prospective-students/">
              <a className="text-blue-800 underline">
                Computer Science Program at FRA-UAS
              </a>
            </Link>
            <br />
            <Link href="https://www.frankfurt-university.de/en/studies/bachelor-programs/">
              <a className="text-blue-800 underline">
                English taught courses at FRA-UAS
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
