import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import offers from "./offerModel.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const Employers = db.define('Employees',{
    denomination:{
        type: DataTypes.STRING
    },
    legal_status:{
        type: DataTypes.ENUM('SA','SAS','SARL','GIE','SNC','SCS','SCA')
    },
    industry:{
        type: DataTypes.STRING
    },
    city:{
        type: DataTypes.STRING
    },
    RC:{
        type: DataTypes.STRING
    },
    ICE:{
        type: DataTypes.STRING
    },
    nbr_employees:{
        type: DataTypes.ENUM('1-10','11-50','51-100','101-250','251-499','500+','unknown')
    },
    name:{
        type: DataTypes.STRING
    },
    phone:{
        type: DataTypes.STRING
    },
    laureate:{
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

Employers.hasMany(offers,{
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });

(async () => {
    await db.sync();
})();

export default Employers;