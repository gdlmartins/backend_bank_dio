import { Request, Response} from "express"
import { UserService} from "../services/UserService"

interface Iuser  {
   name: string; 
   email: string    
}
export class UserController {

    createUser =(request :Request, response: Response)=>{
        const serviceUser = new UserService()
        const user :Iuser  = request.body
        serviceUser.createUser(user.email , user.name)

        if(!user.name || !user.email){
            return response.status(400).json({message : "bad request! Nome é obrigatorio"})
        }
      
        return response.status(201).json({message : "created user"})
    }
    getAllUsers = (request : Request, response: Response) =>{
        const userService = new UserService();
        const users = userService.getAllUsers()
        return response.status(200).json(users)   }
}