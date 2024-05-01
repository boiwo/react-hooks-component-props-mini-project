

import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList'; // Import the ArticleList component
import blogData from '../data/blog'; // Import the blog data

const App = () => {
  const { name, image, about, articles } = blogData;

  return (
    <div>
      <Header name={name} />
      <About image={image} about={about} />
      <ArticleList articles={articles} /> {/* Pass the articles data as a prop */}
      {/* Other content of your app */}
    </div>
  );
};

export default App;