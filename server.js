import { ServerConfig } from "./config";
import EnvConfig from "./config/env.config";
import { routerV1 } from "./routes";

async function main() {
  const PORT = EnvConfig.PORT || 3000;
  const server = new ServerConfig({
    port: PORT,
    routers: [routerV1],
  });
  server.listen();
}

main();
