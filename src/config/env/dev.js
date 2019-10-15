
let PORT = process.env.PORT || 9090;
let MONGO_HOST = process.env.MONGO_HOST || "mongodb://127.0.0.1/geton";
const config = {
	'mongo_uri': MONGO_HOST,
	'port': PORT
}

module.exports = config;