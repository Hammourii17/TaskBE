const mongoose = require('mongoose');



const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    passMark: { type: Number, default: 50 },  // Default passing mark
    obtainedMark: { type: Number, default: 0 },
    subjects: [
        {
          subjectId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Subject',
            required: true,
          },
          obtainedMark: { type: Number, default: 0 },
        },
      ],    
  });


const Student = mongoose.model('Student', studentSchema);

module.exports = Student;