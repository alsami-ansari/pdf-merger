import express from 'express';
import path from 'path';
import multer from 'multer';
import { mergePdfs } from './merge.js';
import { fileURLToPath } from 'url';

const app = express();
const upload = multer({ dest: 'uploads/' });
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/index.html'));
});

app.post('/merge', upload.array('pdfs', 2), async (req, res, next) => {
  console.log(req.files);
  const mergedPdfPath = await mergePdfs(
    path.join(__dirname, req.files[0].path),
    path.join(__dirname, req.files[1].path)
  );
  res.redirect(`http://localhost:3000/static/${mergedPdfPath}.pdf`);
  // res.send({data: req.files})
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
