import React from 'react';
import { Link } from 'react-router-dom';

function ListArticles(props) {
    const { articles } = props;
    return articles.map((article, index) => (
        <div className="post-preview" key={index}>
            <Link to={`/article/${article.slug}`} className="preview-link">
                <h2 className="post-title">{article.title}</h2>
                <h3 className="post-subtitle">{article.description}</h3>
            </Link>
            <p className="post-meta">
                Posted by <a href="#">{article.author.username}</a>
                on {new Date(article.createdAt).toUTCString()}
            </p>
        </div>
    ));
}

export default ListArticles;
