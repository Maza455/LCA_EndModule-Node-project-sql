module.exports = (sequelize, DataTypes) => {
    let company = sequelize.define('company', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primary_Key: true,
            auto_Increment: true
        },
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        phoneNo: DataTypes.STRING,
        icon: DataTypes.STRING,
        logo: DataTypes.STRING,
        code: DataTypes.STRING,
        header: DataTypes.STRING,
        motive: DataTypes.STRING,
        details: DataTypes.STRING,
        location: DataTypes.STRING
    })
    return company
}