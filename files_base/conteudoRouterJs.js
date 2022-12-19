export const conteudoRouterJs = `
const express = require('"express"');
const router = express.Router();
router.use('"/api/"', require('"../controllers/apiController"'));

module.exports = router;

`