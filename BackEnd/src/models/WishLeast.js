module.exports = (sequelize, DataTypes) => {
    let WishLeast = sequelize.define('WishLeast', {
        id: {
            type: DataTypes.INT,
            allowNull: false,
            primary_Key: true,
            auto_Increment: true
        }
    })
    WishLeast.associate = (models) => {
        WishLeast.belongsTo(models.User)
        WishLeast.belongsTo(models.Product)
    }
    return WishLeast
}