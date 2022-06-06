import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

let conn: typeof mongoose;

export default async function initMongoDB(): Promise<typeof mongoose> {
    if (!conn) {
        conn = await mongoose.connect(`mongodb://${process.env.MONGODB_HOST}`, {
            user: process.env.MONGODB_USERNAME,
            pass: process.env.MONGODB_PASSWORD,
            dbName: process.env.MONGODB_DATABASE,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }
    return conn;
}
