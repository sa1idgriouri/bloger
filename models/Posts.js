/* eslint-disable prettier/prettier */
module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts", {

        title: {
            type: DataTypes.STRING,
            allowNull: false
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },

        image: {
            type: DataTypes.STRING,
        },

        slug: {
            type: DataTypes.STRING,
            allowNull: false
        },



    })

    Posts.associate = (models) => {

        Posts.belongsTo(models.Categories, { foreignKey: 'CategoryId' });

        Posts.hasMany(models.Comments, {
            onDelete: "cascade"
        })


    }



    return Posts
}