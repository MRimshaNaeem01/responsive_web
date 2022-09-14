// import image from "../../src/image2.gif";
import Card from "../components/Card";
import Data from "../components/Data";
const Service = () => {
  return (
    <>
      <div className="App">
        <h1 className="text1 text-center">Our Service</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Data.map((val, ind) => {
                return <Card imgsrc={val.imgsrc} 
                key={ind}
                 title={val.title} 
                 Key={ind}
                 />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
