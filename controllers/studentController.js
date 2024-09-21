const Student = require('../models/student');

const getStudents = async (req, res) => {
    try {
      const students = await Student.find();
      res.json(students);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };

const addStudent = async (req, res) => {
    const {username , email , obtainedMark} = req.body; 
    try 
    {
        const student = await Student.create({
            username,
            email,
            obtainedMark
        });
        res.status(201).json(student);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

const updateStudent = async (req, res) => {
const {id} = req.params;
        const {username , email , obtainedMark} = req.body;

        try {
            const student = await Student.findByIdAndUpdate(id, {username, email, obtainedMark}, {new: true});
            res.json(student);

        } catch (error) {
            res.status(500).json({ message: 'Server error' });
        }
}
const deleteStudent = async (req, res) => {
    const {id} = req.params;

    try {
        await Student.findByIdAndDelete(id);
        res.json({message: 'Student deleted'});
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = { getStudents, addStudent, updateStudent, deleteStudent };