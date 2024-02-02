module.exports = (sequelize, DataTypes) => {
    let OrderItem = sequelize.define('OrderItem', {
        id: {
            type: DataTypes.INT,
            allowNull: false,
            primary_Key: true,
            auto_Increment: true
        },
        quantity: DataTypes.INT
    })
    OrderItem.associate = (models) => {
        OrderItem.belongsTo(models.Product)
        OrderItem.belongsTo(models.Order)
    }
    return OrderItem
}