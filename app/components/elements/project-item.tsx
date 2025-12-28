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
    <Link href={referenceLink} className="project-item" title={title}>
      <Image
        src={image || "/placeholder.svg"}
        alt={`${title} - Referenz`}
        width={1024}
        height={1024}
        sizes="
          (max-width: 360px) 90vw,
          (max-width: 480px) 85vw,
          (max-width: 576px) 80vw,
          (max-width: 768px) 75vw,
          (max-width: 992px) 70vw,
          (max-width: 1360px) 65vw,
          1024px
        "
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
