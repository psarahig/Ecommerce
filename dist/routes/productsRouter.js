"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send('All users');
});
router.post('/', (req, res) => {
    res.send('Create a user');
});
exports.default = router;
//# sourceMappingURL=productsRouter.js.map