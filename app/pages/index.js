var editor = require(process.cwd() + '/index.js')

module.exports = async function ($) {
  return /* HTML */ `<textarea id="editor"></textarea>
    <script>
      window.editor = ${editor}
      editor()
    </script>`
}
