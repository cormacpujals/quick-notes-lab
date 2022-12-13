import './NoteCard.css'
export default function NoteCard({note}) {
  const date = new Date(note.createdAt);
  return (
    <div className="noteCard">
      <p>{note.text}</p>
      <p>{date.toLocaleString()}</p>
    </div>
  )
}