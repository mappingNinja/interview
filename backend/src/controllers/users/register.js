const User = require("../../../models/users");
const { hashPassword } = require('../../../utils/hashPassword')

const findUser = async ({ email }) => {
    return await User.findOne({ email });
}

const register = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body || {};

        if (!name) {
            return res.status(404).send({ error: 'name is required' })
        }
        if (!email) {
            return res.status(404).send({ error: 'email is required' })
        }
        if (!password) {
            return res.status(404).send({ error: 'password is required' })
        }
        if (!phone) {
            return res.status(404).send({ error: 'phone number is required' })
        }

        const existingUser = await findUser({ email });
        if (existingUser) {
            return res.status(400).send({
                success: false,
                error: 'User already registered use Login'
            })
        }

        const hashedPassword = await hashPassword(password);
        const user = await User.create({ name, email, password: hashedPassword, phone });
        if (user) {
            return res.status(201).send({
                success: true,
                message: 'User registration successeful kindly login!',
                user
            })
        }
    } catch (error) {
        return res.status(500).send({
            success: false,
            error: error.error || error.message
        })
    }

}

module.exports = register, { findUser }