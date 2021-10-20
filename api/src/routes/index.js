const router = require("express").Router();

// Import routes
const authRouter = require("./auth");
const walletRouter = require("./wallet");
const userRouter = require("./user");
const { DEPLOY } = require("../../config");
// Auth Routes
router.use(`${DEPLOY != "aws" ? "/dev" : ""}/api/auth`, authRouter);
console.log(`${DEPLOY != "aws" ? "/dev" : ""}/api/auth`)
// User routes
router.use(`${DEPLOY != "aws" ? "/dev" : ""}/api/user`, userRouter);

// wallet routes
router.use(`${DEPLOY != "aws" ? "/dev" : ""}/api/wallet`, walletRouter);

module.exports = router;
