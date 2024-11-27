import { findAllClubs } from "../repositories/clubs-repository";
import * as HttpResponse from "../utils/http-helpers/http-helpers";

export const getClubsService = async () => {
	const data = await findAllClubs();

	const response = HttpResponse.ok(data);

	return response;
};
