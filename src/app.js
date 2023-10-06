import express from 'express';
import './config.js';
import bodyParser from 'body-parser';
import cors from 'cors';



import internRoutes from './routes/intern.js'; 



const app = express();

const corsOptions = {
  origin: [' https://api.xynapsetechnologies.com',' http://localhost:3000'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  Headers: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
}; 


app.use(cors(corsOptions));


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api/intern',internRoutes)


const PORT = process.env.PORT || 6000;

app.listen(PORT, (err) => {
  if (err) {
    console.error('Error starting the server:', err);
  } else {
    console.log(`Server started on port ${PORT}`);
  }
});
