import React from 'react';
import './search-panel.css'

const SearchPanel = () => {
    return (
        <div className="search">
            <input
                className="search-input"
                type="text"
                placeholder="Search people by name..."
            />
        </div>
    )
};

export default SearchPanel;