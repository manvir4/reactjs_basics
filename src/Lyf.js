import React from "react";
class Lyf extends React.Component {
 constructor() {
   super()
   this.state = {}
 }
 componentWillMount() {
        console.log('Hi from before rendering')
        }
        componentDidMount() {
        console.log('bye from after Mounting')
        }
    render() {

        return(
           <div>
            <p>hello</p>
    </div> 
        )
    }
}
    export default Lyf;