import { EditorView, basicSetup } from 'codemirror'
import { javascript } from '@codemirror/lang-javascript'

window.extensions = [basicSetup, javascript()]
window.EditorView = EditorView
