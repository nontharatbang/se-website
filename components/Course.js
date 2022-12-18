export default function course(props) {
  return (
    <div
      tabIndex={0}
      className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
    >
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">
        Click me to show/hide content
      </div>
      <div className="collapse-content">
        <p>hello</p>
      </div>
    </div>
  );
}
