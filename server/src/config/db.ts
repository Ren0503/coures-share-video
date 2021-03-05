import mongoose, { ConnectionOptions } from 'mongoose'

(async () => {
    try {
        const mongooseOptions: ConnectionOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        }

        const db = await mongoose.connect(
            `mongodb://localhost:27017/moviedb`,
            mongooseOptions
        )

        console.log("Database is connected to: ", db.connection.name);
    } catch (error) {
        console.error(error)
    }
})()