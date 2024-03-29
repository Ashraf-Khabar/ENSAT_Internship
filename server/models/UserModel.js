import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Employers from "./EmployerModel.js";
import Students from "./StudentModel.js";

const { DataTypes } = Sequelize;

const Users = db.define('Users',{
    name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING,
        unique: true
    },
    password:{
        type: DataTypes.STRING
    },
    refresh_token:{
        type: DataTypes.TEXT
    },
    role:{
        type: DataTypes.STRING
    },
    emailConfirmed:{
        type: DataTypes.BOOLEAN,
        default : false
    },
    image:{
        type: Sequelize.BLOB
    }
},
{
    freezeTableName:true
});

Users.hasOne(Students, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Users.hasOne(Employers, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

(async () => {
    await db.sync();
})();

export default Users;