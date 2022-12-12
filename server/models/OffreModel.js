import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Etudiants from "./EtudiantModel.js";

const { DataTypes } = Sequelize;

const Offres = db.define('Offres',{
    titre:{
        type: DataTypes.STRING
    },
    domaine:{
        type: DataTypes.STRING
    },
    type:{
        type: DataTypes.STRING
    },
    remunere:{
        type: DataTypes.BOOLEAN
    },
    description:{
        type: DataTypes.TEXT
    },
    nbr_candidat:{
        type: DataTypes.INTEGER
    },
    date_debut:{
        type: DataTypes.DATE
    },
    date_fin:{
        type: DataTypes.DATE
    },
    etat:{
        type: DataTypes.BOOLEAN
    },
},
{
    timestamps:false
},
{
    freezeTableName:true
});


Offres.belongsToMany(Etudiants, { through: 'Demandes' },{
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });


(async () => {
    await db.sync();
})();

export default Offres;