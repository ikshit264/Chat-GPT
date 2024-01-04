import {Article, Brand, CTA, Feature, Navbar} from './components/index'
import {Blog,Features, Footer, Header, Possibility, WhatGPT} from './Container/index'
import app from './App.css'
import Logos from './Container/Header/Logos';

function App() {
  return (
    <div className={app}>
      <div className="gradient">
        <Navbar/>
        <Header />
      </div>
      <Logos/>
      <WhatGPT/>
      <Brand/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
