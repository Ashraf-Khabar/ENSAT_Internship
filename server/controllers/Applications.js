import Applications from "../models/ApplicationModel.js";
import Employers from "../models/EmployerModel.js";
import Offers from "../models/offerModel.js";
import Students from "../models/StudentModel.js";

/* Post API : Create offer */
// export const createOffer = async (req, res) => {
//   const newOffer = new offers(req.body);

//   try {
//     const savedOffer = await newOffer.save();
//     res.status(200).json({msg:"Offer created"});
//   } catch (err) {
//     next(err);
//   }
// };

export const AddApplication = async(req, res) => {
  const { CV,
    cover_letter,rang } = req.body;
 

  try {
      // const employer = await Students.findOne({where: { userId: req.body.id }} );
 
      await Applications.create({
       CV:CV,
       cover_letter: cover_letter,
       rang:rang
      });
      res.json({msg: "Your application has been sent successfully"});
  } catch (error) {
      console.log(CV,cover_letter,rang);
  }
};

export const getApplications = async (req, res) => {
  try {
    const student = await Students.findOne({where: { UserId: req.query.id }} );

    const applications = await Applications.findAll({  include: [ Offers , { model : Offers , include: [Employers] }] , where: { StudentId: student.id } });
    res.status(200).json(applications);
  } catch (err) {
    console.log(err);
  }
}
