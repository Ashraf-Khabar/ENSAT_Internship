import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Demandes = db.define('Demandes',{
    CV:{
        type: DataTypes.STRING
    },
    lettre_motivation:{
        type: DataTypes.STRING
    },
    rang:{
        type: DataTypes.INTEGER
    },

    
},

{
    freezeTableName:true
});


(async () => {
    await db.sync();
})();

export default Demandes;