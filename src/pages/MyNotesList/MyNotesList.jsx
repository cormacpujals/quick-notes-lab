import NoteCard from "../../components/NoteCard/NoteCard"
import { useState } from "react";
import "./MyNotesList.css";

export default function MyNotesList({notes, setNotes, addNote}) {
  const noteCards = notes.map((n, idx) => <NoteCard note={n} key={idx} />)
  const [noteInfo, setNoteInfo] = useState({
    text: '',
  })

  function handleChange(evt) {
    setNoteInfo({text: evt.target.value})
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    addNote(noteInfo)
  }

  return (
    <div className="myNotesList">
      {notes.length ?
      <>
        <h4>{noteCards}</h4>
        <label>Add a note:</label>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="New Notes"
            value={noteInfo.text}
            name="text"
            onChange={handleChange}
            required
          />
            <button type="submit">Add note</button>
        </form>
      </>
      :
      <>
        <p>No Notes Yet!</p>
        <label>Add a note:</label>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="New Notes"
            value={noteInfo.text}
            name="text"
            onChange={handleChange}
            required
          />
            <button type="submit">Add note</button>
        </form>
      </>
      }
    </div>
  )

}