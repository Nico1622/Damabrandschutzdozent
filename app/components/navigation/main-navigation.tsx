"use client"

import { usePathname } from 'next/navigation';
import { mainNavigationConfig } from "@/app/assets/TypeScript/lib/config/site-navigation"
import { NavigationBase } from "../../assets/TypeScript/lib/backend/navigation-base"

export function MainNavigation() {
  const pathname = usePathname()
  if (pathname == "/login") {
    return null
  }

  return <NavigationBase items={mainNavigationConfig} variant="main" />
}
