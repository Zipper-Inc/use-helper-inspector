import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelpModeProvider, InspectableComponents } from '../../dist'
import { App } from './app'
import './index.css'

const inspectableComponents: InspectableComponents = {
  footer: {
    description:
      'The FooterComponent is a React component that is responsible for rendering the footer section of the webpage. This typically includes information like contact details, social media links, and other website navigation links that are not part of the main content.',
    name: 'FooterComponent',
  },
  nav: {
    description:
      'The NavComponent is a React component that renders the navigation bar of the webpage. This component typically includes links for navigating to different sections of the website, such as the home page, about page, contact page, etc.',
    name: 'NavComponent',
  },
  'blog-post': {
    description:
      'The BlogPostComponent is a React component that is responsible for rendering a single blog post. This includes the post title, author, date, content, and potentially comments and social share links.',
    name: 'BlogPostComponent',
  },
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelpModeProvider inspectableComponents={inspectableComponents}>
      <App />
    </HelpModeProvider>
  </React.StrictMode>
)
