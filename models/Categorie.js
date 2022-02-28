/* eslint-disable prettier/prettier */
module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define("Categories", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false
    },

    description: {
      type: DataTypes.STRING,
    }
  })

  Categories.associate = (models) => {
    Categories.hasMany(models.Posts, {
      onDelete: "cascade"
    })
  }

  return Categories
}