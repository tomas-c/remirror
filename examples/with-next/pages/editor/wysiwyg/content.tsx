import { EditorState, SchemaFromExtensions } from '@remirror/core';
import { WysiwygExtensions } from '@remirror/editor-wysiwyg';
import { RemirrorStateListenerParams } from '@remirror/react';
import { ExampleWysiwygEditor, WYSIWYG_SHOWCASE_CONTENT } from '@remirror/showcase/lib/wysiwyg';
import React, { FC, useCallback, useState } from 'react';

const WysiwygEditorWithContent: FC = () => {
  const [state, setState] = useState<EditorState<SchemaFromExtensions<WysiwygExtensions>> | undefined>();

  const onStateChange = useCallback(({ newState }: RemirrorStateListenerParams<WysiwygExtensions>) => {
    setState(newState);
    console.log('state from onStateChange', newState);
  }, []);

  return (
    <ExampleWysiwygEditor
      initialContent={WYSIWYG_SHOWCASE_CONTENT}
      value={state}
      onStateChange={onStateChange}
      suppressHydrationWarning={true}
    />
  );
};
WysiwygEditorWithContent.displayName = 'WysiwygEditorWithContent';

export default WysiwygEditorWithContent;
