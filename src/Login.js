import React from "react";
class Login extends React.Component {
  onSubmit = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <form>
        <input placeholder="name" type="name" />
        <input placeholder="password" type="password" />
        <button onClick={this.onSubmit}>Login</button>
      </form>
    );
  }
}

export default Login;
