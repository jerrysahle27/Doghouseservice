const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();
router.get("/ping", (req, res) => res.send("Dogshouseservice.Version1.0.1"));
router.post("/dog", controllers.createDog);
router.get("/dogs", controllers.getAllDogs);
module.exports = router;
