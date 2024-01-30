import React, { createContext, useContext, useEffect, useRef, useState } from 'react'

export interface InspectableComponent {
  name: string
  description: string
}
interface HelpModeContextProps {
  inspectableComponents: InspectableComponents
  helpModeEnabled: boolean
  inspectorEnabled: boolean
  elementDescription: string | null
  toggleHelpMode: () => void
  toggleInspectorMode: () => void
  setElementDescription: (description: string | null) => void
  hoveredElement: string | null
  setHoveredElement: React.Dispatch<React.SetStateAction<string | null>>
  styleOnHover: React.CSSProperties
}

const HelpModeContext = createContext<HelpModeContextProps | null>(null)

export interface InspectableComponents {
  [key: string]: InspectableComponent
}

export const useHelpMode = () => {
  const context = useContext(HelpModeContext)
  if (context === null) {
    throw new Error('useHelpMode must be used within a HelpModeProvider!!!')
  }
  return context
}

export const useHelpBorder = () => {
  const {
    helpModeEnabled,
    hoveredElement,
    setHoveredElement,
    setElementDescription,
    inspectableComponents,
    styleOnHover = {},
  } = useHelpMode()

  return {
    style: (componentName: string): React.CSSProperties => ({
      border: helpModeEnabled && hoveredElement === componentName ? '4px solid #E5BEEB' : '4px solid transparent',
      boxSizing: 'border-box', // to prevent resizing of the elements when border is applied
      ...styleOnHover,
    }),
    onMouseEnter: (componentName: string) => () => {
      if (helpModeEnabled) {
        setHoveredElement(componentName)
        setElementDescription(inspectableComponents[componentName]?.description || null)
      }
    },
    onMouseLeave: () => () => {
      if (helpModeEnabled) {
        setHoveredElement(null)
        setElementDescription(null)
      }
    },
  }
}

type HelpModeProviderP = {
  children: React.ReactNode
  inspectableComponents: InspectableComponents
  styleOnHover?: React.CSSProperties
}
export const HelpModeProvider = ({
  children,
  inspectableComponents,
  styleOnHover = { border: '4px solid #E5BEEB' },
}: HelpModeProviderP) => {
  const [helpModeEnabled, setHelpModeEnabled] = useState<boolean>(false)
  const [inspectorEnabled, setInspectorEnabled] = useState<boolean>(false)
  const [elementDescription, setElementDescription] = useState<string | null>(null)
  const [hoveredElement, setHoveredElement] = useState<string | null>(null)

  const toggleInspectorMode = () => {
    setInspectorEnabled((prev) => !prev)
  }

  const justToggledRef = useRef(false)

  function toggleHelpMode() {
    justToggledRef.current = true
    setHelpModeEnabled((prev) => !prev)
  }

  useEffect(() => {
    const handleClickOutside = () => {
      if (helpModeEnabled && !justToggledRef.current) {
        toggleHelpMode()
      }
      justToggledRef.current = false
    }

    window.addEventListener('click', handleClickOutside)

    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [helpModeEnabled])

  return (
    <HelpModeContext.Provider
      value={{
        helpModeEnabled,
        inspectorEnabled,
        elementDescription,
        toggleHelpMode,
        toggleInspectorMode,
        setElementDescription,
        hoveredElement,
        setHoveredElement,
        inspectableComponents,
        styleOnHover,
      }}
    >
      {children}
    </HelpModeContext.Provider>
  )
}
