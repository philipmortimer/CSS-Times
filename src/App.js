import './App.css';
import React from 'react';
import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import {Home} from "./Pages/Home/Home.js";
import {articles} from './Articles/ArticleList';
import { ArticleViewer } from './Articles/ArticleViewer/ArticleViewer';
import { Top } from './Pages/Home/Top.js'
import { SprayPaint } from './Games/SprayPaint.js'

import { CrosswordGame } from './Games/Crossword/Crossword';
import Quiz from './Quiz/Quiz';


function App() {
  return (
    <>
      <Top />
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Routes>  
          <Route path="/" element={<Home />} />
          <Route path="/games/crossword" element={<CrosswordGame />} />
          {getArticlePaths(articles)}
          <Route path="/Games/SprayPaint" element={<SprayPaint />} />
          <Route path="/Quiz" element={<Quiz />} />
        </Routes>
      </HashRouter>
    </>
  );

  /**
   * The article paths
   * @returns The paths used by router for each article
   */
  function getArticlePaths(articleList) {
    const paths = [];
    for (let i = 0; i < articleList.length; i++) {
      paths.push(
      <React.Fragment key={articleList[i].id}>
        <Route path={"/articles/" + articleList[i].id} 
        element={<ArticleViewer article={articleList[i]} />} /> 
      </React.Fragment>
      );
      
    }
    return paths;
  }
}

export default App;
