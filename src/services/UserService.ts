import { dbUsers } from ".."

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
}