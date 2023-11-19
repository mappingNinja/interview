const Notes = require('../../../models/notes')

const deleteNote = async (req, res) => {
    try {
        const { userId, noteId } = req.body || {};
        if (!noteId) {
            res.status(400).send({ success: false, error: "Note not found!" })
            return;
        }

        const note = await Notes.findOne({ _id: noteId, userId })
        if (!note) {
            res.status(404).send({ success: false, error: "Note not found!" })
        }

        await Notes.findOneAndDelete({ _id: noteId, userId });
        res.status(200).send({ success: true, message: "Note deleted successful!" })
    } catch (error) {
        return res.status(500).send({
            success: false,
            error: error.error || error.message
        })
    }
}

module.exports = deleteNote;