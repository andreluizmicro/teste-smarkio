const db = require("../../config/database");

const Comment = db.sequelize.define("comments", {
    comment: {
      type: db.Sequelize.TEXT,
    },
});

module.exports = Comment;
