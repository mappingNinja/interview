const Notes = require('../../../models/notes')

const updateNote = async (req, res) => {
    try {
        const { title, content, userId, noteId } = req.body || {}
        // const { noteId } = req.params || {};

        if (!title) {
            return res.status(400).send({ success: false, error: 'Title not found!' })
        }
        if (!content) {
            return res.status(400).send({ success: false, error: 'Content not found!' })
        }
        if (!userId) {
            return res.status(400).send({ success: false, error: 'Please Login again!' })
        }
        if (!noteId) {
            return res.status(400).send({ success: false, error: 'Please Select Note!' })
        }

        const update = { $set: req.body }
        await Notes.findByIdAndUpdate(noteId, update, { new: true });
        return res.status(200).send({ success: true, message: 'Note Updated Successful!' })
    } catch (error) {
        return res.status(500).send({
            success: false,
            error: error.error || error.message
        })
    }
}

module.exports = updateNote;