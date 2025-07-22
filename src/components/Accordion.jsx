export default function Accordion({ title, children, isActive, onActive }) {
  return (
    <div className="">
      <h1>{title}</h1>
      {isActive ? (
        <div className="">
          <p>{children}</p>
        </div>
      ) : (
        <button onClick={onActive}>Show</button>
      )}
    </div>
  );
}
