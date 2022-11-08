import { useState } from "react";

export default function collaps(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        className="font-medium text-2xl leading-7 items-center text-justify"
        onClick={() => setIsOpen(!isOpen)}
      >
        {props.label}
      </button>
      {isOpen && <div>{props.children}</div>}
    </div>
  );
}
