import { Sequelize } from "sequelize";

const db = new Sequelize('crud_project', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;