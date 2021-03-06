<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [jest-remirror](./jest-remirror.md) &gt; [CreateTestEditorReturn](./jest-remirror.createtesteditorreturn.md)

## CreateTestEditorReturn type

<b>Signature:</b>

```typescript
export declare type CreateTestEditorReturn<GPlainMarks extends Array<MarkExtension<any>>, GPlainNodes extends Array<NodeExtension<any>>, GAttrMarks extends Array<MarkExtension<any>>, GAttrNodes extends Array<NodeExtension<any>>, GOthers extends Array<Extension<any>>, GExtension extends GenericExtension<GPlainMarks, GPlainNodes, GAttrMarks, GAttrNodes, GOthers> = GenericExtension<GPlainMarks, GPlainNodes, GAttrMarks, GAttrNodes, GOthers>> = Omit<InjectedRemirrorProps<GExtension>, 'view'> & TestEditorViewParams<SchemaFromExtensions<GExtension>> & {
    utils: RenderResult;
    add: AddContent<GExtension>;
    nodes: NodeWithoutAttrs<GetNames<GPlainNodes> | BaseExtensionNodeNames>;
    marks: MarkWithoutAttrs<GetNames<GPlainMarks>>;
    attrNodes: NodeWithAttrs<GetNames<GAttrNodes>>;
    attrMarks: MarkWithAttrs<GetNames<GAttrMarks>>;
    getState(): EditorState<SchemaFromExtensions<GExtension>>;
    schema: SchemaFromExtensions<GExtension>;
    p: (...content: TaggedContentWithText[]) => TaggedProsemirrorNode;
    doc: (...content: TaggedContentWithText[]) => TaggedProsemirrorNode;
};
```
