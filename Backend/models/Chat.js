module.exports = (sequelize, DataTypes) => {
  const Chat = sequelize.define("Chat", {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    updatedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    userId: DataTypes.STRING(35),
    content: DataTypes.STRING(300),
  });
  return Chat;
};
