import {createRoot} from 'react-dom/client'

 import {App} from './App'

let root = document.querySelector('#root') as Element;
createRoot(root).render(<App/>)