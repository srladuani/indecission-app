console.log("app is running!");
const app = {
  title: "Indecission App",
  subtitle: "Learning React.js",
  options: []
}

const numbers = [13,44,133]
const resetOptions = () =>  {
  app.options = [];
  renderTemplate();
};
const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if(option){
    app.options.push(option);
    e.target.elements.option.value = '';
    renderTemplate();
  }
}

const makeDecision = () =>{
  const randomNum = Math.floor(Math.random() * app.options.length);
  let option = app.options[randomNum];
  alert(option);
}

const appRoot = document.getElementById('app');
const renderTemplate = () =>{
  const template =(
    <div>
      <h1> {app.title} </h1> 
      {app.subtitle && <p> {app.subtitle} </p>}
      <p> {app.options.length > 0 ? "Here are your options" : "No options"} </p>
      <p> {app.options.length} </p>
      <button onClick={resetOptions}> Remove All </button>
      <button disabled={app.options.length === 0} onClick= {makeDecision}> What should I do ? </button>
      <ol>
        {
          app.options.map((option) => {
            return <li key={option}> Item: {option} </li>
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button> Add option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

renderTemplate();
