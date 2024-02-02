module.exports = (sequelize, DataTypes) => {
    let Category = sequelize.define('Category', {
        id: {
            type: DataTypes, INTEGER,
            allowNull: false,
            primary_Key: true,
            auto_Increment: true
        },
        name: {
            type: DataTypes.STRING,
            unique: true
        }
    })
    return Category
}