module.exports = ( sequelize, DataTypes ) => {
    let SubSubCategory = sequelize.define('SubSubCategory', {
        id: {
            type: DataTypes.INT,
            allowNull: false,
            primary_Key: true,
            auto_Increment: true
        },
        name: DataTypes.STR,
    })
    SubSubCategory.associate = (models) => {
        SubSubCategory.belongsTo(models.SubCategory)
    }
    return SubSubCategory
}