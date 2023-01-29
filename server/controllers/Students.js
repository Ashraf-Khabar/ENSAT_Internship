import Students from "../models/StudentModel.js";


export const getStudent = async (req, res) => {
    try {
      const student= await Students.findOne({ where: { UserId: req.body.id }}
        );
      res.status(200).json(student);
    } catch (err) {
      
      console.log(err +"I CANT INCLUDE");
    }
  }