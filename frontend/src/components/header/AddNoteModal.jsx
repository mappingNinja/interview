import React, { useContext, useState } from 'react'
import { useDispatch } from 'react-redux';
import authContext from '../../context/auth/authContext';
import { addNotes, getNotes } from '../../redux/actions/notesAction';

const AddNoteModal = () => {
    const dispatch = useDispatch();

    const { user } = useContext(authContext)
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        insertNote();
    }

    const fetchNotes = () => {
        const data = { token: user?.token }
        dispatch(getNotes(data));
    }

    const insertNote = () => {
        const data = { token: user?.token, title, content }
        dispatch(addNotes(data, fetchNotes))
        onCloseModal();
    }

    const onCloseModal = () => {
        setTitle('');
        setContent('');
    }
    return (
        <div>
            <div class="modal fade" id="addNoteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={onCloseModal}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className='mb-3'>
                                <div className='mb-1'>Title:</div>
                                <input className='form-control' type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                            </div>

                            <div className='content-render'>
                                <div className='mb-1'>Content:</div>
                                <textarea className='form-control' value={content} onChange={(e) => setContent(e.target.value)} />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={onCloseModal} >Close</button>
                            <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={handleSubmit}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNoteModal