const express = require("express")
const userRoutes = require("./routes/users.server.routes.js");
const modelRoutes = require("./routes/models.server.routes.js");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello, world!");
});

router.use("/users", userRoutes);
router.use("/models", modelRoutes);

module.exports = router;