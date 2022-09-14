import { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    text: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const formSubmitted = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname}. My Phone number is ${data.phone}. My email is ${data.email}. I want to say is ${data.text}. `
    );
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text1 text-center">Contact Us</h1>
      </div>

      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmitted}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Name"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  PHone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="0313 232322"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                />
              </div>
            

              <div className="col-12">
                <button type="submit" className="btn btn-outline-primary">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
