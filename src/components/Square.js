import React, { Component } from 'react'

class Square extends Component{
  render(){
    return(
      <>
        <div className="square">
          {this.props.value}
          {/* value = the value of a ? that is getting passed through via value={value} */}
        </div>

      </>
    )
  }
}
export default Square
