import React from 'react';
import logo from './logo.svg';

import DesktopView from './desktop/DesktopView';
import MobView from './mobile/MobView';

function App() {
  return (
    <div className="App">
       
        <DesktopView />
        {/* <MobView /> */}
    </div>
  );
}

export default App;
