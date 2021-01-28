import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        text="Hello stinky"
        image={faker.image.image()}
      />
      <CommentDetail
        author="Brad"
        timeAgo="Today at 2:00AM"
        text="you are"
        image={faker.image.image()}
      />
      <CommentDetail
        author="Craig"
        timeAgo="Yesterday at 6:00PM"
        text="Poop"
        image={faker.image.image()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
