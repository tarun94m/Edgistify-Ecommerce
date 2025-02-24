import express from "express";
import {
  registerController,
  loginController,
  testController,
  getOrdersController,
} from "../controllers/authController.js";
import { requireSignIn } from "../middleware/authMiddleware.js";

//route object
const router = express.Router();

//routing
//register
router.post("/register", registerController);

//login
router.post("/login", loginController);

//test
router.get("/test", requireSignIn, testController);

//protected route-auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({
    ok: true,
  });
});

//orders
router.get("/orders", requireSignIn, getOrdersController);

export default router;
