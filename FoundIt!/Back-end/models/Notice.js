import mongoose from 'mongoose';

export const noticeSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: false, trim: true },
  category: { type: String, enum: ['Lost', 'Found'], required: true },
  location: { type: String, required: true, trim: true },
  contact: { type: String, required: true, trim: true },
  imageUrl: { type: String }, // optional
  date: { type: Date, default: Date.now }
}, {
  timestamps: true
});

export default mongoose.model('Notice', noticeSchema);
