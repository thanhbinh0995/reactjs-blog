import React from 'react';
import { Link } from 'react-router-dom';

function ListWhiskies(props) {
    const { whiskies } = props;
    return whiskies.map((whisky, index) => (
        <div className="post-preview" key={index}>
            <img style={{ width: '300px', height: '300px' }} src={whisky.imageUrl} />
            <h3>{whisky.title}</h3>
        </div>
    ));
}

export default ListWhiskies;
