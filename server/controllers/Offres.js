import Offres from "../models/OffreModel";

// A confirmer le syntax dee create & update
export const createOffre = async (req, res) => {
  const newOffre = new Offres(req.body);

  try {
    const savedOffre = await newOffre.save();
    res.status(200).json({msg:"Offer created"});
  } catch (err) {
    next(err);
  }
};

export const getOffres = async (req, res) => {
    try {
      const Offre = await Offres.findAll({
        where: {
          etat: 1
        }
      });
      res.status(200).json(Offre);
    } catch (err) {
      next(err);
    }
}

export const getOffre = async (req, res) => { 
    try {
      const Offre = await Offres.findByPk({
        where: {
          id:req.body.id

        }
      });
      res.status(200).json(Offre);
    } catch (err) {
      next(err);
    }
}

export const getOffrebyEmployer = async (req, res) => { 
  try {
    const { count, rows } = await Offres.findAndCountAll({
      where: {
        EmployeurId: req.body.id
      }

    });tatus(200).json(count,rows);
  } catch (err) {
    next(err);
  }
}

export const deleteOffre = async (req, res) => {
  try {
    await Offres.destroy(
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

export const updateOffre = async (req, res) => {
  try {
    const updatedOffre = await Offres.update(
      
      { $set: req.body },
     
       {
        where: {
          id: req.params.id
        }
      }
    );
    res.status(200).json(updatedOffre,{msg:"Offer updated"});
  } catch (err) {
    next(err);
  }
};