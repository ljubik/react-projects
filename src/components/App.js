import React from 'react';
import Article from './Article'
import articles from './fixtures'

function App() {
  return(
      <div>
          <h1>App name</h1>
          <Article article={articles[0]}/>
          <Article article={articles[1]}/>
      </div>
  )
}




// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App
