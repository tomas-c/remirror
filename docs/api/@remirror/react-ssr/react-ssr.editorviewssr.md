<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@remirror/react-ssr](./react-ssr.md) &gt; [EditorViewSSR](./react-ssr.editorviewssr.md)

## EditorViewSSR class

A mock editor view used only when prosemirror is running on the server

<b>Signature:</b>

```typescript
export declare class EditorViewSSR 
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(place, props)](./react-ssr.editorviewssr._constructor_.md) |  | Constructs a new instance of the <code>EditorViewSSR</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [dom](./react-ssr.editorviewssr.dom.md) |  | <code>Element</code> |  |
|  [dragging](./react-ssr.editorviewssr.dragging.md) |  | <code>null</code> |  |
|  [place](./react-ssr.editorviewssr.place.md) |  | <code>Node &#124; ((p: Node) =&gt; void) &#124; {</code><br/><code>        mount: Node;</code><br/><code>    } &#124; undefined</code> |  |
|  [props](./react-ssr.editorviewssr.props.md) |  | <code>DirectEditorProps</code> |  |
|  [root](./react-ssr.editorviewssr.root.md) |  | <code>Document &#124; DocumentFragment</code> |  |
|  [state](./react-ssr.editorviewssr.state.md) |  | <code>EditorState</code> |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [coordsAtPos(\_pos)](./react-ssr.editorviewssr.coordsatpos.md) |  |  |
|  [destroy()](./react-ssr.editorviewssr.destroy.md) |  | Removes the editor from the DOM and destroys all \[node views\](\#view.NodeView). |
|  [dispatch(\_tr)](./react-ssr.editorviewssr.dispatch.md) |  |  |
|  [domAtPos(\_pos)](./react-ssr.editorviewssr.domatpos.md) |  |  |
|  [endOfTextblock(\_dir, \_state)](./react-ssr.editorviewssr.endoftextblock.md) |  |  |
|  [focus()](./react-ssr.editorviewssr.focus.md) |  |  |
|  [hasFocus()](./react-ssr.editorviewssr.hasfocus.md) |  |  |
|  [nodeDOM(\_pos)](./react-ssr.editorviewssr.nodedom.md) |  |  |
|  [posAtCoords(\_coords)](./react-ssr.editorviewssr.posatcoords.md) |  |  |
|  [posAtDOM(\_node, \_offset, \_bias)](./react-ssr.editorviewssr.posatdom.md) |  |  |
|  [setProps(\_props)](./react-ssr.editorviewssr.setprops.md) |  |  |
|  [someProp(\_propName, f)](./react-ssr.editorviewssr.someprop.md) |  |  |
|  [update(\_props)](./react-ssr.editorviewssr.update.md) |  |  |
|  [updateState(\_state)](./react-ssr.editorviewssr.updatestate.md) |  |  |

