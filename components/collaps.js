import { useState } from "react";

export default function Collaps(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {/* <button
        className="my-3 h-10 w-full text-xl text-white bg-orange-500 cursor-pointer rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {props.label} {isOpen ? <span>&#11167;</span> : <span>&#11166;</span>}
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
      </div> */}<div className="collapse collapse-arrow">
        <input type="checkbox" className="peer" />
        <div className="collapse-title my-3 h-10 bg-orange-500 text-xl text-white cursor-pointer rounded-md peer-checked:rounded-t-md">
          {props.label}
        </div>
        <div className="collapse-content rounded-md">
          {props.children}
        </div>
      </div>
    </div>
  );
}

