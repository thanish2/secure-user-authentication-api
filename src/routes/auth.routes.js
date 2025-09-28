import { Router } from "express";
import {
    changeCurrentPassword,
  forgotPasswordRequest,
  getCurrentUser,
  login,
  resendEmailVerification,
  resetForgotPassword,
  resfreshAccessToken,
  verifyEmail,
} from "../controllers/auth.controllers.js";
import { registerUser } from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/validator.middleware.js";
import {
    userChangeCurrentPasswordValidator,
  userForgotPasswordValidator,
  userRegisterValidator,
  userResetForgotPasswordValidator,
} from "../validators/index.js";
import { userLoginValidator } from "../validators/index.js";
import { logoutUser } from "../controllers/auth.controllers.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

//unsecured route
router.route("/register").post(userRegisterValidator(), validate, registerUser);
router.route("/login").post(userLoginValidator(), validate, login);
router.route("/verify-email/:verificationToken").get(verifyEmail);
router.route("/refresh-token").post(resfreshAccessToken);
router.route("/forgot-password").post(userForgotPasswordValidator(),validate,forgotPasswordRequest);
router.route("/reset-password/:resetToken").post(userResetForgotPasswordValidator(),validate,resetForgotPassword);


//secure routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/current-user").get(verifyJWT, getCurrentUser);
router.route("/change-password").post(verifyJWT, userChangeCurrentPasswordValidator(),validate,changeCurrentPassword);

router.route("/resend-email-verification").post(verifyJWT, resendEmailVerification);


export default router;
