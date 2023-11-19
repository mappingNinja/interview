const Notes = require('../../../models/notes')

const getNotes = async (req, res) => {
    try {
        const { userId } = req.body || {}
        const notes = await Notes.find({ userId });
        res.status(200).send({ success: true, notes })
    } catch (error) {
        return res.status(500).send({
            success: false,
            error: error.error || error.message
        })
    }
}

module.exports = getNotes;