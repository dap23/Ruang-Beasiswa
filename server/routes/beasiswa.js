const router = require("express").Router();
const Beasiswa = require("../controllers/beasiswa");

router.route("/").get(Beasiswa.getBeasiswas).post(Beasiswa.addBeasiswa);
router.route("/find/:id").get(Beasiswa.getBeasiswa);
router
  .route("/:id")
  .put(Beasiswa.updateBeasiswa)
  .delete(Beasiswa.deleteBeasiswa);

module.exports = router;
