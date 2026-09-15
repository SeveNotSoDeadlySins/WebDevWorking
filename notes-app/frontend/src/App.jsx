import { useEffect, useState } from "react";
fetch("/api/notes");

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  return (
    <div>
      <h1>My notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;