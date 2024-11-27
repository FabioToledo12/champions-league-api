import type { HttpResponse } from "../../models/http-response-model";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const ok = async (data: any): Promise<HttpResponse> => {
	return {
		statusCode: 200,
		body: data,
	};
};

export const createdRequest = async (): Promise<HttpResponse> => {
	return {
		statusCode: 201,
		body: {
			message: "Created Sucessfully",
		},
	};
};

export const noContent = async (): Promise<HttpResponse> => {
	return {
		statusCode: 204,
		body: null,
	};
};

export const badRequest = async (): Promise<HttpResponse> => {
	return {
		statusCode: 400,
		body: null,
	};
};

