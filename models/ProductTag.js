// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class ProductTag extends Model { }

// set up fields and rules for Product model
ProductTag.init(
  {
    // define columns

    //define id
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    //define product_id
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        //table that it will reference (same name as the model when that table is initialized)
        model: 'product',
        //the column that it is referencing
        key: 'id',
      }
    },
    //define tag_id
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        //table that it will reference (same name as the model when that table is initialized)
        model: 'tag',
        //the column that it is referencing
        key: 'id',
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
