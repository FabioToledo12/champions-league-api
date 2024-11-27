import createApp from "./app";

const app = createApp();
const PORT = process.env.PORT;

app.listen( PORT , () => {
	console.log(  `🚀 - Server is running at http://localhost:${PORT}` );
});