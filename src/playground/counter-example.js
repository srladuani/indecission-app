let count = 0;
const addOne = () => {
  count++;
  renderCountApp();
};
const minusOne = () => {
  count --;
  renderCountApp();
};
const reset = () => {
  count = 0;
  renderCountApp();
};



const renderCountApp = () =>{
  const templateTwo = (
    <div>
      <h1> count: {count} </h1>
      <button onClick={addOne}> + 1 </button>
      <button onClick={minusOne}> - 1</button>
      <button onClick={reset}> Reset</button>
    </div>
  )
  ReactDOM.render(templateTwo, appRoot);
}
renderCountApp();