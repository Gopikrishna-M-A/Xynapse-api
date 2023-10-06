import mongoose from "mongoose";

const InternSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  mobilenum: String,
  address: String,
  resumeUrl: String,
  linkedinUrl: String,
  collegeName: String,
  majorName: String,
  gpa: String,
  gradDate: String,
  skills: String,
  interestArea: String,
  projectDetails: String,
  internDuration: String,
  hearSource: String,
});

const Intern = mongoose.model("Intern", InternSchema);

export default Intern;
