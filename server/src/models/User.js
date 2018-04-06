module.exports = (sequelize, DataTypes) =>
  sequelize.defint('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    }
  })