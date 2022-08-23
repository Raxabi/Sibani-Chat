import { type Request, type Response } from "express"

export const main = (req: Request, res: Response) => {
	res.send("<h1>Hello World!</h1>")
}
