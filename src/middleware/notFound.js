const notFound = (req, res) => {
  res.status(404).send({
    message: "route does not exist",
  });
};

module.exports = notFound;
