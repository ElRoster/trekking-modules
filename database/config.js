import { connect } from 'mongoose';

const dbConnect = async () => {
    try {
        //connect to database
        await connect (process.env.MONGO_CNN)
        console.log('connect to  database');

    }catch  (error) {
        console.error('Error connection to database', error)
    }
}

export default dbConnect;