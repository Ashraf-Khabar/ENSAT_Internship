import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Students from "./StudentModel.js";

const { DataTypes } = Sequelize;

const offers = db.define('offers',{
    titre:{
        type: DataTypes.STRING
    },
    sector:{
        type: DataTypes.STRING
    },
    type:{
        type: DataTypes.STRING
    },
    paid:{
        type: DataTypes.BOOLEAN
    },
    description:{
        type: DataTypes.TEXT
    },
    nbr_of_candidates:{
        type: DataTypes.INTEGER
    },
    date_debut:{
        type: DataTypes.DATE
    },
    date_fin:{
        type: DataTypes.DATE
    },
    state:{
        type: DataTypes.BOOLEAN
    },
},
{
    timestamps:false
},
{
    freezeTableName:true
});


offers.belongsToMany(Students, { through: 'Demandes' },{
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});


(async () => {
    await db.sync();
})();

export default offers;