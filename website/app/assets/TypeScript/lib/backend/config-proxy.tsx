export type ConfigItem = {
  name: string;
  title: string;
  text: string;
  href?: string;
};

// Proxy für einzelne ConfigItem, liefert automatisch text bei Zugriff
export function createItemProxy(item: ConfigItem): ConfigItem & { toString(): string } {
  return new Proxy(item, {
    get(objItem, key: string | symbol) {
      if (typeof key === "symbol") return key === Symbol.toPrimitive ? () => objItem.text : undefined;
      if (key === "toString") return () => objItem.text;
      return (objItem as Record<string, any>)[key] ?? undefined;
    },
  });
}

// Proxy für ein ganzes Config-Objekt
export function createConfigProxy(obj: Record<string, ConfigItem>) {
  const proxied: Record<string, any> = {};
  for (const key in obj) {
    proxied[key] = createItemProxy(obj[key]);
  }
  return proxied;
}

// Funktion, um company + social + imprint zu einem Proxy-Objekt zusammenzuführen
export function createCompanyProxy(siteConfig: {
  company: Record<string, ConfigItem>;
  social: Record<string, ConfigItem>;
  imprint: Record<string, ConfigItem>;
}) {
  return {
    ...createConfigProxy(siteConfig.company),
    ...createConfigProxy(siteConfig.social),
    imprint: createConfigProxy(siteConfig.imprint),
  };
}