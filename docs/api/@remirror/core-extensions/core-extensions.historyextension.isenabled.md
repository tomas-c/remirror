<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@remirror/core-extensions](./core-extensions.md) &gt; [HistoryExtension](./core-extensions.historyextension.md) &gt; [isEnabled](./core-extensions.historyextension.isenabled.md)

## HistoryExtension.isEnabled() method

Provides the isEnabled method to the ActionMethods of undo and redo.

<b>Signature:</b>

```typescript
isEnabled({ getState }: ExtensionManagerParams): ({ command }: {
        command?: string | undefined;
    }) => boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  { getState } | <code>ExtensionManagerParams</code> |  |

<b>Returns:</b>

`({ command }: {
        command?: string | undefined;
    }) => boolean`

## Remarks

- Redo is not enabled when at the end of the history and there is nothing left to redo. - Undo is not enabled when at the beginning of the history and there is nothing left to undo.

