const userService = require('../services/userService');

const register = async (req, res) => {
    try {
        const userData = req.body;
        const result = await userService.registerUser(userData);

        return res.status(201).json({
            message: 'Usuário cadastrado com sucesso!',
            user: result.user,
            token: result.token
        });

    } catch (error) {
        const status = error.status || 500; 
        const message = error.message || 'Erro interno do servidor.';
        
        return res.status(status).json({ message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
        }

        const result = await userService.loginUser({ email, password });

        return res.status(200).json({
            message: 'Login realizado com sucesso!',
            user: result.user,
            token: result.token
        });

    } catch (error) {
        const status = error.status || 500; 
        const message = error.message || 'Erro interno do servidor.';
        
        return res.status(status).json({ message });
    }
};

const getProfile = (req, res) => {
    if (req.user) {
        return res.status(200).json({
            message: 'Dados do perfil obtidos com sucesso.',
            user: req.user
        });
    } else {
        return res.status(500).json({ message: 'Erro interno ao carregar perfil.' });
    }
};

module.exports = {
    register,
    login,
    getProfile 
};

