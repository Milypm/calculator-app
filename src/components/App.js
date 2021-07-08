import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return(
    <React.Fragment>
      <Display />
      <ButtonPanel />
    </React.Fragment>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);