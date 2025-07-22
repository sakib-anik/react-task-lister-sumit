import { useState } from "react";
export default function FullName() {
  const [name, setName] = useState({
    first: "",
    last: "",
  });

  const handleChange = (e) => {
    setName({
      ...name,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="">
        <input
          value={name.first}
          name="first"
          type="text"
          placeholder="First Name"
          onChange={handleChange}
        />
      </div>
      <div className="">
        <input
          type="text"
          name="last"
          placeholder="Last Name"
          value={name.last}
          onChange={handleChange}
        />
      </div>
      Full Name : {name.first} {name.last}
    </>
  );
}
