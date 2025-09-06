import React from 'react';
import { Article } from '../data/articles';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="flex flex-col gap-3 lg:gap-4 bg-gray-800 p-3 lg:p-4 rounded-lg">
      <div 
        className="bg-center bg-no-repeat aspect-video bg-cover rounded-md" 
        style={{ backgroundImage: `url("${article.image}")` }}
      ></div>
      <div className="flex flex-1 flex-col justify-between gap-3 lg:gap-4">
        <div>
          <h4 className="text-white text-base lg:text-lg font-semibold">{article.title}</h4>
          <p className="text-gray-400 text-xs lg:text-sm mt-2">
            {article.excerpt}
          </p>
          <ul className="space-y-1 lg:space-y-1.5 text-gray-400 list-disc list-inside text-xs lg:text-sm mt-2 lg:mt-3">
            <li>Enhanced onboard amenities</li>
            <li>Personalized service</li>
            <li>Focus on European waterways</li>
          </ul>
        </div>
        <a 
          className="inline-flex items-center text-blue-600 hover:text-blue-400 font-semibold text-xs lg:text-sm transition-colors" 
          href="#"
        >
          Read more
          <span className="material-symbols-outlined ml-1 text-sm lg:text-base">arrow_forward</span>
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
