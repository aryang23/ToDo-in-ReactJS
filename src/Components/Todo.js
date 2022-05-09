import React, { Component } from 'react'

class Todo extends Component {
    constructor(){
        super();
        this.state = {
            tasks:[{task:'Check Mail', id:1}, {task:'Read Article', id:2}, {task:'Complete HW', id:3}],
            currTask : ""
        }
    }

  handleChange=(e)=>{
      this.setState({
          currTask:e.target.value
      })
  }
  handleSubmit=()=>{
      this.setState({
          tasks:[...this.state.tasks, {task:this.state.currTask, id:this.state.tasks.length+1}],
          currTask:""
      })
  }
  handleDelete=(id)=>{
      let newArr = this.state.tasks.filter((taskObj)=>{
          return taskObj.id != id
      })
      this.setState({
          tasks:[...newArr]
      })
  }
  render() {
    return (
      <div>
          <input type="text" value={this.state.currTask} onChange={this.handleChange}/>
          <button onClick={this.handleSubmit}>Submit</button>
          <ui>
          {
              this.state.tasks.map((taskObj)=>(
                  <div key={taskObj.id}>
                      <p>{taskObj.task}</p>
                      <button onClick={()=>this.handleDelete(taskObj.id)}>Delete</button>
                  </div>
              ))
          }
          </ui>
      </div>
    )
  }
}

export default Todo;

//Arrays, Objects change will be immutable