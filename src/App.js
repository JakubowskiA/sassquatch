import "./App.css";

function App() {
  return (
    <div className="App">
      <body>
        <header className="App-header">Sassquatch</header>
        <img src="sasquatch.png" />
        <p className="much">Much sass.</p>
        <p className="very">Very squatch.</p>
        <p className="wow">Wow.</p>

        <div>
          <p className="much">second smaller sassquatch</p>
          <img src="sasquatch.png" />

          <p className="very">Smaller but no less sassy.</p>
          <p className="wow">Wow.</p>
        </div>
      </body>
    </div>
  );
}

export default App;
