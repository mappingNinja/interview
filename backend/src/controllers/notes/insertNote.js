const Notes = require('../../../models/notes')

const insertNote = async (req, res) => {
    try {
        const { title, content, userId } = req.body || {}
        if (!title) {
            return res.status(400).send({ success: false, error: 'Title not found!' })
        }
        if (!content) {
            return res.status(400).send({ success: false, error: 'Content not found!' })
        }
        if (!userId) {
            return res.status(400).send({ success: false, error: 'Please Login again!' })
        }

        Notes.create(req.body);
        return res.status(200).send({ success: true, message: 'Note inserted successful!' })
    } catch (error) {
        return res.status(500).send({
            success: false,
            error: error.error || error.message
        })
    }
}

module.exports = insertNote;