import React from 'react';
import { TextField } from '@rmwc/textfield';
import { Button } from '@rmwc/button';

// Import Style For Text Fields
import '@material/textfield/dist/mdc.textfield.css';
import '@material/floating-label/dist/mdc.floating-label.css';
import '@material/notched-outline/dist/mdc.notched-outline.css';
import '@material/line-ripple/dist/mdc.line-ripple.css';
// Import Style For Button
import '@material/button/dist/mdc.button.css';
// Import Theme Style
import '@material/theme/dist/mdc.theme.css';
// Import Style For Customization
import './TextFields.css';


// Import SVG Icon for Button
import buttonSvg from './icon/baseline-chat-24px.svg';

export default class TextFields extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            focused: true,
            key: "",
            backgroundColor: null
        }

        this.refs = React.createRef();
    }

    buttonClickHandler = () => {
        var firstTextField = this.refs['textRef0'];
        firstTextField.input_.focus();
    }

    handleSubmit = (e) => {
        for (let [key,textfield] of Object.entries(this.refs)){
            this.setState({
                key: key
            })
            textfield.input_.value = this.state.text;
            if (this.state.text === "") {
                textfield.label_.float(false);
                this.setState({
                    backgroundColor: "whitesmoke",
                })
            } else {
                textfield.label_.float(true);
                this.setState({
                    backgroundColor: "#ff3af2ad",
                })
            }
        }
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    arrangeFields = () => {
        let textfields = [];

        for (let i = 0; i < this.props.textfieldsNum; i++) {
            textfields.push(
                <TextField
                    style={{backgroundColor: this.state.backgroundColor}}
                    key={i}
                    className="textfield"
                    ref={"textRef" + i}
                    label={"Text Field " + i}
                    onBlur={this.handleSubmit}
                    onChange={this.handleChange}
                />
            )
        }

        return textfields;
    }

    render() {
        return (
            <div className="textfield-row">
                <Button raised theme="secondaryBg on-secondaryBg" className="svg-button" onClick={this.buttonClickHandler}>
                    <img src={buttonSvg} className="svgImg" alt="Button SVG" />
                </Button>
                {
                    this.arrangeFields()
                }
            </div>
        )
    }
}