import Link from "next/Link";
import Collaps from "../components/Collaps.js";

export default function curriculum() {
  return (
    <div>
      <div className="bg-[url('../public/internshipp.svg')] bg-cover bg-center min-h-[480px] text-white font-bold">
        <div>
          <h1 className="px-20 pt-[200px] text-7xl uppercase">
            Internships
          </h1>
        </div>
      </div>
      <div className="my-10 mx-auto px-10 h-full w-full max-w-[1920px]">
        <div className="px-10 my-10 w-full flex">
          <div className="max-w-[40%] w-full px-2 flex">
            <h2 className="text-2xl font-bold">
            Software Industrial Internships
            </h2>
          </div>
          <div className="max-w-[60%] w-full px-2 flex">
            <p className="font-medium text-lg leading-7 items-center text-justify">
            The Software Industrial Internship is a required component of the B.Eng. in Software Engineering program. 
            The objectives are for the students to gain work experience in the software industry and to understand 
            the role of a software engineer in business and the society. Every student is expected to undertake an internship 
            position related to software development in a company in Thailand or abroad during the summer semester 
            at the end of the second year of their study.
            </p>
          </div>
        </div>
        <div className="px-10 my-10 w-full flex">
          <div className="max-w-[40%] w-full pr-10">
            <h2 className="text-2xl font-bold">Requirements</h2>
          </div>
          <div className="max-w-[60%] w-full px-2 flex">
            <ul className="font-medium text-lg leading-7 items-center text-justify space-y-1 list-disc list-inside ">
            <li>Duration and Timing: The internship takes place in the summer semester of Year 2 of the program (late May - late July). 
            The internship must consist of at least 7 weeks of full-time work. It may be longer if you wish. </li>
            <li>Type of Work: An internship provides a excellent opportunity for you to apply your software engineering skills in the real world. 
            The internship should be practical software engineering work, either as an individual project or as part of a larger project. 
            You are expected to be involved in the coding of a software application or a dynamic website. Work consisting entirely of routine testing, 
            internal support, development of a static website, or data entry would not be suitable.</li>
            <li>Supervision: Normally, the host company of your internship will assign a member of the company to be your supervisor. 
            The supervisor will oversee the progress of your work and give you advice. The International College will also nominate one or more lecturers to be 
            your internship advisors who will be available for consultation to both you and the company.</li>
            </ul>
          </div>
        </div>
        <div className="px-10 my-10 w-full flex">
          <div className="max-w-[40%] w-full px-2 flex">
            <h2 className="text-2xl font-bold">=Amount of Coding </h2>
          </div>
          <div class="overflow-x-auto relative">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-black-700 text-center uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="py-3 px-6"> TYPE OF PROGRAMMING LANGUAGES </th>
                        <th scope="col" class="py-3 px-6"> AMOUT OF CODING (NOT INCLUDING COMMENT) </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"> High-level languages, such as Python, Visual Basic, ActionScript</th>
                        <td class="py-4 px-6"> 480 lines </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"> HTML + Mark-up/Scripting languages, such as PHP, JavaScript </th>
                        <td class="py-4 px-6"> 840 lines (not including the content of the web pages) </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"> Lower-level languages, such as C, C++, C#, Objective-C, Java</th>
                        <td class="py-4 px-6"> 840 lines </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
        <div className="px-10 my-10 w-full flex">
          <div className="max-w-[40%] w-full px-2 flex">
            <h2 className="text-2xl font-bold">Internship Goals</h2>
          </div>
          <div className="max-w-[60%] w-full px-2 flex">
          <ul className="font-medium text-lg leading-7 items-center text-justify space-y-1 list-disc list-inside ">
            <li>At the one end of the spectrum, a student working for a large company undertakes small clearly-defined pieces of work within a large project. 
                The student must first make a significant effort to understand the existing framework, before going on to implementation of software components that will fit into that framework. </li>
            <li>At the other end of the spectrum, a student working for a small company develops a complete software package. The student first identifies the requirements, 
                including a user interface design, and continues development through to a prototype implementation.</li>
            </ul>
          </div>
        </div>
        <div className="px-10 my-10 w-full flex">
          <div className="max-w-[40%] w-full px-2 flex">
            <h2 className="text-2xl font-bold">Assessment</h2>
          </div>
          <div className="max-w-[60%] w-full px-2">       
            <h2 class="mb-2 text-lg font-semibold ">The internship is an assessed component of your study. During the internship, the company will monitor your performance and then submit their assessment to the International College. 
            The company's assessment will cover various aspects of your internship, including:</h2>
            <ul class="space-y-1 list-decimal list-inside">
                <li>the quality and quantity of your work</li>
                <li>your attendance record</li>
                <li>other attributes a good software engineer should possess, such as punctuality, responsibility, human relations, creativity, etc.</li>
                <br></br>
            </ul>
            <h2 class="mb-2 text-lg font-semibold ">After your internship, you are required to submit an internship report and give a presentation of your work and 
            your internship experience to the internship assessment committee. The committee will then evaluate your internship and give you either grade S (Satisfactory) or U (Unsatisfactory).</h2>
          </div>
        </div>
        <Collaps label="Internship Report">
        <ul className="font-medium text-lg leading-7 items-center text-justify space-y-1 list-disc list-inside ">
            <li>a brief outline of the company (its size, its main activities, the division or project in which you were employed, etc.)</li>
            <li>the original placement description and objectives (and any later changes to these)</li>
            <li>what you actually did</li>
            <li>an honest evaluation of how successfully you achieved your objectives</li>
            <li>a summary of what you learned from working in an industrial environment (for example, tools, techniques, processes, group working, deadlines)</li>
            <li>a reflection on the value of the placement, and how it could have been better.</li>
            <li>The report should not just be a detailed technical description of what you did. The assessment committee is looking for a coherent, literate report in order to understand 
                    how your project fitted into the company you were working for, what you achieved, and your reflections on how the internship fitted into your educational experience.</li>
            <li>Here are some hints on preparing a good report. Make sure that your report has a clear logical structure - it should not be just an unstructured flow of words telling a story. 
                    Avoid simply quoting PR material about the organisation you worked for - think about what the reader needs to know about the organisation in order to understand the context of your work. 
                    Do not focus on minute technical detail describing intricate pieces of code that you wrote. The biggest problem for most students seems to be reflecting on the internship experience. 
                    Here are some questions you might like to think about in developing this part of the report:</li>
            <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
                <li>What new skills did you learn?</li>
                <li>What existing skills did you exercise or improve during the internship?</li>
                <li>Did your internship experience reinforce your existing knowledge? (Did you observe techniques taught at the International College actually used in practice?)</li>
                <li>Were there any techniques that you would like to have known before undertaking the internship?</li>
                <li>How could the internship experience have been improved?</li>
                <li>What knowledge and experience will you take forward as the most important lessons from your internship?</li>
            </ul>
        </ul>
        </Collaps>
        <div className="px-10 my-10 w-full flex">
          <div className="max-w-[40%] w-full px-2 flex">
            <h2 className="text-2xl font-bold">Presentation </h2>
          </div>
          <div className="max-w-[60%] w-full px-2 flex">
            <p className="font-medium text-lg leading-7 items-center text-justify">
            After your internship, you are required to present your work and your experience during the internship to the assessment committee and your colleagues. 
            You should plan for a 20-minute presentation, which will be followed by a 10-minute QA session.
            </p>
          </div>
        </div>
        <div className="px-10 my-10 w-full flex">
          <div className="max-w-[40%] w-full px-2 flex">
            <h2 className="text-2xl font-bold">Absence during internship </h2>
          </div>
          <div className="max-w-[60%] w-full px-2 flex">
            <p className="font-medium text-lg leading-7 items-center text-justify">
            If, for any reason, you need to take a leave during the internship, you must ask for permission from the company. You must also submit a document 
            supporting the request for your leave to your supervisor in the company (or a person who makes a record of your attendance). Absence without 
            notice will result in failing the internship.
            </p>
          </div>
        </div>
        <div className="px-10 my-10 w-full flex">
          <div className="max-w-[40%] w-full px-2 flex">
            <h2 className="text-2xl font-bold">Procedure and Timetable </h2>
          </div>
          <div class="overflow-x-auto relative">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-black-700 text-center uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="py-3 px-6"> Activities </th>
                        <th scope="col" class="py-3 px-6"> Dates </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"> 1. Apply for internship <br /> Every student who is 
                        planning to undertake an internship in the upcoming summer semester must apply for an internship position in a company.</th>
                        <td class="py-4 px-6"> Until 13 March 2020 </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"> 2. Registration (on-line) <br /> Every student taking 
                        an internship must register for the course"13016004 Software Industrial Internship in Summer". <br /> Registration is done on the University's on-line registry 
                        system. If this course is the only course you register in the summer semester, you will not be charged the tuition fee. </th>
                        <td class="py-4 px-6"> 3-5 June 2020 </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"> 3. Pre-internship meeting <br /> A meeting of all the students 
                        taking internships and the internship co-ordinator will be held near the end of semester 2. </th>
                        <td class="py-4 px-6"> TBA </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"> 4. Internship <br /> During the internship, 
                        you are expected to work full time in the host company, and follow the normal regulation of the company. Your internship may begin before or finish 
                        after this period. </th>
                        <td class="py-4 px-6"> Late May - Early August 2020 (tentative) </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"> 5. Presentation and assessment <br /> After completing the internship, 
                        you are required to submit an internship report and give a presentation to the internship assessment committee. <br /> Submit your internship report on Moodle here:
                        <Link href="https://www.ic.kmitl.ac.th/moodle/course/view.php?id=27#section-5"><a className="text-blue-800"> https://www.ic.kmitl.ac.th/moodle/course/view.php?id=27#section-5</a></Link> no later than 15.30 on Fri 14 August 2020. </th>
                        <td class="py-4 px-6"> Fri 14 August 2020 16.00-18.30 Room IC06 </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
        <div className="px-10 my-10 w-full flex">
          <div className="max-w-[40%] w-full px-2 flex">
            <h2 className="text-2xl font-bold">Contact</h2>
          </div>
          <div className="max-w-[60%] w-full px-2">       
            <h2 class="mb-2 text-lg font-semibold ">Should you have any problem or question, please contact:</h2>
            <h2 class="mb-2 text-lg font-semibold ">Internship advisor: Dr. Natthapong Jungteerapanich</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
