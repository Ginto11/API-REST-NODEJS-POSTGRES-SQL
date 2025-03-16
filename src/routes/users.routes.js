import { Router } from "express";
import { getUsers, getUserById, createUser, deleteUser, updateUser } from "../controllers/controller.js";

const userRouter = Router();

//METODO HTTP GET
userRouter.get("/api/usuarios/:page", getUsers);

//METODO HTPP GET
userRouter.get("/api/usuario/:id", getUserById);

//METODO HTTP POST
userRouter.post("/api/usuario", createUser);

//METODO HTTP DELETE
userRouter.delete("/api/usuario/:id", deleteUser);

//METODO HTTP PUT 
userRouter.put("/api/usuario/:id", updateUser);

export default userRouter;