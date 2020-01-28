import { Sequelize } from "sequelize";
import dbOptions from "../config/db";

const db = new Sequelize({ ...dbOptions, port: 5432 });

export default db;
