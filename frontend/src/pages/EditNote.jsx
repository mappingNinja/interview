import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import authContext from '../context/auth/authContext';
import { fetchNote, updateNote } from '../redux/actions/notesAction';

const EditNote = () => {

    const dispatch = useDispatch();
    const { noteId } = useParams()
    const { user } = useContext(authContext);
    const { note: currentNote } = useSelector(state => state?.fetchNote);
    const [note, setNote] = useState(currentNote);

    useEffect(() => {
        const data = { token: user?.token, noteId }
        dispatch(fetchNote(data))
    }, [noteId])

    useEffect(() => {
        setNote(currentNote)
    }, [currentNote])

    const updateCurrentNote = (update) => {
        const state = { ...note, ...update }
        setNote(state)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdate();
    }

    const handleUpdate = () => {
        const data = { token: user?.token, ...note, noteId }
        dispatch(updateNote(data))
    };


    return (
        <div className='container mt-5'>
            <div class="card">
                <div class="card-header text-center font-weight-bold">
                    Edit Note
                </div>
                <div class="card-body">
                    <div className='mb-3'>
                        <div className='mb-1 font-weight-bolder ml-1'>Title:</div>
                        <input type="text" className='form-control' value={note?.title} onChange={(e) => updateCurrentNote({ title: e.target.value })} />
                    </div>
                    <div className='mb-3'>
                        <div className='mb-1 font-weight-bolder ml-1'>Content:</div>
                        <textarea type="text" className='form-control' value={note?.content} onChange={(e) => updateCurrentNote({ content: e.target.value })} />
                    </div>
                    <button type='button' class="btn btn-primary" onClick={handleSubmit}>Update</button>
                </div>
            </div>
        </div >
    )
}

export default EditNote