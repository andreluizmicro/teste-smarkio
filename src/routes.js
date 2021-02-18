import { Router } from "express";

import comments from "./app/controllers/CommentsController";

const routes = new Router();

app.get('/comments', function(req, res) {
  res.render('form');
});

routes.post("/comments", comments.create);

export default routes;
