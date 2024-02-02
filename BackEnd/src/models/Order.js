module.exports = (sequelize, DataTypes) => {
    let Order = sequelize.define('Order', {
        id: {
            type: DataTypes.INT,
            allowNull: false,
            primary_Key: true,
            auto_Increment: true
        },
        name: DataTypes.STR,
        phoneNo: DataTypes.STR,
        email: DataTypes.STR,
        address: DataTypes.STR,
        status: DataTypes.STR,
        variant: DataTypes.STR,
        checkoutSessionId:{
            type: DataTypes.STR,
        },
        productCost: DataTypes.INT,
        currency: DataTypes.INT,
        deliveryCost: DataTypes.INT
    })
    return Order
}