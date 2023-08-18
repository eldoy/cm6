# cm6
CodeMirror 6 implementation

### Install

Clone this repo:
```
git clone https://github.com/eldoy/cm6.git
cd cm6
npm install
```

### Build

Edit `editor.mjs` and run `npm run pack`

Include the `editor.js` file on your page:

```html
<script src="editor.js">
```

### Usage

```html
<div id="editor"></div>
<script>
  var editor = new EditorView({
    extensions: window.extensions,
    parent: document.querySelector('#editor')
  })
</script>
```

### License
MIT Licensed. Enjoy!

Created by [Eldøy Projects](https://eldoy.com)
