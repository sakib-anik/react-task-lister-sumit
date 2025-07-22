import Form from "./Form";

const App = () => {
  const statuses = ["empty", "typing", "submitting", "success", "error"];
  return (
    <div>
      {statuses.map((status) => (
        <Form key={status} status={status} />
      ))}
    </div>
  );
};
export default App;
