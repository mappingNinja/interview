import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { deleteNote } from '../../redux/actions/notesAction';
import NoteModal from './NoteModal'

const Note = ({ index, note, setNote, deleteNote, id }) => {
  const navigate = useNavigate();

  // const removeNote = () => {
  //   const data = { token: user?.token, noteId: id }
  //   dispatch(deleteNote(data))
  // }
  return (
    <>
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{note?.title}</td>
        <td>{note?.content}</td>
        <td>
          <button type="button" onClick={() => setNote(note, true)} class="btn btn-xs btn-primary mr-3 px-2 py-1" data-toggle="modal" data-target="#noteModal">
            <i className='fa fa-eye ' />
          </button>
          <button type="button" onClick={() => navigate(`/note/${id}/edit`)} class="btn btn-xs btn-dark mr-3 px-2 py-1" data-toggle="modal" data-target="#noteModal">
            <i className='fa fa-pencil ' />
          </button>

          <i className='fa fa-trash btn btn-xs btn-danger pr-1 pl-2 pr-2' onClick={() => deleteNote(id)} />
        </td>
      </tr>
    </>
  )
}

export default Note