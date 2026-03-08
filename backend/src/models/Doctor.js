import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
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
  specialty: {
    type: String,
    required: true
  },
  qualification: {
    type: String,
    required: true
  },
  experience: {
    type: Number,
    required: true
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
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hospital',
    required: true
  },
  location: {
    city: String,
    state: String
  },
  hasClinic: {
    type: Boolean,
    default: false
  },
  clinicName: {
    type: String
  },
  languages: [{
    type: String
  }],
  expertise: [{
    type: String
  }],
  education: [{
    type: String
  }],
  awards: [{
    type: String
  }],
  consultationFee: {
    type: String
  },
  image: {
    type: String
  },
  about: {
    type: String,
    required: true
  },
  availability: {
    days: [{
      type: String,
      enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    }],
    timeSlots: [{
      start: String,
      end: String
    }]
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

export default mongoose.model('Doctor', doctorSchema);
