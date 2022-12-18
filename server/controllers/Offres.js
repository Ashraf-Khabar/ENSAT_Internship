import Employers from "../models/EmployerModel.js";
import offers from "../models/offerModel.js";
import express from "express";
import cors from "cors";

const app = express()

app.use(cors());
app.use(express.json());

/* Post API : Create offer */
export const createOffer = async (req, res) => {
  const newOffer = new offers(req.body);

  try {
    const savedOffer = await newOffer.save();
    res.status(200).json({msg:"Offer created"});
  } catch (err) {
    next(err);
  }
};

/*Get API : get All offers+employers (select * offers join employers) */
export const getOffers = async (req, res) => {
    try {
      const Offers = await offers.findAll({ include:Employers  });
      res.status(200).json(Offers);
    } catch (err) {
      console.log(err);
    }
}

/*Get offer join employer based on id : */
export const getOffer = async (req, res) => {
    try {
      const Offer= await offers.findOne({ where: { id: req.body.id }, include:Employers  }
        );
      res.status(200).json(Offer);
    } catch (err) {
      
      console.log(err +"I CANT INCLUDE");
    }
}

/*Get API : get offer by id of employee*/
export const getOfferByEmployer = async (req, res) => {
  try {
    const { count, rows } = await offers.findAndCountAll({
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
    await offers.destroy(
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
    const updatedOffer = await offers.update(
      
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