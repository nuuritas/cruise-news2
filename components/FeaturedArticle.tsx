import React from 'react';
import { Article } from '../data/articles';

interface FeaturedArticleProps {
  article: Article;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
      <div 
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg" 
        style={{ backgroundImage: `url("${article.image}")` }}
      ></div>
      <div className="flex flex-col gap-3 lg:gap-4">
        <h3 className="text-white text-xl lg:text-2xl font-bold leading-tight">{article.title}</h3>
        <p className="text-gray-300 text-sm lg:text-base">
          {article.excerpt}
        </p>
        <ul className="space-y-1.5 lg:space-y-2 text-gray-400 list-disc list-inside text-sm lg:text-base">
          <li>Eco-friendly propulsion system</li>
          <li>Expanded and luxurious suite options</li>
          <li>State-of-the-art interactive entertainment</li>
        </ul>
        <a 
          className="inline-flex items-center text-blue-600 hover:text-blue-400 font-semibold transition-colors mt-2 text-sm lg:text-base" 
          href="#"
        >
          Read original article
          <span className="material-symbols-outlined ml-1">arrow_forward</span>
        </a>
      </div>
    </div>
  );
};

export default FeaturedArticle;
