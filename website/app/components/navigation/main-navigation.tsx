"use client"

import { mainNavigationConfig } from "@/app/assets/TypeScript/lib/config/site-navigation"
import { NavigationBase } from "../../assets/TypeScript/lib/backend/navigation-base"

export function MainNavigation() {
  return <NavigationBase items={mainNavigationConfig} variant="main" />
}
