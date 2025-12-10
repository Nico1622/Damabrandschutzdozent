import { siteConfig } from "../config/site-config";
import { createConfigProxy, ConfigItem } from "./config-proxy";

export const company = {
  ...createConfigProxy(siteConfig.company),
  ...createConfigProxy(siteConfig.social),
  imprint: createConfigProxy(siteConfig.imprint),
} as {
  [K in keyof typeof siteConfig.company | keyof typeof siteConfig.social]: ConfigItem & { toString(): string }
} & {
  imprint: { [K in keyof typeof siteConfig.imprint]: ConfigItem & { toString(): string } }
};
