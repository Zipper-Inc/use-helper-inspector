import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './app'
import {
  HelpModeProvider,
  InspectableComponents,
} from '@zipper-inc/use-inspector-guides'

const inspectableComponents: InspectableComponents = {
  footer: {
    description: 'This is a footer component',
    name: 'Footer',
  },
  nav: {
    description: 'This is a nav component',
    name: 'Nav',
  },
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelpModeProvider inspectableComponents={inspectableComponents}>
      <App />
    </HelpModeProvider>
  </React.StrictMode>
)
