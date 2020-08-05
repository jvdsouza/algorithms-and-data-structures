require('dotenv').config()

const config = {
    NODE_ENV: process.env.NODE_ENV || "development",
}

export default config;