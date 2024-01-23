import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { HelpModeProvider, useHelpMode } from '.'

// Mock component to test useHelpMode
function MockHelpModeComponent() {
  const { helpModeEnabled, toggleHelpMode } = useHelpMode()
  return (
    <div>
      <p>{helpModeEnabled ? 'Help Mode On' : 'Help Mode Off'}</p>
      <button onClick={toggleHelpMode}>Toggle Help Mode</button>
    </div>
  )
}

describe('HelpModeProvider and hooks', () => {
  test('provides correct initial context values', () => {
    const { getByText } = render(
      <HelpModeProvider inspectableComponents={{}}>
        <MockHelpModeComponent />
      </HelpModeProvider>
    )
    expect(getByText('Help Mode Off')).toBeInTheDocument()
  })

  test('toggles help mode correctly', () => {
    const { getByText } = render(
      <HelpModeProvider inspectableComponents={{}}>
        <MockHelpModeComponent />
      </HelpModeProvider>
    )
    const toggleButton = getByText('Toggle Help Mode')
    fireEvent.click(toggleButton)
    expect(getByText('Help Mode On')).toBeInTheDocument()
  })

  // Additional tests for useHelpBorder and other functionalities
})
