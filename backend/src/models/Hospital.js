import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema({
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
  logo: {
    type: String,
    required: true
  },
  location: {
    city: String,
    state: String,
    country: { type: String, default: 'India' },
    address: String,
    coordinates: {
      lat: Number,
      lng: Number
    }
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  reviews: {
    type: Number,
    default: 0
  },
  accreditation: [{
    type: String,
    enum: ['JCI', 'NABH', 'ISO']
  }],
  specialties: [{
    type: String
  }],
  established: {
    type: Number
  },
  beds: {
    type: Number
  },
  description: {
    type: String,
    required: true
  },
  costSavings: {
    type: String
  },
  images: [{
    type: String
  }],
  contact: {
    phone: String,
    email: String,
    website: String
  },
  facilities: [{
    type: String
  }],
  doctors: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor'
  }],
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

export default mongoose.model('Hospital', hospitalSchema);
