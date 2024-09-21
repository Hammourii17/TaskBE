
const express = require('express');
const { getStudents, addStudent, updateStudent, deleteStudent } = require('../controllers/studentController');
const { protect } = require('../middlewares/authMiddleware');  

console.log(getStudents);  // Check if 'getStudents' is undefined

const router = express.Router();


router.get('/', protect, getStudents);
router.post('/', protect, addStudent);
router.put('/:id', protect, updateStudent);
router.delete('/:id', protect, deleteStudent);

module.exports = router; 
