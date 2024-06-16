<template>
  <div ref="editor" style="height: 500px; width: 500px; text-align: left"></div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { EditorView, basicSetup } from "codemirror";
import { EditorState } from "@codemirror/state";
import { javascript } from "@codemirror/lang-javascript";

export default {
  name: "CodeMirrorEditor",
  setup() {
    const editor = ref(null);
    let editorView = null;

    onMounted(() => {
      const initialState = EditorState.create({
        doc: "// Ваш початковий код тут",
        extensions: [
            basicSetup
        ]
      });
      editorView = new EditorView({
        state: initialState,
        parent: editor.value,
        extensions: [javascript()],

      });
      
      console.log('editor ====',editor.value)
    });

    onBeforeUnmount(() => {
      if (editorView) {
        editorView.destroy();
      }
    });

    return {
      editor,
    };
  },
};
</script>

<style>
/* Додаткові стилі для редактора, якщо потрібно */
</style>
