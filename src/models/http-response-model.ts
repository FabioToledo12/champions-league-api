export interface HttpResponse {
    statusCode: number;
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    body: any;
}