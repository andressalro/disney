import { ServerConfig } from "./config";
import EnvConfig from "./config/env.config";

async function main() {
  const PORT = EnvConfig.PORT || 3000;
  const server = new ServerConfig({
    port: PORT,
    //middleware: []
  });
  server.listen();
}

main();
