import mongoose from 'mongoose';

const treatmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  costRange: {
    min: Number,
    max: Number,
    currency: { type: String, default: 'USD' }
  },
  savings: {
    type: String
  },
  duration: {
    type: String
  },
  recovery: {
    type: String
  },
  hospitals: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hospital'
  }],
  doctors: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor'
  }],
  successRate: {
    type: Number
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

export default mongoose.model('Treatment', treatmentSchema);
