import express, { Express, Request, Response } from "express";



const app: Express = express();
const port = 3000;
const number:string ="hello"

app.get("/", (req:Request, res: Response) => {
    console.log(number);
    
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
