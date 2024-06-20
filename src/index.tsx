import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil';
import RecoilNexus from 'recoil-nexus';
import App from 'src/App.tsx'
import 'src/shared/style/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <RecoilNexus />
      <App />
    </RecoilRoot>
  </React.StrictMode>,
)
