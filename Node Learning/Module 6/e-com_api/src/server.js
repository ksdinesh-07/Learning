import "dotenv/config";
import app from "./app.js";
import { connect_db } from "./config/database.js";
import redis_client, { connect_redis } from "./config/redis.js";

const port = process.env.PORT || 5000;

await connect_db();
await connect_redis();

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});