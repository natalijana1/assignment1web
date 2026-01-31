
import { Request, Response } from "express";

class BaseController {
    model: any;

    constructor(model: any) {
        this.model = model;
    }

    async getAll(req: Request, res: Response) {
        await new Promise<void>(resolve => setTimeout(() => resolve(), 5000));
        try {
            if (req.query) {
                const filterData = await this.model.find(req.query);
                return res.json(filterData);
            } else {
                const data = await this.model.find();
                res.json(data);
            }
        } catch (err) {
            console.error(err);
            res.status(500).send("Error retrieving objects");
        }
    };

    async getById(req: Request, res: Response) {
        const id = req.params.id;
        try {
            const data = await this.model.findById(id);
            if (!data) {
                return res.status(404).send("Object not found");
            } else {
                res.json(data);
            }
        } catch (err) {
            console.error(err);
            res.status(500).send("Error retrieving object by ID");
        }
    };
};
export default BaseController
