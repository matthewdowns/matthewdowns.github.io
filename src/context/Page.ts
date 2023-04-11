import { createContext } from 'react'
import Page from '@/types/Page'

const PageContext = createContext<{
  current?: Page
}>({})

export default PageContext
