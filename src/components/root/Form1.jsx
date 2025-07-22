import { useState } from "react";

const formSubmit = (answer) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() == "dhaka") resolve();
      else reject(new Error("Incorrect Answer"));
    }, 3000);
  });
};

export default function Form() {
  const [status, setStatus] = useState("typing");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  if (status == "success")
    return (
      <>
        <h1>That's Right!</h1>
        <hr />
      </>
    );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setStatus("submitting");
      await formSubmit(answer);
      setStatus("success");
    } catch (error) {
      setError(error.message);
      setStatus("typing");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <br />
        <textarea
          onChange={(e) => {
            setStatus("typing");
            setAnswer(e.target.value);
            setError(null);
          }}
          style={{ border: "2px solid red" }}
          name=""
          id=""
        ></textarea>
        <br />
        <button
          disabled={
            status == "submitting" ||
            status == "empty" ||
            status == "error" ||
            answer == ""
          }
          className="border-1 border-red-600 bg-amber-600"
        >
          Submit
        </button>
        {status == "submitting" && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </>
  );
}
