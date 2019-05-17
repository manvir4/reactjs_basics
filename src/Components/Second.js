
import React from "react";
function Second(props) {
     const onBlur = () => {
        console.log('blurred');
      }
      const warn = () => {
        alert('please login')
      }
      const btnStyle = {
        color: 'Orange' ,
        backgroundColor: 'black'
      }
            return (
                <div>
                    <h1>Event handler</h1>
                    <button onClick={onBlur}>Click</button>  <br />
                    <button onClick={warn} style={btnStyle}>Click</button>  <br />
                    <a href="https://reactjs.org" onClick={onBlur}>Click me</a>
                </div>
            )
        }

        export default Second;