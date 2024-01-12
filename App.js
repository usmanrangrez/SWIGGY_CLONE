const heading = React.createElement(
  "h1",
  { className: "heading", kuchBhi: "random" },
  "Hello world from React!"
);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [
      React.createElement(
        "h1",
        { id: "heading" },
        "Hello i am a nested Heading 1 of child 1"
      ),
      React.createElement(
        "h1",
        { id: "heading" },
        "Hello i am a nested Heading 2 of child 2"
      ),
    ],
    [
      React.createElement(
        "h1",
        { id: "heading" },
        "Hello i am a nested Heading 1 of child 2"
      ),
      React.createElement(
        "h1",
        { id: "heading" },
        "Hello i am a nested Heading 2 of child 2"
      ),
    ]
  )
);

// console.log(heading);
// console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
