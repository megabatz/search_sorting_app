import React, {Component} from 'react';
import './control-panel.css';

export default class ControlPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
        // this.sorted = {nameListUser: true, ageListUser: true};
        this.reset = this.reset.bind(this);
    }

    sort(type) {
    }

    reset() {
    }

    render() {
        return (
            <div className="groupBtn">
                <button className="sortByName" onClick={console.log('sortByName')}>
              <span><img src="../img/sort-name.png" alt=""/>
              </span> Sort by name
                </button>
                <button className="sortByAge" onClick={console.log('sortByAge')}>
              <span><img src="../img/sort-age.svg" alt=""/>
              </span> Sort by age
                </button>
                <button className="reset" onClick={this.reset}>
              <span><img src="../img/reset.png" alt=""/>
              </span> Reset
                </button>
            </div>
        )
    }
}