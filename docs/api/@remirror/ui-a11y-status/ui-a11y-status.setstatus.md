<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@remirror/ui-a11y-status](./ui-a11y-status.md) &gt; [setStatus](./ui-a11y-status.setstatus.md)

## setStatus variable

Set the status of the created live region status so that screen readers announce the changes for a11y.

<b>Signature:</b>

```typescript
setStatus: (status: string, doc?: Document | undefined) => void
```

## Remarks

The status is using a singleton html div. This means that the same invisible live status element is used for the lifetime of the app.

