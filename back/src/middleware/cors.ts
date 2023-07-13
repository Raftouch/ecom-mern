import { NextFunction, Request, Response } from 'express'

export default function cors(req: Request, res: Response, next: NextFunction) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173')
  res.header('Access-Control-Allow-Credentials', 'include')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
}
