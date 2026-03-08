import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  treatment: {
    type: String,
    required: true
  },
  hospital: {
    type: String
  },
  message: {
    type: String
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'in-progress', 'completed', 'cancelled'],
    default: 'new'
  },
  assignedTo: {
    type: String
  },
  notes: [{
    text: String,
    addedBy: String,
    addedAt: { type: Date, default: Date.now }
  }]
}, {
  timestamps: true
});

export default mongoose.model('Inquiry', inquirySchema);
