import mongoose from 'mongoose';

const { Schema } = mongoose;
const userSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    firebaseUid: { type: String, required: true },
});

export default mongoose.model('Admins', userSchema);