import express from "express";
import { requireSignIn } from "../middleware/authMiddleware.js";
import formidable from "express-formidable";
import {
  createProductController,
  getProductController,
  getSingleProductController,
  productPhotoController,
  braintreeTokenController,
  brainTreePaymentController,
} from "../controllers/productController.js";
import braintree from "braintree";

const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  formidable(),
  createProductController
);

// GET all products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:name", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//payment routes
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;
