import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyEditorApp from './MyEditorApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MyEditorApp />, document.getElementById('root'));

serviceWorker.unregister();
