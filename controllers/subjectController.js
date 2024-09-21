const Subject = require('../models/subject');

const createSubject = async (req, res) => {
    const { name, passMark } = req.body;
    try {
        const subject = await Subject.create({
            name,
            passMark
        });
        res.status(201).json(subject);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

const getSubjects = async (req, res) => {
    try {
        const subjects = await Subject.find();
        res.json(subjects);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

 const assignSubjectToStudent = async (req, res) => {
    const { studentId, subjectId } = req.body;
    try {
const student = await Student.findById(studentId);
const subject = await Subject.findById(subjectId);
if (!student || !subject) {
    return res.status(404).json({ message: 'Student or Subject not found' });
}
student.subjects = student.subjects || [];
student.subjects.push({subjectId : subject._id, obtainedMark: 0});
await student.save();

res.json('Subject assigned to student successfully ',student);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

const setStudentMark = async (req, res) => {
    const { studentId, subjectId, obtainedMark } = req.body;
    try {
        const student = await Student.findById(studentId);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        const subject = student.subjects.find(sub => sub.subjectId == subjectId);
        if (!subject) {
            return res.status(404).json({ message: 'Subject not assigned to student' });
        }
        subject.obtainedMark = obtainedMark;
        await student.save();
        res.json('Student mark updated successfully');
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = { createSubject, getSubjects, assignSubjectToStudent, setStudentMark };    
