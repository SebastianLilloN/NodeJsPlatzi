const express = require("express");
const response = require("../../../network/response");
const Controller = require("./index");
const secure = require("./secure");

const router = express.Router();
router.get("/", list);
router.post("/follow/:id", secure("follow"), follow);
router.get("/:id/following", following);
router.get("/:id", get);
router.post("/", upsert);
router.put("/", secure("update"), upsert);

function list(req, res, next) {
  Controller.list()
    .then((lista) => {
      response.succes(req, res, lista, 200);
    })
    .catch(next);
}
function get(req, res, next) {
  Controller.get(req.params.id)
    .then((user) => {
      response.succes(req, res, user, 200);
    })
    .catch(next);
}

function upsert(req, res, next) {
  Controller.upsert(req.body)
    .then((user) => {
      response.succes(req, res, user, 201);
    })
    .catch(next);
}

function follow(req, res, next) {
  Controller.follow(req.user.id, req.params.id)
    .then((data) => {
      response.succes(req, res, data, 201);
    })
    .catch(next);
}

async function following(req, res, next) {
  return await Controller.following(req.params.id)
    .then((data) => {
      return response.succes(req, res, data, 200);
    })
    .catch(next);
}

module.exports = router;
