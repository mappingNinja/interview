const Notes = require('../../../models/notes')

const fetchNote = async (req, res) => {
    try {
        const { userId } = req.body || {};
        const { noteId } = req.params || {};
        if (!noteId) {
            res.status(400).send({ success: false, message: "Note id not found!" })
            return;
        }

        const note = await Notes.findOne({ _id: noteId, userId });
        res.status(200).send({ success: true, note })
    } catch (error) {
        return res.status(500).send({
            success: false,
            error: error.error || error.message
        })
    }
}

module.exports = fetchNote;