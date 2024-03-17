# MUI Multiple Popup

MUI's `Popup` component is useful, however, quite complex for multiple dialogs or popups.

This package is for simple multi-popups, and also includes simple loading spinner with message.

## Installation

`npm i mui-multiple-popup`

## Usage

You can use various feature with just simple import statement.

```typescript
import Popup from "mui-multiple-popup";
```

Useful components:
- DialogContainer: Container for popups, you must include this component in somewhere to use multiple popups.
- LoadingComponent: Container for loading spinner, you must include this component in somewhere to use loading spinner.

Useful functions:
- closeDialog(id: number), 
- closeAll(),
- openConfirmDialog(title: ReactNode, content: ReactNode, onYes?: VoidFunction) => number,
- openYesNoDialog(title: ReactNode, content: ReactNode, onYes?: VoidFunction, onNo?: VoidFunction) => number,
- openCancelableDialog(title: ReactNode, content: ReactNode, onCancel?: VoidFunction) => number,
- startLoading(text: string),
- stopLoading(),

## Example

```typescript
import { useEffect } from "react";
import Popup from "mui-multiple-popup";

function App() {
  useEffect(() => {
    const id = Popup.openConfirmDialog("Test", "Howdy!", () => console.log("Popup Closed."));
    console.log(`Popup id: ${id} opend!`);
    // Popup.close(id);
  }, []);

  return <Popup.DialogContainer />;
}
```
