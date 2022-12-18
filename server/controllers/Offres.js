import Employers from "../models/EmployerModel.js";
import Offers from "../models/offerModel.js";

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

export const Addoffer = async(req, res) => {
  const { titre, sector,type,paid,description,nbr_of_candidates,date_debut,date_fin,state} = req.body;
  try {
      await Offers.create({
        titre: titre,
        sector: sector,
        type: type,
        paid:paid,
        description:description,
        nbr_of_candidates: nbr_of_candidates,
        date_debut: date_debut,
        date_fin: date_fin,
        state: state
      });
      res.json({msg: "Added Successfully"});
  } catch (error) {
      console.log(error);
  }
}

/*Get API : get All offer (select *) */
export const getOffers = async (req, res) => {
    try {
      const Offers = await Offers.findAll({ include:Employers  });
      res.status(200).json(Offers);
    } catch (err) {
      console.log(err);
    }
}

/*Get offer based on id : */
export const getOffer = async (req, res) => {
    try {
      const Offer= await Offers.findByPk({
        where: {
          id:req.body.id
        }
      });
      res.status(200).json(Offer);
    } catch (err) {
      next(err);
    }
}

/*Get API : get offer by id of employee*/
export const getOfferByEmployer = async (req, res) => {
  try {
    const { count, rows } = await Offers.findAndCountAll({
      where: {
        EmployerId: req.body.id
      }
    });
    res.status(200).json(count,rows);
  } catch (err) {
    next(err);
  }
}

/*API delete : delete offer*/
export const deleteOffer = async (req, res) => {
  try {
    await Offers.destroy(
      {
        where: {
          id: req.params.id
        }
      });
    res.status(200).json("Internship Offer deleted.");
  } catch (err) {
    next(err);
  }
};

/*Update offer */
export const updateOffer = async (req, res) => {
  try {
    const updatedOffer = await Offers.update(
      
      { $set: req.body },
       {
        where: {id: req.params.id}
      }
    );
    res.status(200).json(updatedOffer,{msg:"Offer updated"});
  } catch (err) {
    next(err);
  }
};