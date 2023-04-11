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
  email?: string
  phone?: string
  defaultShowEmail?: boolean
  defaultShowPhone?: boolean
}
