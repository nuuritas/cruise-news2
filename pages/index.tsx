import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import FeaturedArticle from '../components/FeaturedArticle';
import FilterButtons from '../components/FilterButtons';
import ArticleCard from '../components/ArticleCard';
import Footer from '../components/Footer';
import { articles, categories } from '../data/articles';

const Home: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const featuredArticle = articles.find(article => article.featured) || articles[0];
  
  const filteredArticles = useMemo(() => {
    if (activeCategory === 'All') {
      return articles.filter(article => !article.featured);
    }
    return articles.filter(article => 
      article.category === activeCategory && !article.featured
    );
  }, [activeCategory]);

  return (
    <>
      <Head>
        <title>Cruise News Digest - Latest Cruise Industry News</title>
        <meta name="description" content="Stay updated with the latest news from the cruise industry" />
      </Head>
      
      <div className="relative flex size-full min-h-screen flex-col">
        <div className="flex-grow">
          <Header />
          
          <main className="px-4 sm:px-6 lg:px-10 xl:px-20 2xl:px-40 py-6 lg:py-8">
            <div className="mx-auto max-w-7xl">
              <section className="mb-8 lg:mb-12">
                <h2 className="text-white text-2xl lg:text-3xl font-bold tracking-tight mb-4 lg:mb-6">Top Stories</h2>
                <FeaturedArticle article={featuredArticle} />
              </section>
              
              <section>
                <h2 className="text-white text-xl lg:text-2xl font-bold tracking-tight mb-4 lg:mb-6">Recent Articles</h2>
                <FilterButtons 
                  activeCategory={activeCategory}
                  onCategoryChange={setActiveCategory}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </section>
            </div>
          </main>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default Home;
