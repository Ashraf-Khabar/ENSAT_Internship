import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Applications from "./ApplicationModel.js";
import offers from "./offerModel.js";

const { DataTypes } = Sequelize;

const Students = db.define('Students',{
    name:{
        type: DataTypes.STRING
    },
    CIN:{
        type: DataTypes.STRING,
        unique: true
    },
    address:{
        type: DataTypes.TEXT
    },
    branch:{
        type: DataTypes.STRING
    },
    code_apogee:{
        type: DataTypes.STRING,
        unique: true
    },
    phone:{
        type: DataTypes.STRING,
        unique: true
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

export default Students;