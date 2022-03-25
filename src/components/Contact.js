import React, { Component } from "react";
class Contact extends Component {
  state = {};
  render() {
    return (
      <div>
        <section id="contact">
          <div className="container">
            <div>
              <iframe></iframe>
              <div>
                <div>
                  <h2>Address</h2>
                  <p>22 Mansfield Street, Newcastle Upon Tyne, NE4 5RN</p>
                </div>
                <div>
                  <h2>Email</h2>
                  <a>chakshu1996goyal@gmail.com</a>
                  <h2>Phone</h2>
                  <p>+44-07471044310</p>
                </div>
              </div>
            </div>
            <form>
              <h2>Hire Me</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              <div>
                <label>Name</label>
                <input type="text" id="text" name="text" />
              </div>
              <div>
                <label>Email</label>
                <input type="email" id="email" name="email" />
              </div>
              <div>
                <label>Message</label>
                <textarea id="message" name="message" />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
