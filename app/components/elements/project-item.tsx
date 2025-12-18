"use client"

import Link from "next/link"
import Image from "next/image"
import type { ReactNode } from "react"

interface ProjectItemProps {
  image: string
  title: string
  href?: string
  slideIndex?: number
  children: ReactNode
}

export default function ProjectItem({
  image,
  title,
  href = "/referenzen",
  slideIndex = 0,
  children,
}: ProjectItemProps) {
  const referenceLink = slideIndex !== undefined ? `${href}?slide=${slideIndex}` : href

  return (
    <Link href={referenceLink} className="project-item">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={500}
        height={350}
        style={{ width: "100%", height: "auto" }}
      />
      <div className="project-item-inner">
        <h3 className="project-item-headline">{title}</h3>
        <div className="project-item-text">{children}</div>
        <div className="button-container">
          <button className="btn">Zur Referenz <i className="icon icon-arrow-right"></i></button>
        </div>
      </div>
    </Link>
  )
}
