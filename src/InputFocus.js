import * as React from "react";
import './InputFocus.css';

const style: React.CSSProperties = {
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  textAlign: "center",
  color: "#8855FF",
  padding: "20px",
  // background: "rgba(136, 85, 255, 0.1)",
  overflow: "hidden"
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: "#6200ee",
  border: "none",
  color: "white",
  padding: "8px 8px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  marginRight: "20px",
  borderRadius: "8px",
  cursor: "pointer"
};

// The style before submit
const inputNormalStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  border: "1px solid black",
  borderRadius: "8px"
}
// The highlight style of the input field
const inputHighlightStyle: React.CSSProperties = {
  backgroundColor: "rgba(238, 51, 238, 0.39)",
  border: "1px solid red",
  borderRadius: "8px"
}

// Define type of property
interface IProps {
  text: string;
  inputsNum: number;
}

interface IState {
  style : React.CSSProperties,
  submittedVal: string
}
/*
make a 'component' of the button + inputs group, and draw different instances of it in canvas.
export it into different module(s).......is this ALREADY a module? In which case, draft an app.js
that calls multiple uses of it, to build the array of groups

*/

export default class InputFocus extends React.Component<IProps, IState> {

  constructor(props : IProps){
    super(props);
    // set initial state
    this.state = {
      style: inputNormalStyle,
      submittedVal: ""
    }
  }

  inputRef =  React.createRef();
  // Set default properties
  static defaultProps = {
    text: "",
    inputsNum: 0,
  };

  changeFocus = () => {
    for(let inputEle of document.getElementsByClassName("input_"+ this.props.text)) {
      inputEle.value = "";
    }
    
    const inputNode = this.inputRef.current;
    inputNode.value = "";
    inputNode.focus();

    this.setState({
      style: inputNormalStyle,
    })
  }

  handleSubmit = (evt) => {
    if(evt.key === 'Enter'){ // If the Enter key is pressed only
      if (evt.target.value !== "") {
        for(let inputEle of document.getElementsByClassName("input_"+ this.props.text)) {
          inputEle.value = evt.target.value;
        }
        this.setState({
          style: inputHighlightStyle,
        })
      }
    }
  }

  createInputs = () => {
    let inputFields = []

    // Outer loop to create parent
    for (let i = 0; i < this.props.inputsNum ; i++) {
      inputFields.push( 
        <input
          key={this.props.text + "_input_" + i}
          type="text"
          style={this.state.style}
          className={"input input_" + this.props.text} 
          id="focus"
          ref={this.inputRef}
          onKeyPress={this.handleSubmit}
        />);
    }
    return inputFields;
  }

  render() {
    return (
      <div className="button" style={style}>
        <button
          type="button"
          style={buttonStyle}
          onClick={this.changeFocus}>
          {this.props.text}
        </button>
        {
          this.createInputs()
        }
      </div>
    );
  }
}
