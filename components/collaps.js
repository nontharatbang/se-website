import { useState } from "react";

export default function collaps(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        className="font-medium text-lg leading-7 items-center text-justify"
        onClick={() => setIsOpen(!isOpen)}
      >
        Hello
      </button>
      {isOpen && <div className="content">{props.children}</div>}
    </div>
  );
}
