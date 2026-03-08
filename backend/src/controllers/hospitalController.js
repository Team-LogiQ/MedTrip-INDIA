import Hospital from '../models/Hospital.js';

// Get all hospitals
export const getAllHospitals = async (req, res) => {
  try {
    const { specialty, location, search } = req.query;
    
    let query = { isActive: true };
    
    if (specialty) {
      query.specialties = specialty;
    }
    
    if (location) {
      query['location.city'] = new RegExp(location, 'i');
    }
    
    if (search) {
      query.$or = [
        { name: new RegExp(search, 'i') },
        { description: new RegExp(search, 'i') }
      ];
    }
    
    const hospitals = await Hospital.find(query)
      .populate('doctors', 'name specialty rating')
      .sort({ rating: -1 });
    
    res.json({
      success: true,
      count: hospitals.length,
      data: hospitals
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching hospitals',
      error: error.message
    });
  }
};

// Get single hospital by ID or slug
export const getHospitalById = async (req, res) => {
  try {
    const hospital = await Hospital.findOne({
      $or: [{ _id: req.params.id }, { slug: req.params.id }],
      isActive: true
    }).populate('doctors');
    
    if (!hospital) {
      return res.status(404).json({
        success: false,
        message: 'Hospital not found'
      });
    }
    
    res.json({
      success: true,
      data: hospital
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching hospital',
      error: error.message
    });
  }
};

// Create new hospital (Admin only)
export const createHospital = async (req, res) => {
  try {
    const hospital = await Hospital.create(req.body);
    
    res.status(201).json({
      success: true,
      data: hospital
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error creating hospital',
      error: error.message
    });
  }
};

// Update hospital (Admin only)
export const updateHospital = async (req, res) => {
  try {
    const hospital = await Hospital.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!hospital) {
      return res.status(404).json({
        success: false,
        message: 'Hospital not found'
      });
    }
    
    res.json({
      success: true,
      data: hospital
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error updating hospital',
      error: error.message
    });
  }
};

// Delete hospital (Admin only)
export const deleteHospital = async (req, res) => {
  try {
    const hospital = await Hospital.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );
    
    if (!hospital) {
      return res.status(404).json({
        success: false,
        message: 'Hospital not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Hospital deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting hospital',
      error: error.message
    });
  }
};
