import Intern from '../models/intern.js'

export const createIntern = async (req, res) => {
  const internData = req.body;

  try {
    const newIntern = new Intern(internData);
    await newIntern.save();
    res.status(201).json(newIntern);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



export const getAllInterns = async (req, res) => {
  try {
    const interns = await Intern.find();
    res.status(200).json(interns);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export const getInternById = async (req, res) => {
  const { adminId } = req.params;

  try {
    const intern = await Intern.findById(adminId);
    if (!intern) return res.status(404).json({ message: 'Intern not found' });

    res.status(200).json(intern);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const updateIntern = async (req, res) => {
  const { adminId } = req.params;
  const updatedInternData = req.body;

  try {
    const updatedIntern = await Intern.findByIdAndUpdate(adminId, updatedInternData, { new: true });
    if (!updatedIntern) return res.status(404).json({ message: 'Intern not found' });

    res.status(200).json(updatedIntern);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const deleteIntern = async (req, res) => {
  const { adminId } = req.params;

  try {
    const deletedIntern = await Intern.findByIdAndRemove(adminId);
    if (!deletedIntern) return res.status(404).json({ message: 'Intern not found' });

    res.status(200).json({ message: 'Intern deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};