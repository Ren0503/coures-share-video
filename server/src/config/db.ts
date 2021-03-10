import mongoose, { ConnectionOptions } from 'mongoose'
import config from './default'

(async () => {
    try {
        const mongooseOptions: ConnectionOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        }

        const db = await mongoose.connect(
            `${config.MONGO_URI}`,
            mongooseOptions
        )

        console.log("Database is connected to: ", db.connection.name);
    } catch (error) {
        console.error(error)
    }
})()