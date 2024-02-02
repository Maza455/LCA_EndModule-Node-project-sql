module.exports = (sequelize, DataTypes) => {
    let User = sequelize.define('User', {
        id: {
            type: DataTypes.INT,
            allowNull: false,
            primary_Key: true,
            auto_Increment: true
        },
        userName: {
            type: DataTypes.STR,
            unique: true
        },
        firstName: DataTypes.STR,
        lastName: DataTypes.STR,
        profileImg: DataTypes.STR,
        registerToken: DataTypes,
        email: {
            type: DataTypes.STR,
            unique: true
        },
        phoneNo: DataTypes.STR,
        password: DataTypes.STR,
        resetPasswordToken: DataTypes.STR,
        userType: DataTypes.STR,
        variant: DataTypes.STR,
        priority: DataTypes.INT
    })
    User.associate = (models) => {
        User.belongsTo(models.Company)
    }
    return User
}