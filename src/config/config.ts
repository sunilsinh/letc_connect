import dotenv from 'dotenv';

dotenv.config();

export const config = {
    port: parseInt(process.env.PORT),
    baseUrl: 'http://google.com'
}