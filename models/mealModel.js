const {DataTypes} = require("sequelize")
const db = require("../db")

const Macro = db.define("macro", {
    foodName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    protein: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    carbs: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    fats: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    kCal: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    owner: {
        type: DataTypes.INTEGER
    },
    mealCat: {
        type: DataTypes.INTEGER(4),
        allowNull: false
    }
})

module.exports = Macro;