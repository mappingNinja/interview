const isAdmin = async (req, res) => {
    await res.status(200).send({ success: true })
}

module.exports = isAdmin