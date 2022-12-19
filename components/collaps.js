import { useState } from "react";

export default function Collaps(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="collapse collapse-arrow">
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

