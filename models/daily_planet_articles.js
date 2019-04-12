'use strict';
module.exports = (sequelize, DataTypes) => {
  const daily_planet_articles = sequelize.define('daily_planet_articles', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    author: DataTypes.STRING
  }, {});
  daily_planet_articles.associate = function(models) {
    // associations can be defined here
  };
  return daily_planet_articles;
};