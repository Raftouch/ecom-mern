import express, { Request, Response } from 'express'
import { sampleProducts } from './data'
import corsMiddleware from './middleware/cors'
// import cors from 'cors'
import * as dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(corsMiddleware)
// app.use(
//   cors({
//     credentials: true,
//     origin: ['http://localhost:5173'],
//   })
// )

app.get('/api/products', (req: Request, res: Response) => {
  res.json(sampleProducts)
})

const port = process.env.PORT
app.listen(port, () => console.log(`Server is running on port ${port}`))
