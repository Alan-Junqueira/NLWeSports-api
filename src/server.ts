import express from 'express';

const app = express();

app.get('/ads', (req, res) => {
  return res.json({
    message: 'acessou ads denovo'
  });
});

app.listen(3333);
