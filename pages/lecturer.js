import styles from "../styles/Lecturer.module.css";

export default function lecturer() {
  return (
    <div>
      <div className="bg-[url('../public/lecturer_bg.svg')] bg-cover bg-top min-h-[480px] text-white font-bold flex flex-col justify-center">
        <h1 className="px-20 text-7xl uppercase">Lecturers</h1>
      </div>
      <div className="my-10 mx-auto px-10 h-full w-full max-w-[1920px]"></div>
    </div>
  );
}
