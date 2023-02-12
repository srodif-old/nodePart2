import express from 'express';
import 'express-async-errors';
import morgan from 'morgan';
import Joi from 'joi';
import { getAll, getOneById, create, updateById, deleteById } from './controllers/planets.js';

const app = express()
const port = 3000

app.use(morgan('dev'));
app.use(express.json());

const planetSchema = Joi.object({
    id : Joi.number().integer().required(),
})





app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})

app.get('/api/planets', getAll)

app.get('/api/planets/:id', getOneById)

app.post('/api/planets', create)

app.put('/api/planets/:id', updateById)

app.put('/api/planets/:id', deleteById)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})