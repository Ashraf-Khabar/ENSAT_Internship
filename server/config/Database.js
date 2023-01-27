import { Sequelize } from "sequelize";

const db = new Sequelize('crud_project', 'root', '123456789', {
    host: "localhost",
    dialect: "mysql"
});

export default db;