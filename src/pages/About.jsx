
import Common from "../components/Common";
import image from "../../src/image2.gif";


const About=()=> {
    return (
      <div className="App">
     <Common name="Welcome to About Page" imgsrc={image} visit="/contact" btname="Contact Us Now"/>
    </div>
    );
  }
  
  export default About;
  