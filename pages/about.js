export default function about() {
  return (
    <div className="mt-28">
      <div className="bg-[url('../public/about_background.svg')] bg-cover bg-center min-h-[480px] text-white font-bold" />
      <div className="py-10">
        <div className="mx-20 py-10">
          <h2 className="text-2xl font-bold">What is Software Engineering?</h2>
          <br />
          <p className="font-medium text-lg leading-7 items-center text-justify">
            Software engineering (SE) is an engineering discipline concerning
            all aspects of software production, including software analysis,
            design, development, testing, and deployment. SE requires profound
            abstract and logical thinking and the application of mathematics,
            logic, and computer science in order to produce efficient and
            reliable software with the available resources.
          </p>
        </div>
        <div className="mx-20 py-10">
          <h2 className="text-2xl font-bold">
            Why study Software Engineering?
          </h2>
          <br />
          <p className="font-medium text-lg leading-7 items-center text-justify">
            It is hard to overstate the ubiquity of software nowadays. Every
            computer system is governed by software. Almost every human activity
            involves software in some form. Undoubtedly software industry is one
            of the largest and fastest growing industries in the world.
            Consequently, skilled software engineers are in high demand
            worldwide. As software becomes more and more complex, the
            programming skills and the rudimentary knowledge of software
            engineering that students obtained from traditional computer science
            and computer engineering curriculums are insufficient. The
            development of real-world software applications requires the skills
            in analysing the problem domain and the customer's requirement and
            the skills in designing the software from the topmost level down to
            the implementation level. Moreover, a software engineer must be able
            to use proper tools, techniques, and methodologies in order to
            produce the software in an efficient manner.
          </p>
        </div>
        <div className="mx-20 py-10">
          <h2 className="text-2xl font-bold">
            Careers in Software Engineering
          </h2>
          <br />
          <p className="font-medium text-lg leading-7 items-center text-justify">
            There are abundant career opportunities for graduates from the
            software engineering program.
          </p>
          <ul className="font-medium text-lg leading-7 items-center text-justify list-disc">
            <li>
              Software engineers, software architects, and software developers
              on various platforms, including enterprise software, web
              applications, mobile applications, games, embedded applications,
              etc.
            </li>
            <li>Analysts and designers of IT systems, IT consultants</li>
            <li>Software entrepreneurs</li>
          </ul>
          <p className="font-medium text-lg leading-7 items-center text-justify">
            With strong foundation in computer science, mathematics, and
            software engineering principles, graduates of the SE program may
            continue their studies at postgraduate level in various software
            engineering or computing related fields in universities worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}
