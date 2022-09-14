
import Common from "../components/Common";
import image from "../../src/image1.gif";

const Home=()=> {
    return (
      <div className="App">
      <Common name="Welcome to Home Page" imgsrc={image} visit="/service" btname="Lets start the journey" with services/>
     </div>
    );
  }
  
  export default Home;
  