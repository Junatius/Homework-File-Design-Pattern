const { userModel } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { key } = require('../config');

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.getUserByEmail(email);
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign({ 
            user: { id: user.id, email: user.email, role: user.role } }, 
            key.privateKey, {
            expiresIn: key.jwtExpiration,
            algorithm: 'RS256',
        });
      
        res.json({ 
            message: "Successfully Login",
            token: token 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const userLogout = (req, res) => {
    const { id, email, role } = req.user;
    const now = Math.floor(Date.now() / 1000);
    const iat = now;

    const token = jwt.sign(
        { user: { id, email, role }, iat },
        key.privateKey,
        {
        expiresIn: now - iat,
        algorithm: 'RS256',
        }
    );
    res.status(200).json({ 
        message: 'Logout successful',
        token: token 
    });
  };

const registerUser = async (req, res) => {
    const { email, gender, password, role } = req.body;
    try {
        const existUser = await userModel.getUserByEmail(email);
        if (existUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        await userModel.createUser({
            email: email,
            gender: gender,
            password: password,
            role: role
        })

        res.json({ message: "Successfully Registered"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = {
    userLogin,
    registerUser,
    userLogout
}