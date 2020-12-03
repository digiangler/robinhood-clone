import "./App.css";

import Header from "./components/Header";
import NewsFeed from "./components/NewsFeed";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <div className="app__header">
        <Header />
      </div>
      <div className="app__body">
        <div className="app__container">
          <NewsFeed />
          {/* stats */}
          <Stats />
        </div>
        {/* Body */}
      </div>
    </div>
  );
}

export default App;
