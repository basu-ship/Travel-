const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    transportId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transport',
        required: true
    },
    date:{
        type: Date,
        required: true,
    },
    applyVirtuals:{
        type: Number,
        required:true,
    },
    bookedSeats: {
        type: Number,
        default: 0,
    },
    status:{
        type: String,
        enum: ['scheduled', 'running', 'completed', 'cancelled'],
        default: 'scheduled',
    }

},
{
    timestamps: true,
});

module.exports = mongoose.model('Trip',tripSchema);