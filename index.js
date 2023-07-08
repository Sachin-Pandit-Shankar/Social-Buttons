const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <button className={`${className}`}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <div className="content-container">
      <h1 className="main-heading">Social Buttons</h1>
      <div className="button-container">
        <Button className="likeBtn" buttonText="Like" />>
        <Button className="commentBtn" buttonText="Comment" />>
        <Button className="shareBtn" buttonText="Share" />>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
