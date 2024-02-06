module.exports = ( sequelize, DataTypes ) => {
    let SubCategory = sequelize.define('SunCategory', {
        id: {
            type: this.DataTypes.INT,
            allowNull: false,
            primary_Key: true,
            auto_Increment: true
        },
        name: DataTypes.STR,
    })
    SubCategory.associate = (models) => {
        SubCategory.belongsTo(models.Category)
    }
    return SubCategory
}