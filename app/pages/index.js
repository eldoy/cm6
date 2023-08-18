module.exports = async function ($) {
  return /* HTML */ `<div id="editor"></div>
    <script>
      let editor = new EditorView({
        extensions: window.extensions,
        parent: document.querySelector('#editor')
      })
      console.log(editor)
      console.log(editor.state.doc.toString())
    </script>`
}
