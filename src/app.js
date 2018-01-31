class IndecissionApp extends React.Component{
  
  render(){
    const title = "Indecission App";
    const subtitle="Put your life in the hands of computer";
    const options = ["Option 1","Option 2","Option 3"];
    return (
      <div> 
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    );
  }
}
class Header extends React.Component{

  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component{
  handleAction(){
    alert("handleAction");
  }
  render(){
    return(
      <div>
        <button onClick={this.handleAction}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component{
  constructor(props){
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
   handleRemoveAll() {
    console.log(this.props.options)
  }
  render(){
    return(
      <div>
        <button onClick={this.handleRemoveAll}> Remove All </button>
        <ol>
          {
            this.props.options.map((option) =>{
              return <Option key={option} option={option}/>
            })
          }
        </ol>
      </div>
    );
  }
}

class Option extends React.Component{
  render(){
    return (
      <li key={this.props.option}>{this.props.option}</li>
    );
  }
}

class AddOption extends React.Component{
  handleAddOption(e){
    e.preventDefault();
    const option = e.target.option.value;
    if(option){
      e.target.option.value = '';
      alert(option);
    }
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>AddOption</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecissionApp/>,document.getElementById('app'));