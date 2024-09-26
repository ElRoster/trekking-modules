import mongoose from 'mongoose';
const {Schema} = mongoose

const DestinationSchema = new Schema({
    Id:{
        type:Number,
        required:true,
        unique:true
    },

    Name:{
        type:String,
        maxlength:50,
        required:[true, 'The name is required']
    },

    Description:{
        type:String
    }
})

const Destination = mongoose.model('Destination', DestinationSchema, 'Destinations')

export default Destination