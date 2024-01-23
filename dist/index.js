"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  HelpModeProvider: () => HelpModeProvider,
  useHelpBorder: () => useHelpBorder,
  useHelpMode: () => useHelpMode
});
module.exports = __toCommonJS(src_exports);
var import_react = __toESM(require("react"));
var HelpModeContext = (0, import_react.createContext)(null);
var useHelpMode = () => {
  const context = (0, import_react.useContext)(HelpModeContext);
  if (context === null) {
    throw new Error("useHelpMode must be used within a HelpModeProvider");
  }
  return context;
};
var useHelpBorder = () => {
  const {
    helpModeEnabled,
    hoveredElement,
    setHoveredElement,
    setElementDescription,
    inspectableComponents
  } = useHelpMode();
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
        setElementDescription(
          ((_a = inspectableComponents[componentName]) == null ? void 0 : _a.description) || null
        );
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
var HelpModeProvider = ({
  children,
  inspectableComponents
}) => {
  const [helpModeEnabled, setHelpModeEnabled] = (0, import_react.useState)(false);
  const [inspectorEnabled, setInspectorEnabled] = (0, import_react.useState)(false);
  const [elementDescription, setElementDescription] = (0, import_react.useState)(
    null
  );
  const [hoveredElement, setHoveredElement] = (0, import_react.useState)(null);
  const toggleInspectorMode = () => {
    setInspectorEnabled((prev) => !prev);
  };
  const justToggledRef = (0, import_react.useRef)(false);
  function toggleHelpMode() {
    justToggledRef.current = true;
    setHelpModeEnabled((prev) => !prev);
  }
  (0, import_react.useEffect)(() => {
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
  return /* @__PURE__ */ import_react.default.createElement(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  HelpModeProvider,
  useHelpBorder,
  useHelpMode
});
//# sourceMappingURL=index.js.map