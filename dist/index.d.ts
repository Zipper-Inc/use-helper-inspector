import React from 'react';

interface InspectableComponent {
    name: string;
    description: string;
}
interface HelpModeContextProps {
    inspectableComponents: InspectableComponents;
    helpModeEnabled: boolean;
    inspectorEnabled: boolean;
    elementDescription: string | null;
    toggleHelpMode: () => void;
    toggleInspectorMode: () => void;
    setElementDescription: (description: string | null) => void;
    hoveredElement: string | null;
    setHoveredElement: React.Dispatch<React.SetStateAction<string | null>>;
}
interface InspectableComponents {
    [key: string]: InspectableComponent;
}
declare const useHelpMode: () => HelpModeContextProps;
declare const useHelpBorder: () => {
    style: (componentName: string) => {
        border: string;
        boxSizing: string;
    };
    onMouseEnter: (componentName: string) => () => void;
    onMouseLeave: () => () => void;
};
type HelpModeProviderP = {
    children: React.ReactNode;
    inspectableComponents: InspectableComponents;
};
declare const HelpModeProvider: ({ children, inspectableComponents }: HelpModeProviderP) => React.JSX.Element;

export { HelpModeProvider, type InspectableComponent, useHelpBorder, useHelpMode };
