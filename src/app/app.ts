import express, {Application, RequestHandler, Router} from 'express';
import cors from 'cors';
import compression from 'compression';
import expressSanitizer from 'express-sanitizer';
import helmet from 'helmet';

export interface AppConfig{
    port:number
}
export class App{
    private readonly expressApp: Application;
   
    private readonly expressRouter : Router;

    private readonly port: number;

    constructor(config:AppConfig){
      
      this.port = config.port;
      this.expressApp = express();
      this.expressApp.use(cors());
      this.expressRouter = express.Router();
      this.expressApp.use(this.expressRouter);  
   }
private bootstrapCommonMiddileware():void{
    this.expressApp.use(helmet());
    this.expressApp.use(compression());
    this.expressApp.use(expressSanitizer())

}
public async bootstrap(): Promise<void> {
    this.bootstrapCommonMiddileware();
 }
 
public mount(path:string,...handlers:RequestHandler[]): void {
    this.expressRouter.use(
      // '/api',// can define api base url
        express.json(),
        ...handlers, // handlers
    )
 }
 
 public listen():void{

    this.expressApp.listen(this.port, ()=>{
        console.log(`Applications is running on port ${this.port}`);
    })

 }
}