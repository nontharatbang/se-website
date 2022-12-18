import Course from "../components/Course";

export default function Plan() {
  return (
    <div>
      <div className="bg-[url('../public/study_plan.svg')] bg-cover bg-center min-h-[480px] text-white font-bold">
        <div>
          <h1 className="px-20 pt-[200px] text-7xl uppercase">Study Plan</h1>
        </div>
      </div>
      <div className="my-10 mx-auto px-10 h-full w-full max-w-[1920px]">
        <div className="px-10 my-10 w-full flex">
          <Course avatar={<div>Hello</div>}></Course>
        </div>
      </div>
    </div>
  );
}
