### Introduction

This library aims to provide a simple and easy to create and handle interactions based on hover, like an inspector mode.

### Installation

Install using the package manager of your choice.

```bash
npm install @zipper-inc/use-inspector-guides
```

```bas
yarn add @zipper-inc/use-inspector-guides
```

```bash
bun add @zipper-inc/use-inspector-guides
```

@zipper-inc/use-inspector-guides supports also ES modules as well as commonjs.

### Usage and Examples

Once installed, you can import the library in your React App. It provides two hooks, `useHelpMode` and `useHelpBorder` taht should be used under the `HelpModeProvider` context.

```tsx
import { HelpModeProvider, useHelpMode, useHelpBorder } from '@zipper-inc/use-inspector-guides';


const inspectableComponents: InspectableComponents = {
  'blog-post': {
    description:
      'The BlogPostComponent is a React component that is responsible for rendering a single blog post. This includes the post title, author, date, content, and potentially comments and social share links.',
    name: 'BlogPostComponent',
  },
}

ReactDOM.createRoot(document.getElementById('root')!).render(

    <HelpModeProvider inspectableComponents={inspectableComponents}>
      <App />
    </HelpModeProvider>
  </React.StrictMode>
)
```

You should place the `HelpModeProvider` at the most top of the hierarchy of your component based in which parts you want to use the inspector mode. It will requires a prop `inspectableComponents` that is a map of the components that you want to be inspected. The key of the map is the component name and the value is an object with the component name and a description.

The hook `useHelpMode` is used to enable the inspector mode. It returns a boolean that indicates if the inspector mode is enabled or not. You can use it to show or hide the inspector mode button.

```tsx
const ToggleHelpModeButton = () => {
  const { toggleHelpMode } = useHelpMode()
  return (
    <button onClick={toggleHelpMode} type="button">
      Toggle Help Mode
    </button>
  )
}
```

The hook `useHelpBorder` is responsible for handling the tracking of the component that is being inspected. It returns callbacks that should be added to onMouseEnter and onMouseLeave events of the component that you want to be inspected, it register the component and make it inspectable by mouse hover. It also provides a default style for the component that is being inspected.

```tsx
const HeroBlogLinkListItem = () => {
  const { onMouseEnter, onMouseLeave, style } = useHelpBorder()
  return (
    <li
      onMouseEnter={onMouseEnter('blog-post')}
      onMouseLeave={onMouseLeave()}
      style={{
        border: style('blog-post').border,
      }}
    >
      {/** ... */}
    </li>
  )
}
```

### API Documentation

This section provides a comprehensive reference for the library's API.

- `HelpModeProvider`: A context provider that enables the use of inspector functionalities. Accepts `inspectableComponents` as a prop, defining the components to be inspected.
- `useHelpMode`: A hook to enable the inspector mode. Returns an object containing various properties and functions like `helpModeEnabled`, `inspectorEnabled`, `elementDescription`, `toggleHelpMode`, etc.
- `useHelpBorder`: A hook for tracking and styling inspected components. It provides `onMouseEnter` and `onMouseLeave` callbacks for component interaction, and a `style` method for dynamic styling based on inspection state.
- `InspectableComponent`: An interface representing an inspectable component with properties `name` and `description`.

Each function and interface is designed to integrate seamlessly, providing a user-friendly inspection mode in your React application.
