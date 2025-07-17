import mongoose from "mongoose";

const coordinatorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true, 
        unique: true
    }
});


const careerSchema = new mongoose.Schema({
    career_code: {
        type: String,
        required: true,
        trim: true // sirve para quitarle los espacios vacíos
    },
    career_name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    four_quarter_duration: {
        type: Number,
        required: true
    },
    modality: {
        type: String,
        required: true
    },
    creation_date: {
        type: Date,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    coordinator: {
        type: coordinatorSchema,
        required: true
    }
}, {
    timestamps: true
});



export default mongoose.model("Career", careerSchema);