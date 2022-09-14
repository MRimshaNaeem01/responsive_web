import { NavLink } from "react-router-dom";
// import image from "../../src/image1.gif";
const Common=(props)=> {
    return (
      <div className="App">
      <section className="d-flex align-items-center headerTop" id="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column  justify-content-center">
                  <h1 className="text1  ">{props.name}</h1>
                  <h2 className="my-3 text2">Best developer team Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos debitis eaque suscipit loribus. Aut.</h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="startBtn">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 home_img">
                  <img src={props.imgsrc} className="homeImg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
  }
  
  export default Common;
  