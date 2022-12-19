import axios from "axios";

export default function Plan({ courses }) {
  return (
    <div>
      <div className="bg-[url('../public/study_plan.svg')] bg-cover bg-center min-h-[480px] text-white font-bold">
        <div>
          <h1 className="px-20 pt-[200px] text-7xl uppercase">Study Plan</h1>
        </div>
      </div>
      <div className="my-10 mx-auto px-10 h-full w-full max-w-[1920px]">
        <div className="px-10 my-10 w-full">
          {courses.map((course) => (
            <div className="px-5">
              <div
                tabIndex={0}
                className="collapse collapse-arrow shadow-md rounded-sm"
              >
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                  {course.courseid} : {course.coursename}
                </div>
                <div className="collapse-content">
                  <p className="font-medium text-lg leading-7 items-center text-justify">
                    <b>Prerequisite</b> : {course.prerequisite}
                    <br />
                    <b>Program</b> : {course.program}
                    <br />
                    <b>Subject Credit</b> : {course.credit}
                    <br />
                    <br />
                    <b>Description</b> : {course.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await axios.get("http://127.0.0.1:8000/courses/");
  return {
    props: {
      courses: data.results,
    },
  };
}
