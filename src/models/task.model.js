const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
    owner: { type: Schema.Types.ObjectId, ref: 'user' },
    title: { type: String, required: true },
    description: { type: String, required: false },
    status: { type: String, enum: ['PENDIENTE', 'EN PROCESO', 'TERMINADA'], default: 'PENDIENTE' },
    startDate: { type: Date },
    endDate: { type: Date }
});

module.exports = mongoose.model('task', taskSchema);