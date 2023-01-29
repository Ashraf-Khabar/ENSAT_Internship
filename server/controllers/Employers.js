import Employers from "../models/EmployerModel.js";


export const getEmployer = async (req, res) => {
    try {
      const employer= await Employers.findOne({ where: { UserId: req.body.id }}
        );
      res.status(200).json(employer);
    } catch (err) {
      
      console.log(err +"I CANT INCLUDE");
    }
  }