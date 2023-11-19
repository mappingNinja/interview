import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Note from '../components/notes/Note'
import NoteModal from '../components/notes/NoteModal'
import authContext from '../context/auth/authContext'
import { deleteNote, getNotes } from '../redux/actions/notesAction'

const Notes = () => {
    const dispatch = useDispatch();

    const { user } = useContext(authContext)
    const { notes } = useSelector(state => state?.notes)

    const [note, setNote] = useState('');

    const handleSetNote = (note, isReadOnly) => {
        const noteData = { ...note, isReadOnly };
        setNote(noteData);
    }

    useEffect(() => {
        fetchNotes()
    }, []);

    const fetchNotes = () => {
        const data = { token: user?.token }
        dispatch(getNotes(data))
    }

    const handleDeleteNote = (noteId) => {
        const data = { token: user?.token, noteId }
        dispatch(deleteNote(data, fetchNotes))
    }

    return (
        <div className='m-5'>
            <table class="table">
                {note ? <NoteModal note={note} setNote={handleSetNote} /> : null}
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">title</th>
                        <th scope="col">Content</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {(notes || []).map((note, noteIndex) => {
                        const name = '1';
                        return (
                            <Note
                                key={note?._id}
                                id={note?._id}
                                index={noteIndex}
                                note={note}
                                notes={notes}
                                setNote={handleSetNote}
                                deleteNote={handleDeleteNote}
                            />
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Notes