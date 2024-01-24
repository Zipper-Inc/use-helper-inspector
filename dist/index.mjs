// src/index.tsx
import React, { createContext, useContext, useEffect, useRef, useState } from "react";
var HelpModeContext = createContext(null);
var useHelpMode = () => {
  const context = useContext(HelpModeContext);
  if (context === null) {
    throw new Error("useHelpMode must be used within a HelpModeProvider");
  }
  return context;
};
var useHelpBorder = () => {
  const { helpModeEnabled, hoveredElement, setHoveredElement, setElementDescription, inspectableComponents } = useHelpMode();
  return {
    style: (componentName) => ({
      border: helpModeEnabled && hoveredElement === componentName ? "4px solid #E5BEEB" : "4px solid transparent",
      boxSizing: "border-box"
      // to prevent resizing of the elements when border is applied
    }),
    onMouseEnter: (componentName) => () => {
      var _a;
      if (helpModeEnabled) {
        setHoveredElement(componentName);
        setElementDescription(((_a = inspectableComponents[componentName]) == null ? void 0 : _a.description) || null);
      }
    },
    onMouseLeave: () => () => {
      if (helpModeEnabled) {
        setHoveredElement(null);
        setElementDescription(null);
      }
    }
  };
};
var HelpModeProvider = ({ children, inspectableComponents }) => {
  const [helpModeEnabled, setHelpModeEnabled] = useState(false);
  const [inspectorEnabled, setInspectorEnabled] = useState(false);
  const [elementDescription, setElementDescription] = useState(null);
  const [hoveredElement, setHoveredElement] = useState(null);
  const toggleInspectorMode = () => {
    setInspectorEnabled((prev) => !prev);
  };
  const justToggledRef = useRef(false);
  function toggleHelpMode() {
    justToggledRef.current = true;
    setHelpModeEnabled((prev) => !prev);
  }
  useEffect(() => {
    const handleClickOutside = () => {
      if (helpModeEnabled && !justToggledRef.current) {
        toggleHelpMode();
      }
      justToggledRef.current = false;
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [helpModeEnabled]);
  return /* @__PURE__ */ React.createElement(
    HelpModeContext.Provider,
    {
      value: {
        helpModeEnabled,
        inspectorEnabled,
        elementDescription,
        toggleHelpMode,
        toggleInspectorMode,
        setElementDescription,
        hoveredElement,
        setHoveredElement,
        inspectableComponents
      }
    },
    children
  );
};
export {
  HelpModeProvider,
  useHelpBorder,
  useHelpMode
};
//# sourceMappingURL=index.mjs.map