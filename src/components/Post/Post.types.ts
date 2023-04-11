import { ReactNode } from 'react'

export interface PostNavigationSection {
  id: string
  label: string
  items?: PostNavigationSectionItem[]
}

export interface PostNavigationSectionItem {
  id: string
  label: string
}

export interface PostProps {
  className?: string
  navigation?: PostNavigationSection[]
  children?: ReactNode
}
