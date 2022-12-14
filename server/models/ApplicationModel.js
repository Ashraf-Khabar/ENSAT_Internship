import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Applications = db.define('Applications',{
    CV:{
        type: DataTypes.STRING
    },
    cover_letter:{
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

export default Applications;