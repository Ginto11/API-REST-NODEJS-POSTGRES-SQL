import { Router } from "express";
import { getUsers, getUserById, createUser, deleteUser, updateUser } from "../controllers/controller.js";

const userRouter = Router();

//METODO HTTP GET
userRouter.get("/usuarios", getUsers);

//METODO HTPP GET
userRouter.get("/usuario/:id", getUserById);

//METODO HTTP POST
userRouter.post("/usuario", createUser);

//METODO HTTP DELETE
userRouter.delete("/usuario/:id", deleteUser);

//METODO HTTP PUT 
userRouter.put("/usuario/:id", updateUser);

export default userRouter;