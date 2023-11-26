
require('dotenv').config()

module.exports = {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    DB_URL: process.env.DB_URL,
    PORT: process.env.PORT,
    USER_JWT_SECRET: process.env.USER_JWT_SECRET,
    NODE_ENV: process.env.NODE_ENV,
    COOKIE_PARSER_SECRET: process.env.COOKIE_PARSER_SECRET,
    API_DOMAIN_NAME: process.env.API_DOMAIN_NAME,
    SOCKET_JWT_SECRET: process.env.SOCKET_JWT_SECRET,

    CONSTANTS: {
        PROMPT_TYPES: {SPEECH: 'speech', TEXT: 'text'},
        MAX_SOCKET_MEDIA_SIZE: '1e8', // 100MB
        EMAIL_DELIVERY_STATUS: {
            PENDING: 'pending',
            DELIVERED: 'delivered',
            FAILED: 'failed'
        },
        GENERATED_LINK_REASON: {
            FORGOT_PASSWORD: 'forgot_password',
            EMAIL_VERIFICATION: 'email_verification'
        }
    },

    AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_REGION: process.env.AWS_REGION,

    ORGANISATION_EMAIL_ADDRESS: process.env.ORGANISATION_EMAIL_ADDRESS,
    ORGANISATION_EMAIL_PASSWORD: process.env.ORGANISATION_EMAIL_PASSWORD,
    ORGANISATION_MAIL_HOST: process.env.ORGANISATION_MAIL_HOST
}