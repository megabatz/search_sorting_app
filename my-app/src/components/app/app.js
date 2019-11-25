import React from 'react';
import SearchPanel from '../search-panel';
import ControlPanel from '../control-panel';
import SelectUser from '../select-user';
import UserList from '../user-list';


const App = () => {

    const data = [
        {img: '../img/owl.svg', nameListUser: 'Chad Snyder', ageListUser: '28', phoneListUser: '8 (629) 653-9041', id: '1'},
        {img: '../img/cat.svg', nameListUser: 'Milton Warner', ageListUser: '11', phoneListUser: '8 (435) 653-9041', id: '2'},
        {img: '../img/fox.svg', nameListUser: 'Viola Hale', ageListUser: '22', phoneListUser: '8 (543) 653-9041', id: '3'},
        {img: '../img/koala.svg', nameListUser: 'Tyler Herrera', ageListUser: '34', phoneListUser: '8 (656) 653-9041', id: '4'},
        {img: '../img/lion.svg', nameListUser: 'Gabriel Howell', ageListUser: '12', phoneListUser: '8 (123) 653-9041', id: '5'},
        {img: '../img/penguin.svg', nameListUser: 'Adelaide Jacobs', ageListUser: '34', phoneListUser: '8 (543) 653-9041', id: '6'},
        {img: '../img/pig.svg', nameListUser: 'James Diaz', ageListUser: '76', phoneListUser: '8 (875) 653-9041', id: '7'},
        {img: '../img/raccoon.svg', nameListUser: 'Vincent Sparks', ageListUser: '54', phoneListUser: '8 (986) 653-9041', id: '8'},
        {img: '../img/sheep.svg', nameListUser: 'Mark Rhodes', ageListUser: '12', phoneListUser: '8 (467) 653-9041', id: '9'},
        {img: '../img/fox.svg', nameListUser: 'Gordon Daniels', ageListUser: '32', phoneListUser: '8 (978) 653-9041', id: '10'},
        {img: '../img/koala.svg', nameListUser: 'Ella Parks', ageListUser: '43', phoneListUser: '8 (232) 653-9041', id: '11'},
        {img: '../img/lion.svg', nameListUser: 'Luis Jacobs', ageListUser: '45', phoneListUser: '8 (547) 653-9041', id: '12'},
        {img: '../img/penguin.svg', nameListUser: 'Phillip Daniels', ageListUser: '65', phoneListUser: '8 (629) 653-9041', id: '13'},
        {img: '../img/cat.svg', nameListUser: 'Hettie Soto', ageListUser: '67', phoneListUser: '8 (123) 653-9041', id: '14'}
    ];


  return (
      <div className="app">
          <SearchPanel/>
          <ControlPanel/>
          <div className="main-content">
              <SelectUser/>
              <UserList lists={data} />
          </div>
      </div>
  )
};


export default App;