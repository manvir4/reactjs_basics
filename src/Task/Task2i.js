import React from "react";
class Task2i extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false  
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({visible: !this.state.visible})
    }
    render() {
        return (
            <div>
                <button onClick={this.toggleMenu}>Toggle menu</button>
            </div>
        );
    }
}
export default Task2i;
