// site-navigation.ts
// Zentrale Navigation-Konfiguration

export interface NavItem {
  label: string
  href: string
  icon?: string
  children?: NavItem[]
  external?: boolean
  description?: string
  className?: string   
}

// Hauptnavigation (mit optionalen Dropdowns)
export const mainNavigationConfig: NavItem[] = [
  {
    label: "Startseite",
    href: "/",
    description: "Zur Startseite und Übersicht gelangen",
  },
  {
    label: "Brandschutz",
    href: "/brandschutz",
    description: "Brandschutz",
    children: [
      {
        label: "Brandschutzhelfer Ausbildung",
        href: "/brandschutz/brandschutzhelfer-ausbildung",
        description: "Brandschutzhelfer Ausbildung",
      },
      {
        label: "Brandschutzunterweisung",
        href: "/brandschutz/brandschutzunterweisung",
        description: "Brandschutzunterweisung",
      },
      {
        label: "Praktisches Feuerlöschtraining",
        href: "/brandschutz/praktisches-feuerloeschtraining",
        description: "Praktisches Feuerlöschtraining",
      },
      {
        label: "Co2 Übungsfeuerlöscher",
        href: "/brandschutz/co2-uebungsfeuerloescher",
        description: "Co2 Übungsfeuerlöscher",
      },
    ],
  },
  {
    label: "Brandschutzhelfer / Evakuirungshelfer",
    href: "/brandschutzhelfer-evakuierungshelfer",
    description: "Brandschutzhelfer / Evakuirungshelfer",
  },
  {
    label: "Kontakt",
    href: "/kontakt",
    description: "Kontaktieren Sie uns via E-Mail",
  }
]

export const footerNavigationConfig: NavItem[] = [
  {
    label: "Startseite",
    href: "/",
    description: "Zur Startseite und Übersicht gelangen",
  },
  {
    label: "Kontakt",
    href: "/kontakt",
    description: "Kontaktieren Sie uns per E-Mail",
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
