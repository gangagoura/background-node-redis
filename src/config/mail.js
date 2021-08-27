//Configuração de dados para receber os emails direto no Mailtrap Fake

export default {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: MAIL_USER,
        pass: MAIL_PASS
    }

}