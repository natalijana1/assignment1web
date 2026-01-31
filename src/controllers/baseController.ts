
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

    async create(req: Request, res: Response) {
        const objectData = req.body;
        console.log(objectData);
        try {
            const data = await this.model.create(objectData);
            res.status(201).json(data);
        } catch (err) {
            console.error(err);
            res.status(500).send("Error creating object");
        }
    };

    async del(req: Request, res: Response) {
        const id = req.params.id;
        try {
            const deletedData = await this.model.findByIdAndDelete(id);
            res.status(200).json(deletedData);
            console.log("delete data -----" + deletedData);
        } catch (err) {
            console.error(err);
            res.status(500).send("Error deleting object");
        }
    };

    async update(req: Request, res: Response) {
        const id = req.params.id;
        const updatedData = req.body;
        try {
            const data = await this.model.findByIdAndUpdate(id, updatedData, {
                new: true,
            });
            res.json(data);
        } catch (err) {
            console.error(err);
            res.status(500).send("Error updating object");
        }
    };
};
export default BaseController
