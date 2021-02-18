class CommentsController {
  // List all comments
  index(req, res) {
    return res.json(comments);
  }

  // create new comment
  create(req, res) {
    const { name, site } = req.body;
    const id = comments[comments.length - 1].id + 1;

    const newComment = { id, name, site };
    comments.push(newComment);

    return res.status(201).json(newComment);
  }
}

export default new CommentsController();
