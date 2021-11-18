// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection.js');
// Initialize Product model (table) by extending off Sequelize's Model class
class Category extends Model { }
// set up fields and rules for Product model
Category.init(
  {
    // define columns

    //define id
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    //define category_name
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
