const User = require("../../../models/users");
const { hashPassword } = require("../../../utils/hashPassword");

const forgetPassword = async (req, res) => {
    try {
        const { email, answer, password } = req.body;

        if (!email) {
            return res.status(400).send({ error: 'Email is required' })
        }
        if (!answer) {
            return res.status(400).send({ error: 'Answer is required' })
        }
        if (!password) {
            return res.status(400).send({ error: 'Password is required' })
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(200).send({
                success: false,
                error: "Wrong Email or Answer"
            });
        }

        const hashedPassword = await hashPassword(password);
        await User.findByIdAndUpdate(user._id, { password: hashedPassword });
        return res.status(200).send({
            success: true,
            message: "Password reset successfull"
        })

    } catch (error) {
        return res.status(500).send({
            success: false,
            error: error.error || error.message
        })
    }
}


module.exports = forgetPassword;