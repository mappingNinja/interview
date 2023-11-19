

import React, { useEffect, useState } from 'react'

const NoteModal = ({ note, setNote }) => {
  const [currentNote, setCurrentNote] = useState(note);

  useEffect(() => {
    setCurrentNote(note)
  }, [note])

  const updateNote = (update) => {
    const state = { ...note, ...update };
    setCurrentNote(state)
  }

  const { title, content, isReadOnly } = currentNote || {}
  return (
    <div>
      <div class="modal fade" id="noteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={() => setNote(null)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className='mb-3'>
                <div className='mb-1'>Title:</div>
                <input className='form-control' disabled={isReadOnly} disabled={isReadOnly} type="text" value={title} onChange={(e) => updateNote({ title: e.target.value })} />
              </div>

              <div className='content-render'>
                <div className='mb-1'>Content:</div>
                <textarea className='form-control' disabled={isReadOnly} value={content} onChange={(e) => updateNote({ content: e.target.value })} />
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={() => setNote()}>Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteModal