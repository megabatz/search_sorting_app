import React from 'react';
import './control-panel.css';

export default class ControlPanel extends Comment {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="groupBtn">
                <button className="sortByName"><span><img src="../img/sort-name.png" alt=""/></span> Sort by name</button>
                <button className="sortByAge"><span><img src="../img/sort-age.svg" alt=""/></span> Sort by age</button>
                <button className="reset"><span><img src="../img/reset.png" alt=""/></span> Reset</button>
            </div>
        )
    }

};
