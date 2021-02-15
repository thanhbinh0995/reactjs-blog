import React from 'react';

function ListArticles(props) {
    const { articles } = props;

    return articles.map((article, index) => (
        <div className="post-preview" key={index}>
            <a className="preview-link" href={`/article/${article.slug}`}>
                <h2 className="post-title">{article.title}</h2>
                <h3 className="post-subtitle">{article.description}</h3>
            </a>
            <p className="post-meta">
                Posted by <a href="#">{article.author.username}</a>
                on {new Date(article.createdAt).toUTCString()}
            </p>
        </div>
    ));
}

export default ListArticles;
