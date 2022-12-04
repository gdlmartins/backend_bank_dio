import express , {Request , Response} from "express";


const server = express();

server.use(express.json())


server.get("/",(req : Request , res: Response)=>{
 return res.status(200).json({
     message: "DioBank API"
 })
} )


server.post("/user" ,(req :Request , res :Response)=>{
   const body = req.body;
   console.log(body)
   return res.status(201).json({message: "user created"})

})

server.listen(3003, ()=> console.log("Server is running"))