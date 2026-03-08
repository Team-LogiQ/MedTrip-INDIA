import Doctor from '../models/Doctor.js';

// Get all doctors
export const getAllDoctors = async (req, res) => {
  try {
    const { specialty, hospital, search } = req.query;
    
    let query = { isActive: true };
    
    if (specialty) {
      query.specialty = specialty;
    }
    
    if (hospital) {
      query.hospital = hospital;
    }
    
    if (search) {
      query.$or = [
        { name: new RegExp(search, 'i') },
        { specialty: new RegExp(search, 'i') },
        { about: new RegExp(search, 'i') }
      ];
    }
    
    const doctors = await Doctor.find(query)
      .populate('hospital', 'name location logo')
      .sort({ rating: -1 });
    
    res.json({
      success: true,
      count: doctors.length,
      data: doctors
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching doctors',
      error: error.message
    });
  }
};

// Get single doctor
export const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findOne({
      $or: [{ _id: req.params.id }, { slug: req.params.id }],
      isActive: true
    }).populate('hospital');
    
    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: 'Doctor not found'
      });
    }
    
    res.json({
      success: true,
      data: doctor
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching doctor',
      error: error.message
    });
  }
};

// Create new doctor (Admin only)
export const createDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body);
    
    res.status(201).json({
      success: true,
      data: doctor
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error creating doctor',
      error: error.message
    });
  }
};

// Update doctor (Admin only)
export const updateDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: 'Doctor not found'
      });
    }
    
    res.json({
      success: true,
      data: doctor
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error updating doctor',
      error: error.message
    });
  }
};

// Delete doctor (Admin only)
export const deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );
    
    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: 'Doctor not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Doctor deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting doctor',
      error: error.message
    });
  }
};
