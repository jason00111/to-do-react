class ToDo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      toDoText: props.toDoText
    }
  }

  handleInputChange (event) {
    this.setState({ toDoText: event.target.value })
    this.props.editToDo(this.props.position, this.state.toDoText)
  }

  deleteToDo () {
    this.props.deleteToDo(this.props.position)
  }

  render () {
    return (
      <div>
        <input
          value={this.state.toDoText}
          onChange={this.handleInputChange.bind(this)}
        />
        <button onClick={this.deleteToDo.bind(this)}>
          x
        </button>
      </div>
    )
  }
}
