import { useState } from "react";
export default function DynamicInputs() {
  const [inputs, setInputs] = useState([
    {
      id: 1,
      label: "input",
    },
  ]);

  const handleClick = () => {
    console.log("HI");
    setInputs([
      ...inputs,
      {
        id: inputs[inputs.length - 1].id + 1,
        label: "input",
      },
    ]);
  };

  return (
    <>
      <div className="">
        {inputs.map((input) => (
          <div className="">
            <input key={input.id} className={`${input.label} border-2`} />
          </div>
        ))}
      </div>
      <button type="button" onClick={handleClick}>
        Add Input
      </button>
    </>
  );
}
