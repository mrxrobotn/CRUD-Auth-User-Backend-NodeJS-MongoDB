import { addUser, getUsers, updateUser, deleteUser, getUserById, getUserByEmail, signup, login, getLoggedUser } from "../controllers/user.js";
import express from "express";
import verifyToken from "../middleware/auth.js";

const router = express.Router();

router.route("/")
  .post(addUser)
  .get(getUsers);

router.route("/:email")
  .get(getUserByEmail) 

router.route("/:_id")
  .get(getUserById)
  .delete(deleteUser)
  .put(updateUser);
  
// User registration
router.route("/register").post(signup);

// User login
router.route("/login").post(login);

// LoggedIn User
router.route("/profile/me").get(verifyToken, getLoggedUser);

export default router;