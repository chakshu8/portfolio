import React, { Component } from "react";
class Projects extends Component {
  state = {};
  render() {
    return (
      <div>
        <section id="projects">
          <div className="container">
            <div className="flex">
              <h1>App I've Built</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Explicabo facilis repellat ab cupiditate alias vero aliquid
                obcaecati quisquam fuga dolore.
              </p>
            </div>
            <a href="">
              <div className="flex">
                <img alt="gallery" src=""></img>
                <div>
                  <h2>subtitle</h2>
                  <h1>title</h1>
                  <p>discription</p>
                </div>
              </div>
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;
