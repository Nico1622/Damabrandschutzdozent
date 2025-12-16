// site-navigation.ts
// Zentrale Navigation-Konfiguration

export interface NavItem {
  label: string
  href: string
  icon?: string
  children?: NavItem[]
  external?: boolean
  description?: string
}

// Hauptnavigation (mit optionalen Dropdowns)
export const mainNavigationConfig: NavItem[] = [
  {
    label: "Home",
    href: "/",
    description: "Zur Startseite und Übersicht gelangen",
  },
  {
    label: "Profil",
    href: "/profil",
    description: "Mehr über mich und meine Arbeit erfahren",
  },
  {
    label: "Referenzen",
    href: "/referenzen",
    description: "Meine Projekte und Arbeiten ansehen",
    // children: [
    //   {
    //     label: "Projekt-1",
    //     href: "/referenzen/projekt-1",
    //     description: "Projekt 1 im Detail entdecken",
    //   },
    //   {
    //     label: "Projekt-2",
    //     href: "/referenzen/projekt-2",
    //     description: "Projekt 2 und seine Umsetzung ansehen",
    //   },
    //   {
    //     label: "Projekt-3",
    //     href: "/referenzen/projekt-3",
    //     description: "Projekt 3 mit allen Highlights ansehen",
    //   },
    // ],
  },
  {
    label: "Kontakt",
    href: "/kontakt",
    description: "Kontaktieren Sie mich via E-Mail",
  },
]

export const footerNavigationConfig: NavItem[] = [
  {
    label: "Home",
    href: "/",
    description: "Zur Startseite und Übersicht gelangen",
  },
  {
    label: "Kontakt",
    href: "/kontakt",
    description: "Kontaktieren Sie mich per E-Mail",
  },
  {
    label: "Impressum",
    href: "/impressum",
    description: "Rechtliche Angaben und Informationen",
  },
  {
    label: "Datenschutz",
    href: "/datenschutz",
    description: "Informationen zum Datenschutz lesen",
  }
]
