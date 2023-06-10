import express, { Request, Response } from 'express'
import { sampleProducts } from './data'
import * as dotenv from 'dotenv'
dotenv.config()

const app = express()
app.get('/api/products', (req: Request, res: Response) => {
  res.json(sampleProducts)
})

const port = process.env.PORT

app.listen(port, () => console.log(`Server is running on port ${port}`))
