import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { HelpModeProvider, useHelpBorder, useHelpMode } from '.'

const DEFAULT_INSPECTABLE_COMPONENTS = {
  some: {
    description: 'Some description',
    name: 'Some name',
  },
}
function MockHelpModeComponent() {
  return <MockHelpModeComponentWithHook />
}
const MockHelpModeComponentWithHook = () => {
  const { helpModeEnabled, toggleHelpMode } = useHelpMode()
  const { style, onMouseEnter, onMouseLeave } = useHelpBorder()
  return (
    <div role="banner" id="Foo" style={style('Foo')} onMouseEnter={onMouseEnter('Foo')} onMouseLeave={onMouseLeave()}>
      <p>{helpModeEnabled ? 'Help Mode On' : 'Help Mode Off'}</p>
      <button onClick={toggleHelpMode}>Toggle Help Mode</button>
    </div>
  )
}

describe('HelpModeProvider and hooks', () => {
  test('provides correct initial context values', () => {
    const { getByText } = render(
      <HelpModeProvider inspectableComponents={DEFAULT_INSPECTABLE_COMPONENTS}>
        <MockHelpModeComponent />
      </HelpModeProvider>
    )
    expect(getByText('Help Mode Off')).toBeInTheDocument()
  })

  test('toggles help mode correctly', () => {
    const { getByText, getByRole } = render(
      <HelpModeProvider inspectableComponents={DEFAULT_INSPECTABLE_COMPONENTS}>
        <MockHelpModeComponent />
      </HelpModeProvider>
    )
    const toggleButton = getByText('Toggle Help Mode')
    const container = getByRole('banner')
    fireEvent.click(toggleButton)
    fireEvent.mouseEnter(container)
    expect(getByText('Help Mode On')).toBeInTheDocument()
    expect(container).toHaveStyle('border: 4px solid #E5BEEB')
  })

  test('Displays correct style on hover', () => {
    const { getByText, getByRole } = render(
      <HelpModeProvider
        inspectableComponents={DEFAULT_INSPECTABLE_COMPONENTS}
        styleOnHover={{ border: '4px solid #F0F' }}
      >
        <MockHelpModeComponent />
      </HelpModeProvider>
    )
    const toggleButton = getByText('Toggle Help Mode')
    const container = getByRole('banner')
    fireEvent.click(toggleButton)
    fireEvent.mouseEnter(container)
    expect(getByText('Help Mode On')).toBeInTheDocument()
    expect(container).toHaveStyle('border: 4px solid #F0F')
  })
})
