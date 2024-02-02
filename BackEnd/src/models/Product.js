module.exports = (sequelize, DataTypes) => {
    let Product = sequelize.define('Product', {
        id: {
            type: DataTypes.INT,
            allowNull: false,
            primary_Key: true,
            auto_Increment: true
        },
        code: DataTypes.STR,
        title: DataTypes.STR,
        subtitle: DataTypes.STR,
        description: DataTypes.TEXT,
        amount: DataTypes.INT,
        rating: DataTypes.FLOAT,
        peopleRated: DataTypes.INT,
        currency: DataTypes.STR,
        sales: DataTypes.INT,
        image1: DataTypes.STR,
        image2: DataTypes.STR,
        image3: DataTypes.STR,
        image4: DataTypes.STR,
        image5: DataTypes.STR,
        image6: DataTypes.STR,
        image7: DataTypes.STR,
        image8: DataTypes.STR,
        image9: DataTypes.STR,
        image10: DataTypes.STR
    })
    Product.associate = (models) => {
        Product.belongsTo(models.Category)
        Product.belongsTo(models.SubCategory)
        Product.belongsTo(models.SubSubCategory)
    }
    return Product
}