// import { findAllPlayers } from "../repositories/players-repository"
import type { PlayerModel } from "../models/player-model";
import type { StatisticsModel } from "../models/statistics.model";
import * as PlayerRepository from "../repositories/players-repository";
import {
	badRequest,
	createdRequest,
	noContent,
	ok,
} from "../utils/http-helpers/http-helpers";

export const getPlayerService = async () => {
	const data = await PlayerRepository.findAllPlayers();
	// biome-ignore lint/style/useConst: <explanation>
	let response = null;

	if (data) {
		response = await ok(data);
	} else {
		response = await noContent();
	}
	return response;
};

export const getPlayerByIdService = async (id: number) => {
	//Pedir dados para o repository
	const data = await PlayerRepository.findPlayerById(id);
	// biome-ignore lint/style/useConst: <explanation>
	let response = null;

	if (data) {
		response = await ok(data);
	} else {
		response = await noContent();
	}
	return response;
};

export const createPlayerService = async (player: PlayerModel) => {
	// biome-ignore lint/style/useConst: <explanation>
	let response = null;
	// verifica se o ojeto está vazio
	if (Object.keys(player).length !== 0) {
		await PlayerRepository.insertPlayer(player);
		response = await createdRequest();
	} else {
		response = await badRequest();
	}
	return response;
};

export const deletePlayerService = async (id: number) => {
	// biome-ignore lint/style/useConst: <explanation>
	let response = null;
    const isDeleted = await PlayerRepository.deleteOnePlayer(id);

    if (isDeleted) {
		response = await ok({ message: "deleted success" });
	} else {
		response = await badRequest();
	}
	return response;
};

export const updatePlayerService = async (
	id: number,
	statistics: StatisticsModel,
) => {
	// biome-ignore lint/style/useConst: <explanation>
	let response = null;
	const data = await PlayerRepository.findAndModifyPlayer(id, statistics);

    if ( Object.keys(data).length !== 0 ) {
		response = await ok(data);
	} else {
		response = await badRequest();
	}
	return response;
};
