require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

app.get('/', (req, res) => {
    res.status(200).json({ 
        message: 'API de Autenticação Ativa!', 
        documentation: '/api/users'
    });
});

app.use(express.json());

app.use('/api/users', require('./src/routes/userRoutes'));


// Conexão com o MongoDB
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Conectado ao MongoDB com sucesso!');
        
        // 2. Inicialização do Servidor SÓ DEPOIS da conexão
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Erro na conexão com o MongoDB:', error.message);
        process.exit(1); 
    });

// Inicialização do Servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
