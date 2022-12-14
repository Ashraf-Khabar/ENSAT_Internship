import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Employers from "./EmployerModel.js";
import Students from "./StudentModel.js";

const { DataTypes } = Sequelize;

const Offers = db.define('Offers',{
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


Offers.belongsToMany(Students, { through: 'Applications' },{
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});



(async () => {
    await db.sync();
})();

export default Offers;