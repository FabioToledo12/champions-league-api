import type { Request, Response } from "express";
import type { StatisticsModel } from "../models/statistics.model";
import {
	createPlayerService,
	deletePlayerService,
	getPlayerByIdService,
	getPlayerService,
	updatePlayerService,
} from "../services/players-service";

export const getPlayer = async (req: Request, res: Response) => {
	const httResponse = await getPlayerService();

	res.status(httResponse.statusCode).json(httResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
	const id = Number.parseInt(req.params.id);
	const httResponse = await getPlayerByIdService(id);
	res.status(httResponse.statusCode).json(httResponse.body);
};

export const createPlayer = async (req: Request, res: Response) => {
	const bodyValue = req.body;
	const httResponse = await createPlayerService(bodyValue);
	// console.log(bodyValue)
	if (httResponse) {
		res.status(httResponse.statusCode).json(httResponse.body);
	}
	// else {
	// 	const response = await noContent()
	// 	res.status(response.statusCode).json((response).body )
	// }
};

export const deletePlayer = async (req: Request, res: Response) => {
	const id = Number.parseInt(req.params.id);
	const httResponse = await deletePlayerService(id);
	res.status(httResponse.statusCode).json(httResponse.body);
};

export const updatePlayer = async (req: Request, res: Response) => {
	const id = Number.parseInt(req.params.id);
	const bodyValue: StatisticsModel = req.body;
	const httResponse = await updatePlayerService(id, bodyValue);
	res.status(httResponse.statusCode).json(httResponse.body);
};
