const { Sequelize, DataTypes } = require("sequelize");
const env = process.env.NODE_ENV || "development"; // 지정된 환경변수가 없으면 'development'로 지정

const config = require("../config/config.json")[env];

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.chats = require("./Chat.js")(sequelize, DataTypes);
db.users = require("./User.js")(sequelize, DataTypes);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결됨.");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = db;
