import React from "react";
import person from "../images/person.jpg";
export default function Form() {
  return (
    <div>
      <div className="clr" />
      <div id="showcase">
        <div className="container">
          <br />
          <div className="info-right">
            <img src={person} alt="" />
          </div>
          <div className="name">
            <h3>Michael roy</h3>
            <p>Michaelroy@gmail.com</p>
            <p></p>
          </div>
          <div className="clr" />
          <div className="content">
            <form action="action.jsp">
              <div className="left-content">
                <br />
                <br />
                <label htmlFor="Company-name">Company-Name</label>
                <br />
                <input type="text" name="Company-name" id="Company-name" />
                <br />
                <br />
                <label htmlFor="Mobile-number">Mobile Number</label>
                <br />
                <input type="text" name="Mobile-number" id="Mobile-number" />
                <br />
                <br />
                <label htmlFor="Address">Address</label>
                <br />
                <input type="text" name="Address" id="Address" />
                <br />
                <br />
                <label htmlFor="Country">Country</label>
                <br />
                <input type="text" name="Country" id="Country" />
                <br />
                <br />
              </div>
              <div className="right-content">
                <br />
                <br />
                <label htmlFor="MC Number">MC Number</label>
                <br />
                <input type="text" name="MC Number" id="MC Number" />
                <br />
                <br />
                <label htmlFor="Email">Email Address</label>
                <br />
                <input type="email" name="Email" id="Email" />
                <br />
                <br />
                <label htmlFor="City">City</label>
                <br />
                <input type="text" name="City" id="City" />
                <br />
                <br />
              </div>
            </form>
          </div>
          <div className="clr" />
          <br />
          <a href="change.html" id="change-pass">
            Change Password
          </a>
          <br />
          <br />
          <button type="submit" className="btn">
            SUBMIT
          </button>
          <br />
          <br />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="copy">
        <h4>@brand Name | All rights are reserved.</h4>
      </div>
    </div>
  );
}
