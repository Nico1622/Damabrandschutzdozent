"use client"

import { footerNavigationConfig } from "@/app/assets/TypeScript/lib/config/site-navigation"
import { NavigationBase } from "../../assets/TypeScript/lib/backend/navigation-base"

export function FooterNavigation() {
  return <NavigationBase items={footerNavigationConfig} variant="footer" />
}
