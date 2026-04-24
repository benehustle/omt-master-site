import {
  defineCloudflareConfig,
  type OpenNextConfig,
} from "@opennextjs/cloudflare";

// OpenNext runs this for the Next.js compile step. It must NOT be `npm run build`
// (that runs the full OpenNext pipeline and would recurse).
const config: OpenNextConfig = {
  ...defineCloudflareConfig({}),
  buildCommand: "npm run build:next",
};

export default config;
