'use client'
import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  scrolled?: boolean
}

export default function Logo({ scrolled = true }: LogoProps) {
  return (
    <Link href="/" className="flex-shrink-0">
      <Image
        src="/images/logo.png"
        alt="Prime Green Landscape LLC"
        width={130}
        height={42}
        priority
        className="object-contain w-auto"
        style={{ height: '42px', width: 'auto' }}
      />
    </Link>
  )
}
