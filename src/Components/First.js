import React from "react";
import Person from "./Person"

class First extends React.Component{
    state = {
       person : [
           {id : 1, name : "John", age : 24},
           {id : 2, name : "Stephnie", age : 22},
           {id : 3, name : "Maria", age : 21}
       ]
   }
   render(){
       return(
           <div>
               <h1>This is First React App</h1>
               <Person id = {this.state.person[0].id} name = {this.state.person[0].name} age = {this.state.person[0].age}/>
               <Person id = {this.state.person[1].id} name = {this.state.person[1].name} age = {this.state.person[1].age}>Details</Person>
               <Person id = {this.state.person[2].id} name = {this.state.person[2].name} age = {this.state.person[2].age}>Meta data</Person>
           </div>
       )
   }
}
export default First;