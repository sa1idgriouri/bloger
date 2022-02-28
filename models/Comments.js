/* eslint-disable prettier/prettier */
module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define("Comments", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        commintText: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Comments

}