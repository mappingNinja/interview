const User = require("../../../models/users");
const generateToken = require("../../../utils/generateToken");
const { hashPassword, comparePassword } = require('../../../utils/hashPassword')
const login = async (req, res) => {
    try {
        const { email, password } = req.body || {};
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                error: "Invalid email or password"
            })
        }

        const findUser = await User.findOne({ email });
        if (!findUser) {
            return res.status(404).send({
                success: false,
                error: "Email is not registered"
            })
        }

        const matchPassword = await comparePassword(password, findUser?.password);
        if (!matchPassword) {
            return res.status(400).send({
                success: false,
                error: "Invalid password"
            })
        }

        const token = generateToken(findUser._id);
        const { name, address, phone } = findUser || {};
        const user = {
            name, email, address, phone, token
        }
        return res.status(200).send({
            success: true,
            message: "Login successful",
            user,
            isAdmin: findUser?.isAdmin
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            error: error.error || error.message
        })
    }
}

module.exports = login