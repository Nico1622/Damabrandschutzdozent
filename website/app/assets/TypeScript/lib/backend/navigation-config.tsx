// navigation-config.ts
// Hilfsfunktionen für Navigation

import type { NavItem } from "../config/site-navigation"

export function getAllNavItems(items: NavItem[]): NavItem[] {
  const allItems: NavItem[] = []
  items.forEach((item) => {
    allItems.push(item)
    if (item.children) {
      allItems.push(...getAllNavItems(item.children))
    }
  })
  return allItems
}

export function findNavItemByHref(href: string, items: NavItem[]): NavItem | null {
  for (const item of items) {
    if (item.href === href) {
      return item
    }
    if (item.children) {
      const found = findNavItemByHref(href, item.children)
      if (found) return found
    }
  }
  return null
}
