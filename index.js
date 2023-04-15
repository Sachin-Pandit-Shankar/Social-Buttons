const Button = (props) => {
  //  Write your code here.
  const { className } = props;
  return <button>{className}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <div className="content-container">
      <h1 className="main-heading">Social Buttons</h1>
      <div className="button-container">
        <button className="likeBtn">Like</button>
        <button className="commentBtn">Comment</button>
        <button className="shareBtn">Share</button>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
