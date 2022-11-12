import { useState } from "react";

export default function collaps(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        className="my-3 h-10 w-full text-xl text-white bg-orange-500 cursor-pointer rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {props.label}
      </button>
      <div
        style={
          isOpen
            ? { maxHeight: "100rem", transition: "max-height ease 0.3s" }
            : {
                maxHeight: "0rem",
                overflow: "hidden",
                transition: "max-height ease 0.3s",
              }
        }
      >
        <div className="p-3 border border-slate-500 rounded-md">
          {props.children}
        </div>
      </div>
    </div>
  );
}
