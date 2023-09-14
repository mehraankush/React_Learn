import React, {Component} from 'react'

class FormHandling extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comment:'',
         framework: 'React',
      }
    }

    handleChange = (event) => {
      this.setState({
        username: event.target.value
      })
    }
    changeComment = (event) => {
      this.setState({
        comment: event.target.value
      })
    }

    handleTopic = (event) => {
        this.setState({
            framework: event.target.value
        })
    }
    handleSubmit = (event) => {
       alert(`${this.state.username} ${this.state.comment} ${this.state.framework}`)
       event.preventDefault();
    }
    
    render() {
        const { comment, username, framework } = this.state
    return (
    <div>
        <form onSubmit={this.handleSubmit}>
            <h1>Username</h1>
            <input type="text" value={username}  onChange={this.handleChange} />
            <h1>Comment</h1>
            <div> <textarea value={comment} onChange={this.changeComment}/></div> 
        
        <div>
            <lable>Topic</lable>
            <select value={framework} onChange={this.handleTopic}>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                <option value="Vue">Vue</option>
            </select>
        </div>
            <button>Submit</button>
       
        </form>
    </div>
  )
 }
}

export default FormHandling