import Inquiry from '../models/Inquiry.js';

// Create new inquiry
export const createInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.create(req.body);
    
    // TODO: Send email notification to admin
    // TODO: Send confirmation email to user
    
    res.status(201).json({
      success: true,
      message: 'Inquiry submitted successfully. We will contact you soon!',
      data: inquiry
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error submitting inquiry',
      error: error.message
    });
  }
};

// Get all inquiries (Admin only)
export const getAllInquiries = async (req, res) => {
  try {
    const { status } = req.query;
    
    let query = {};
    if (status) {
      query.status = status;
    }
    
    const inquiries = await Inquiry.find(query).sort({ createdAt: -1 });
    
    res.json({
      success: true,
      count: inquiries.length,
      data: inquiries
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching inquiries',
      error: error.message
    });
  }
};

// Update inquiry status (Admin only)
export const updateInquiryStatus = async (req, res) => {
  try {
    const { status, notes } = req.body;
    
    const inquiry = await Inquiry.findByIdAndUpdate(
      req.params.id,
      { 
        status,
        $push: notes ? { notes } : {}
      },
      { new: true }
    );
    
    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: 'Inquiry not found'
      });
    }
    
    res.json({
      success: true,
      data: inquiry
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error updating inquiry',
      error: error.message
    });
  }
};
