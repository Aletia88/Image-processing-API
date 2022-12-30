import express from 'express';
import { resizeImage } from '../utilities/resize';
import path from 'path';
const route = express.Router();

route.get(
  '/images',
  
    
    (
      req: { query: { filename: string; width: number; height: number } },
      res
      ) => {
       
        if (Object.keys(req.query).length > 3) {
          res.send('please enter only filename, width and height query string');
        } else if(req.query.filename == undefined || req.query.width == undefined || req.query.height == undefined){
          res.send('enter int')
        }
        else if(isNaN(req.query.width)){
          res.send('enter only number')
        }
        
        else if (Object.keys(req.query).length != 3) {
          res.send('please enter a filename');
        } else {
          resizeImage(req.query.filename, Number(req.query.width), Number(req.query.height));
          res.sendFile(process.cwd() + `/src/images/thumb/${req.query.filename}-${req.query.width}-${req.query.height}.jpg`);
          
        }
        
      }
   
  
);

export default route;
