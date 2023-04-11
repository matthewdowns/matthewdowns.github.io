import { ImageProps } from 'next/image'

export interface BusinessCardProps {
  className?: string
  minHeight?: number
  minWidth?: number
  maxHeight?: number
  maxWidth?: number
  scale?: number
  logo?: ImageProps
  picture?: ImageProps
  name: string
  title: string
  /**
   * Prevent spam bot crawlers from detecting email address in JavaScript by splitting it up
   */
  email?: {
    address: string
    domain: string
  }
  phone?: string
  defaultShowEmail?: boolean
  defaultShowPhone?: boolean
}
