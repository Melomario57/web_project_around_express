const Card = require("../models/card");

module.exports.getCards = (req, res) => {
  Card.find({})
    .populate("owner")
    .then((cards) => {
      if (!cards) {
        const error = new Error("Internal server error");
        error.status = 500;
        throw error;
      }
      res.send({ data: cards });
    })
    .catch((err) => {
      console.log("getCards Error:", err);
      res.status(err.status).send({ error: err.message });
    });
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  const owner = req.user._id;
  Card.create({ name, link, owner })
    .then((card) => {
      res.send(card);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send({ message: "Invalid data" });
    });
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndDelete(req.params.cardId)
    .orFail(() => {
      const error = new Error("Invalid request");
      res.status(400);
      throw error;
    })
    .then((card) => res.status(200).send({ data: card }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true }
  )
    .orFail(() => {
      const error = new Error("Cannot find card");
      error.status = 404;
      throw error;
    })
    .then((card) => {
      res.send({ message: "Like added", card });
    })
    .catch((err) => {
      console.log("likeCard Error:", err);
      res.status(err.status).send({ error: err.message });
    });
};

module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true }
  )
    .orFail(() => {
      const error = new Error("Cannot find card");
      error.status = 404;
      throw error;
    })
    .then((card) => {
      res.send({ message: "Like removed", card });
    })
    .catch((err) => {
      console.log("likeCard Error:", err);
      res.status(err.status).send({ error: err.message });
    });
};
