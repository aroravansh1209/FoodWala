import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            count : 0,
            count2 :1
        }
    }



render(){   

    const{name} = this.props;
    const{count} = this.state

    return (<div className="user-card">
        <h1>Count = {count}</h1>
        <button onClick={() =>{
            this.setState({
                count : this.state.count + 1
            })
        }}>Count Increaase</button>
        <button onClick={() => {
            this.setState({
                count : this.state.count - 1
            })
        }}>Count Decrease</button>
        <h2>Name : {name}</h2>
        <h3>Location : Jodhpur</h3>
        <h4>Contact : @aroravansh</h4>
    </div>
    )
  }
}

export default UserClass;