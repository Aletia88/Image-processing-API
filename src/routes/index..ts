import express from 'express';
import { resizeImage } from '../utilities/resize';
import fs from 'fs';
const route = express.Router();

route.get(
  '/images',

  (req: { query: { filename: string; width: number; height: number } }, res) => {
    const url = `/src/images/thumb/${req.query.filename}-${req.query.width}-${req.query.height}.jpg`;
    if (Object.keys(req.query).length > 3) {
      res.send('please enter only filename, width and height of the image');
    } else if (req.query.filename == undefined || req.query.width == undefined || req.query.height == undefined) {
      res.send('Sorry There is a missing parameter ');
    } else if (isNaN(req.query.width) || req.query.width < 1) {
      res.send('width can only be a postive number');
    } else if (isNaN(req.query.height) || req.query.height < 1) {
      res.send('height can only be a postive number');
    } else if (fs.existsSync(url)) {
      res.sendFile(process.cwd() + url);
    } else {
      resizeImage(req.query.filename, Number(req.query.width), Number(req.query.height));

      setTimeout(() => {
        res.sendFile(process.cwd() + url);
      }, 1000);
    }
  }
);

export default route;
