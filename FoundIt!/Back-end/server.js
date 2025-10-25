import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
const app = express();
app.use(morgan('dev'));
app.use(helmet());
app.use(cors({
  origin:'http://localhost:5173/'
}))
const limiter = rateLimit({
  windowMs:1*60*1000,
  max:100
})
app.use(limiter)
app.get('/', (req, res) => {
  res.send({states:"Ok",service:"lost-item-backend"});
});

app.get('/about', (req, res) => {
  res.send('<h1>About</h1>');
});


app.listen(5000, () => console.log('Server is listening on port 5000'));
