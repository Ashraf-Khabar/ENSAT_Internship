import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Demandes from "./DemandeModel.js";
import Offres from "./OffreModel.js";

const { DataTypes } = Sequelize;

const Etudiants = db.define('Etudiants',{
    nom:{
        type: DataTypes.STRING
    },
    prenom:{
        type: DataTypes.STRING
    },
    CIN:{
        type: DataTypes.STRING
    },
    adresse:{
        type: DataTypes.TEXT
    },
    filliere:{
        type: DataTypes.STRING
    },
    code_apogee:{
        type: DataTypes.STRING
    },
    phone:{
        type: DataTypes.STRING
    },
    
},
{ 
    timestamps: false 
},
{
    freezeTableName:true
});





(async () => {
    await db.sync();
})();

export default Etudiants;