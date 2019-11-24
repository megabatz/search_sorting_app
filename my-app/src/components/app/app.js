import React from 'react';
import SearchPanel from '../search-panel';
import ControlPanel from '../control-panel';
import SelectUser from '../select-user';
import UserList from '../user-list';


const App = () => {
  return (
      <div className="app">
          <SearchPanel/>
          <ControlPanel/>
          <div className="main-content">
              <SelectUser/>
              <UserList/>
          </div>
      </div>
  )
};


export default App;