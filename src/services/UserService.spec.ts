import { UserService } from "./UserService"

describe("UserService" , ()=>{
    const userService = new UserService();

    it('Should add a new user', ()=>{
        const mockConsole= jest.spyOn(global.console , "log")
        userService.createUser("gabriel", "gdlm!gmail.com")

        expect(mockConsole).toHaveBeenCalled();


    })
})