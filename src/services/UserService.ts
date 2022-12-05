import { dbUsers } from ".."
import { Iuser } from "../controllers/UserController"

export class UserService {

    createUser =(email:string, name:string)=>{
        const user = {
            name ,
            email
        }
        dbUsers.push(user)
        console.log(dbUsers)

    }
    getAllUsers = () =>{
        return dbUsers;
    }
    deleteUser =(user: Iuser)=>{
       let dbUsersFilter =  dbUsers.filter(item => item.name  === user.name)
    
    }
}