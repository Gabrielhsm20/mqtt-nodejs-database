module.exports = (sequelize, Sequelize) => {
  const StateHistories = sequelize.define("StateHistories", {
    topic: Sequelize.STRING,
    state: Sequelize.STRING,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  });

  return StateHistories;
};
