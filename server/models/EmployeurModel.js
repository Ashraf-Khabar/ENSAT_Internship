import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Offres from "./OffreModel.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const Employeurs = db.define('Employeurs',{
    denomination:{
        type: DataTypes.STRING
    },
    forme_juridique:{
        type: DataTypes.ENUM('SA','SAS','SARL','GIE','SNC','SCS','SCA')
    },
    secteur_activite:{
        type: DataTypes.STRING
    },
    ville:{
        type: DataTypes.STRING
    },
    RC:{
        type: DataTypes.STRING
    },
    ICE:{
        type: DataTypes.STRING
    },
    nombre_employes:{
        type: DataTypes.ENUM('1-10','11-50','51-100','101-250','251-499','500+','unknown')
    },
    prenom:{
        type: DataTypes.STRING
    },
    nom:{
        type: DataTypes.STRING
    },
    
    phone:{
        type: DataTypes.STRING
    },
    laureat:{
        type: DataTypes.BOOLEAN
    },

    UserId:{
        type: DataTypes.INTEGER
    }



},
{ 
    timestamps: false 
},
{
    freezeTableName:true
});

Employeurs.hasMany(Offres,{
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });

(async () => {
    await db.sync();
})();

export default Employeurs;