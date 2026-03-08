import express from 'express';
import {
  createInquiry,
  getAllInquiries,
  updateInquiryStatus
} from '../controllers/inquiryController.js';

const router = express.Router();

router.post('/', createInquiry);
router.get('/', getAllInquiries);
router.put('/:id', updateInquiryStatus);

export default router;
