import Header from "./component/Header";
import Color from "./component/Color";

// App function 
function App() {

  // Universal background styling
  const myStyle = {
    backgroundImage: "url('/background.jpg')",
    minHeight: '100vh', 
    width: '100vw', 
    backgroundSize: 'auto', 
    backgroundPosition: 'center', 
    backgroundRepeat: 'repeat', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  //main function in App
  return (
    <div style={myStyle}>
      <Header />
      <Color />
    </div>
  );
}

export default App;
