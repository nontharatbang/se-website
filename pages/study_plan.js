import axios from "axios";
import { useState } from "react";

export default function Plan({ courses }) {
  const [year, setYear] = useState(null);
  const [semester, setSemester] = useState(null);
  const [query, setQuery] = useState("");

  const searchFilter = (array) => {
    return array.filter(
      (el) =>
        el.coursename.includes(query) &&
        (year == null || el.year == year) &&
        (semester == null || el.semester == semester)
    );
  };

  const filtered = searchFilter(courses);

  const handleChange = (e) => {
    if (e.target.name == "year" || e.target.name == "semester") {
      setQuery("");
    }
    if (e.target.name == "year") {
      setYear(e.target.value);
      setSemester(null);
    }
    if (e.target.name == "semester") {
      setSemester(e.target.value);
    }
  };
  const clearFilter = () => {
    setYear(null);
    setSemester(null);
  };
  return (
    <div>
      <div className="bg-[url('../public/study_plan.svg')] bg-cover bg-center min-h-[480px] text-white font-bold">
        <div>
          <h1 className="px-20 pt-[200px] text-7xl uppercase">Study Plan</h1>
        </div>
      </div>
      <div className="my-10 mx-auto px-10 h-full w-full max-w-[1920px]">
        <div className="px-10 my-10 w-full">
          <div className="my-5 mx-5 flex">
            <div className="mr-2">
              <select
                className="select w-full max-w-[10rem]"
                labelId="year"
                name="year"
                onChange={handleChange}
                value={year || ""}
              >
                <option disabled value={""}>
                  Select Year
                </option>
                <option value={"1"}>Year 1</option>
                <option value={"2"}>Year 2</option>
                <option value={"3"}>Year 3</option>
                <option value={"4"}>Year 4</option>
              </select>
            </div>
            <div className="mx-2">
              <select
                className="select w-full max-w-[10rem]"
                labelId="semester"
                name="semester"
                onChange={handleChange}
                value={semester || ""}
              >
                <option disabled value={""}>
                  Select Semester
                </option>
                <option value={"1"}>Semester 1</option>
                <option value={"2"}>Semester 2</option>
              </select>
            </div>
            <div className="mx-2">
              <button className="btn btn-outline" onClick={clearFilter}>
                Clear Filter
              </button>
            </div>
          </div>
          {filtered.map((course) => (
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
  const { data } = await axios.get("http://127.0.0.1:8000/courses/?limit=99");
  return {
    props: {
      courses: data.results,
    },
  };
}
