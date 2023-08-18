module.exports = function editor(opt = {}) {
  var el = opt.el || '#editor'
  if (typeof el == 'string') {
    el = q(el)
  }
  if (!el) return
  if (!opt.mode || opt.mode == 'js') {
    opt.mode = 'javascript'
  }
  if (opt.mode == 'html') {
    opt.mode == 'htmlmixed'
  }
  if (typeof opt.mode == 'string') {
    opt.mode = { name: opt.mode }
  }
  var options = {
    theme: 'default',
    viewportMargin: Infinity,
    lineWrapping: true,
    indentWithTabs: false,
    smartIndent: true,
    tabSize: 2,
    extraKeys: {
      Tab: (cm) => {
        if (cm.getMode().name === 'null') {
          cm.execCommand('insertTab')
        } else {
          if (cm.somethingSelected()) {
            cm.execCommand('indentMore')
          } else {
            cm.execCommand('insertSoftTab')
          }
        }
      },
      'Shift-Tab': (cm) => cm.execCommand('indentLess')
    },
    ...opt
  }
  var editor = CodeMirror.fromTextArea(el, options)
  editor.on('change', function () {
    el.value = editor.getValue()
  })
  el.editor = editor
}
