import React from 'react'
function HocComponent(Component,OtherDate){
  return class extends React.Component{
    constructor(props) {
      super(props);
      this.state={
        data:null
      }
    }
    componentDidMount(){
      this.setState({data:'hocdata'})
    }
    render(){
      return <Component data={this.state.data} {...this.props}></Component>
    }
  }
}
export default HocComponent
