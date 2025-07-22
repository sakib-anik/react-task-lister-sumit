export default function Form({ status }) {
  if (status == "success")
    return (
      <>
        <h1>That's Right!</h1>
        <hr />
      </>
    );
  return (
    <>
      {status}
      <br />
      <textarea style={{ border: "2px solid red" }} name="" id=""></textarea>
      <br />
      <button
        disabled={
          status == "submitting" || status == "empty" || status == "error"
        }
        class="border-1 border-red-600 bg-amber-600"
      >
        Submit
      </button>
      {status == "submitting" && <p>Loading...</p>}
      {status == "error" && <p style={{ color: "red" }}>Error</p>}
      <hr />
    </>
  );
}
