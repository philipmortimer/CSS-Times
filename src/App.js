import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {Home} from "./Pages/Home/Home.js";
import {articles} from './Articles/ArticleList';
import { ArticleViewer } from './Articles/ArticleViewer/ArticleViewer';
import { Top } from './Pages/Home/Top.js'

function App() {
  return (
    <>
      <Top />

      <Router className="router">
        <Routes>  
          <Route path="/CSS-Times" element={<Home />} />
          {getArticlePaths(articles)}
        </Routes>
      </Router>
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
        <Route path={"/CSS-Times/articles/" + articleList[i].id} 
        element={<ArticleViewer article={articleList[i]} />} /> 
      </React.Fragment>
      );
      
    }
    return paths;
  }
}

export default App;
