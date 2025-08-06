import mongoose from "mongoose";
const roomSchema = new mongoose.Schema({
    hotel : { type : mongoose.Schema.Types.ObjectId, ref : 'Hotel', required: true },
    type : { type: String , enum : [ 'Standard', 'Deluxe', 'Suite' ], required  : true, unique: true },
    price : { type : Number },
    totalRooms : { type: Number, required : true }
});

const Room = mongoose.model('Room',roomSchema)
export default Room;