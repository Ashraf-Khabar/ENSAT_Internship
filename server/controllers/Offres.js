import Offres from "../models/OffreModel";



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
      const Offre = await Offres.findById({
        where: {
          id:req.body.id

        }
      });
      res.status(200).json(Offre);
    } catch (err) {
      next(err);
    }
}