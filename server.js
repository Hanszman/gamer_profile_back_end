const express = require('express');
const cors = require('cors');
const api = express();
const port = 3000;
const router = express.Router();
// const routes = require('./routes');

api.use(cors());
api.use(express.json());
api.use(express.urlencoded({ extended: true }));
router.get("/", (req, resp)=> resp.json({
    mensagem: 'API Online...'
}));
api.use("/", router);
// api.use("/api", routes);
api.listen(port);
console.log("Run API Express");