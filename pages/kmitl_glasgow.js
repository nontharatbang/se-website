import Image from "next/image";
import glasgow_icon from "../public/glasgow_icon.svg";
import Link from "next/Link";
import Collaps from "../components/Collaps.js";

export default function curriculum() {
  return (
    <div>
      <div className="bg-[url('../public/glasgow_background.svg')] bg-cover bg-center min-h-[480px] text-white font-bold">
        <div>
          <h1 className="px-20 pt-[200px] text-7xl uppercase">
            Kmitl - Glasgow
          </h1>
        </div>
      </div>
      <div className="my-10 mx-auto px-10 h-full w-full max-w-[1920px]">
        <div className="px-10 my-10 w-full flex">
          <div className="max-w-[40%] w-full px-2 flex">
            <h2 className="text-2xl font-bold">
              KMITL-Glasgow Double-Degree Program in Software Engineering
            </h2>
          </div>
          <div className="max-w-[60%] w-full px-2 flex">
            <p className="font-medium text-lg leading-7 items-center text-justify">
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
        <div className="px-10 my-10 w-full flex">
          <div className="max-w-[40%] w-full pr-10">
            <h2 className="text-2xl font-bold">About University of Glasgow</h2>
            <div className="pt-5 w-[%20]">
              <Image src={glasgow_icon} alt="glasogw icon" />
            </div>
          </div>
          <div className="max-w-[60%] w-full px-2 flex">
            <p className="font-medium text-lg leading-7 items-center text-justify">
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
        <div className="px-10 my-10 w-full flex">
          <div className="max-w-[40%] w-full px-2 flex">
            <h2 className="text-2xl font-bold">Admission</h2>
          </div>
          <div className="max-w-[60%] w-full px-2 flex">
            <p className="font-medium text-lg leading-7 items-center text-justify">
              Requirements for the students who wish to join this double-degree
              program: Completed Year 2 of the B.Eng. in Software Engineering
              program with GPA of 3.0 or more IELTS score of 6.5 or more, with
              no subtest below 6.0
            </p>
          </div>
        </div>
        <div className="px-10 my-10 w-full flex">
          <div className="max-w-[40%] w-full px-2 flex">
            <h2 className="text-2xl font-bold">Degrees</h2>
          </div>
          <div className="max-w-[60%] w-full px-2 flex">
            <p className="font-medium text-lg leading-7 items-center text-justify">
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
        <div className="px-10 my-10 w-full flex">
          <div className="max-w-[40%] w-full px-2 flex">
            <h2 className="text-2xl font-bold">Tuition Fees</h2>
          </div>
          <div className="max-w-[60%] w-full px-2 flex">
            <p className="font-medium text-lg leading-7 items-center text-justify">
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
        <div className="px-10 my-10 w-full flex">
          <div className="max-w-[40%] w-full px-2 flex">
            <h2 className="text-2xl font-bold">Application Procedure</h2>
          </div>
          <div className="max-w-[60%] w-full px-2 flex">
            <p className="font-medium text-lg leading-7 items-center text-justify">
              Applications for KMITL-Glasgow Double-Degree Program in Software
              Engineering are made when students finish the second semester of
              Year 2 of their study in the SE program. Second-year SE students
              who meet the requirements above and wish to apply need to inform
              the SE program director before the end of Year 2 Semester 2 and
              submit their applications on the UCAS systemno later than 30 June
              (of the year they are planning to enter UoG) at&nbsp;
              <Link href="https://www.ucas.com/students">
                <a className="text-blue-800">https://www.ucas.com/students.</a>
              </Link>
            </p>
          </div>
        </div>
        <Collaps label="Application Guidance">
          <p className="font-medium text-lg leading-7 items-center text-justify">
            1. On the UCAS website above, choose Undergraduate 20xx entry, where
            20xx is the year you are planning to enter UoG, and then select
            "Apply". This should lead you to the application system. You first
            need toregister. Make sure you provide an email address that you
            check regularly (could be @kmitl.ac.th address or your personal
            email address). Your given names and your last name that you enter
            when registering should be spelled exactly as written in your
            passport. If there is any field in the registration form that is
            unclear, click on ? or "Help" to see an explanation. After you have
            registered, you will receive an email from UCAS asking you to verify
            your email address. You should follow the instruction in the email.
            <br />
            2. After you have registered, you can then login to start filling in
            your application. When asked how you are applying, you should
            specify that you apply as "individual" (thus a "buzzword" is not
            required).
            <br />
            3. When asked which program to apply, choose BSc (Hons) Software
            Engineering program at the University of Glasgow (UCAS G430) for
            entry into Year 3 of the program.
            <br />
            4. You must include a short personal statement. The statement should
            include your reason for choosing software engineering as your
            program of study, your reason for choosing the KMITL-Glasgow
            Double-Degree Program in Software Engineering, and your future plan
            after your graduate.
            <br />
            5. Reference letters are not needed.
            <br />
            6. When you submit your application, you will be asked to pay
            theapplication fee using a credit card. You can ask someone else to
            pay for you using their credit card. If the credit card you use does
            not work, try another one.
            <br />
            7. After you have submitted your UCAS application, notify the SE
            program director that your have done so within 30 June. Also send a
            copy of your IELTS score report to the program director. The program
            director will forward your IELTS score report together with your
            transcript to the admissions office at UoG. There is no need to send
            us your transcript as we can obtain it by ourselves.
            <br />
            8. If you satisfy all the requirements, UoG will notify you with
            anunconditional offer via email. If not, UoG will send you
            aconditional offer via email, detailing the conditions that you need
            to satisfy and the deadline (e.g. IELTS score or final GPA for Year
            2 at KMITL). You must accept the offer within the deadline stated in
            your offer.
            <br />
            9. Once you have been given and accepted an unconditional offer, UoG
            will start preparing aCAS statement for you. UoG will send you
            adraft of your CAS statement for you to check for correctness. Your
            CAS statement is a summary of your personal information, educational
            records, and your program of study in the UK. The CAS statement will
            be stored in an online server accessible by UK universities and the
            UK immigration department (called the Home Office). Your CAS
            statement will be read by the visa staff when you apply for a visa.
            You should check that all the information is correct and, in
            particular, thetuition fee listed in the statement is the
            20%-discounted rate. Inform UoG if any correction is needed.
            <br />
            10. Once you have confirmed that the draft of your CAS statement is
            correct, UoG will email you a copy of your final CAS statement. You
            should print it out and later include it with your visa application.
            <br />
            11. During the same time after you accepted the unconditional offer,
            you will receive some information from UoG's student services
            regarding the registration, student accommodation, internet account,
            etc via email. You can just response to their request. When you are
            asked to register for courses in the upcoming semester, you can
            ignore that. You are to do thecourse registration when you are in
            the UK. Your advisor at UoG will help you with the course
            registration when you arrive at UoG.
            <br />
            12. Regarding the accommodation, UoG will send you an application
            form for applying for auniversity accommodation. There is a wide
            range of options. You can also apply for a private student
            accommodation. For the latter, you can do so by yourself on the web
            any time (even before you receive an offer). You can consult the SE
            students currently studying at Glasgow for advice accommodations.
            For a private accommodation, you could apply even before you receive
            an offer from UoG.
            <br />
            13. After your have received a copy of your final CAS statement in
            Step 10 above, you can start applying for your UK visa. See below
            for the visa application guidance.
            <br />
            14. You should plan to arrive at Glasgow at the beginning of the
            orientation week, which is typically on the Monday in the middle of
            September, or before that.
            <br />
            <br />
            If you have any question or problem on the KMITL-Glasgow
            Double-Degree Program in Software Engineering, please contact the SE
            program director, Asst.Prof.Dr. Visit Hirankitti
            (visit.hi@kmitl.ac.th).
          </p>
        </Collaps>
        <Collaps label="UK Visa Guidance">
          <p className="font-medium text-lg leading-7 items-center text-justify">
            The type of the visa that you should apply is called "General
            student visa (Tier 4)". You can apply for the visa only after you
            have received your final CAS statement from UoG. But there are some
            necessities that you should prepare even before starting your visa
            application process.
            <br />
            <br />
            1. Make sure you have your passport that is valid for 3 more years
            or longer.
            <br />
            2. Prepare a sufficient amount of money in your parents' bank
            account. The money must be in the account for at least 28 days when
            you apply for a visa. Bank accounts belonging to someone else other
            than yourself or your parents are unacceptable. Only a bank account
            where the money can be readily withdrawn at any time can be used to
            support your application. The minimum amount of money required in
            the bank account is"Annual tuition fee listed on CAS statement in
            GBP" + ("Monthly living cost of 1,015 GBP/month" x 9 months).
            <br />
            3. Have a Tuberculosis test at an approved testing center to obtain
            a medical certificate. See&nbsp;
            <Link href="https://www.gov.uk/government/publications/tuberculosis-test-for-a-uk-visa-clinics-in-thailand/tuberculosis-testing-in-thailand">
              <a className="text-blue-800">
                https://www.gov.uk/government/publications/tuberculosis-test-for-a-uk-visa-clinics-in-thailand/tuberculosis-testing-in-thailand
              </a>
            </Link>
            <br />
            4. Obtain the address of your accommodation in the UK.
            <br />
            <br />
            Note that you need not purchase your flight ticket before applying
            for your visa, but you should have a travel plan, i.e. which day
            your plan to arrive in the UK.
            <br />
            <br />
            Guidance on how to apply for this type of visa can be found at&nbsp;
            <Link href="https://www.gov.uk/tier-4-general-visa.">
              <a className="text-blue-800">
                https://www.gov.uk/tier-4-general-visa.
              </a>
            </Link>
            Below is an overview of the UK visa application procedure.
            <br />
            <br />
            1. Fill in and submit the online application form.
            <br />
            2. Upload all the required supporting documents. Upload the original
            copies. Translations are not needed.
            <br />
            3. Pay the visa application fee.
            <br />
            4. Print out the completed application form.
            <br />
            5. Make a reservation for a visit to the UK visa application center.{" "}
            <br />
            6. Bring your application form, your current passport and all the
            old ones, your medical certificate, and the original version of all
            your supporting documents and go to the visa application center.{" "}
            <br />
            7. At the UK visa application center, have your documents checked
            and your fingerprints recorded.
            <br />
            8. Obtain the visa collection slip and the expected visa collection
            date.
            <br />
            <br />
            If there is no problem with your application, the processing time
            for General student visa (Tier 4) is normally 2-3 weeks after your
            visit to the UK visa application center.
          </p>
        </Collaps>
      </div>
    </div>
  );
}
