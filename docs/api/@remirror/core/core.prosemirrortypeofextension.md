<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@remirror/core](./core.md) &gt; [ProsemirrorTypeOfExtension](./core.prosemirrortypeofextension.md)

## ProsemirrorTypeOfExtension type

Utility type for retrieving the prosemirror type of the extension which can be:

- `NodeType` - `MarkType` - `never`

<b>Signature:</b>

```typescript
export declare type ProsemirrorTypeOfExtension<GExtension extends {
    _T: any;
}> = GExtension['_T'];
```
