
const express = require('express');
const { createSubject, assignSubjectToStudent, setStudentMark, getSubjects } = require('../controllers/subjectController');
const { protect } = require('../middlewares/authMiddleware');  

const router = express.Router();


router.post('/create', protect, createSubject);


router.post('/assign', protect, assignSubjectToStudent);


router.put('/set-mark', protect, setStudentMark);


router.get('/', protect, getSubjects);

module.exports = router;  
