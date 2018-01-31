let visibility = false;

const appRoot = document.getElementById('app');
const setVisibility = () =>{
  visibility = !visibility;
  render();
}

const render = () =>{
  const template = (
    <div>
      <h1> Toggle Visibility </h1>
      <button onClick={setVisibility}>
        {visibility ? "Hide Details" : "Show Details"}
      </button>
      {visibility && <p> Your changes are shown! </p>}
    </div>
  )
  ReactDOM.render(template,appRoot);
}

render();



