export default function getNextId(tasks) {
  return (
    tasks.reduce((prev, curr) => (prev.id > curr.id ? prev.id : curr.id)) + 1
  );
}
