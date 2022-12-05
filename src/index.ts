import express , {Request , Response} from "express";
import { UserController } from "./controllers/UserController";
import { router } from "./routes";

export const dbUsers = [{
    name:"Jose", 
    email:"jose˜gmail.com"
}]


const server = express();
server.use(express.json())
server.use(router)



server.get("/",(req : Request , res: Response)=>{
 return res.status(200).json({
     message: "DioBank API"
 })
} )



server.listen(3003, ()=> console.log("Server is running"))