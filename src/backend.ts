import { Logger } from "./@/logger";
import { ServeSinglePageApp } from "./@/serve-single-page-app";

const logger = Logger({ t: "console", prefix: ["app"] });
const server = Bun.serve({
  async fetch(req) {
    const res = await ServeSinglePageApp.respond({
      req,
      distDir: "./dist",
      indexHtml: "./dist/index.html",
      logger,
    });
    return res;
  },
});

logger.info(`Server is running on http://${server.hostname}:${server.port}`);
