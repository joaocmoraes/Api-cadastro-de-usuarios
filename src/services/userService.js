const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const generateToken = (userId) => {
    return jwt.sign(
        { id: userId }, 
        process.env.JWT_SECRET, 
        { expiresIn: '1d' } // Token expira em 1 dia
    );
};

const registerUser = async (userData) => {
    const { email, password, name } = userData;

    // Verificação de existência
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        const error = new Error('Usuário já cadastrado com este email.');
        error.status = 409; 
        throw error;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
        email,
        password: hashedPassword, 
        name
    });

    await newUser.save(); 

 
    // O token identifica o usuário e será usado para proteger rotas
    const token = jwt.sign(
        { id: newUser._id }, 
        process.env.JWT_SECRET, 
        { expiresIn: '1d' }
    );

    return { user: newUser, token };
};

const loginUser = async (userData) => {
    const { email, password } = userData;
    const user = await User.findOne({ email }).select('+password'); 

    // Verificar se o Usuário Existe
    if (!user) {
        const error = new Error('Credenciais inválidas: Email ou senha incorretos.');
        error.status = 401; 
        throw error;
    }

    // Verificação da Senha
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        const error = new Error('Credenciais inválidas: Email ou senha incorretos.');
        error.status = 401; // Unauthorized
        throw error;
    }

    const token = generateToken(user._id);
    const userWithoutPassword = user.toObject();
    delete userWithoutPassword.password; 
    
    return { user: userWithoutPassword, token };
};

module.exports = {
    registerUser,
    loginUser,
};