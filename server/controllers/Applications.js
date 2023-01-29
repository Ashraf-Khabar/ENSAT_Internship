import Applications from "../models/ApplicationModel.js";
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
