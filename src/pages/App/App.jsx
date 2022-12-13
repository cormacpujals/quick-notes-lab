import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import MyNotesList from '../MyNotesList/MyNotesList'
import * as notesAPI from "../../utilities/notes-api"

export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([]);

  async function addNote(data) {
    const note = await notesAPI.create(data)
    setNotes([...notes, note])
  }

  useEffect(() => {
    async function getNotes() {
      const allNotes = await notesAPI.getAll();
      setNotes(allNotes);
    }
    if (user) getNotes();
  }, [])

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <MyNotesList notes={notes} setNotes={setNotes} addNote={addNote} />
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
