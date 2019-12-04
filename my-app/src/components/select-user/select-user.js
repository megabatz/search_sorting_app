import React, {Component} from 'react';
import './select-user.css';

export default class SelectUser extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="WrapSelectUser">
                <div className="user">
                    <div className="img_user">
                        <img src="../img/owl.svg" alt=""/>
                    </div>
                    <div className="name_user">
                        <h2>Chad Snyder</h2>
                    </div>
                </div>
                <div className="description_user">
                    <div className="age_user border">
                        <p>Age:</p>
                        <p>28</p>
                    </div>
                    <div className="fav_animal_user border">
                        <p>Favorite animal:</p>
                        <p>owl</p>
                    </div>
                    <div className="phone_user border">
                        <p>Phone:</p>
                        <p>8 (629) 653-9041</p>
                    </div>
                </div>
                <div className="favorite_phrase">
                    <p><strong>Favorite phrase:</strong> Owmeco jen be tezpoksim vojuz parro vuri da ce wioveis ko
                        hojmaso ahe civ bapdedam.</p>
                </div>
            </div>
        )
    }

}

