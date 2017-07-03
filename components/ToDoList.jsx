class ToDoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toDos: props.seedToDos,
      inputText: ""
    }
  }

  handleInputChange(event) {
    this.setState({ inputText: event.target.value })
  }

  handleSubmit(event) {
    this.setState({ toDos: this.state.toDos.concat(this.state.inputText) })
  }

  deleteToDo(key) {
    const newToDos = this.state.toDos.slice()

    newToDos.splice(key, 1)

    this.setState({ toDos: newToDos })
  }

  editToDo(key, toDoText) {
    const newToDos = this.state.toDos.slice()

    newToDos.splice(key, 1, toDoText)

    this.setState({ toDos: newToDos })
  }

  render(){
    return (
      <div>
        <div className="title">To-Do List</div>
        <input
          placeholder="Please enter to do..."
          value={this.state.inputText}
          onChange={this.handleInputChange.bind(this)}
        />
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
        {this.state.toDos.map((toDoText, index) => <ToDo
          key={index}
          position={index}
          toDoText={toDoText}
          deleteToDo={this.deleteToDo.bind(this)}
          editToDo={this.editToDo.bind(this)}
        />)}
      </div>
    )
  }
}
