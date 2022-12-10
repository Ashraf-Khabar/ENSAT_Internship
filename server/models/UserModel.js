import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Employeurs from "./EmployeurModel.js";
import Etudiants from "./EtudiantModel.js";

const { DataTypes } = Sequelize;

const Users = db.define('Users',{
    name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
},
{
    freezeTableName:true
});

Users.hasOne(Employeurs);

Users.hasOne(Etudiants,{
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });


(async () => {
    await db.sync();
})();

export default Users;