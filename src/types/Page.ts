enum Page {
  Home = 'home',
  About = 'about',
  Blog = 'blog',
  Tools = 'tools',
}

export const PageMap: Record<Page, string> = {
  [Page.Home]: 'Home',
  [Page.About]: 'About',
  [Page.Blog]: 'Blog',
  [Page.Tools]: 'Tools'
}

export default Page
