// Body.js
import React from 'react';
import Button from './Button';

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: "0",
            total2: "0",
            arithmetic: "",
            equals: "",
            error: ""
        };
    }

    updateTotal = (num) => {
        if(this.state.equals !== ""){this.setState({total: "0", total2: "0", arithmetic: "", equals: "", error: ""});}
        if (this.state.total !== "0" && (num === '-' || num === '+' || num === '/' || num === '*' || num === '%')) {
            this.setState({arithmetic: String(num)});
        } else if (num === 'AC') {
            this.setState({total: "0", total2: "0", arithmetic: "", equals: "", error: ""});
        } else if (num === '+/-') {
            if (parseFloat(this.state.total) !== 0) {
                this.setState((prevState) => ({total: String(-parseFloat(prevState.total))}));
            } else if (parseFloat(this.state.total2) !== 0) {
                this.setState((prevState) => ({total2: String(-parseFloat(prevState.total2))}));
            }
        } else if (num === '=' && this.state.total !== "0" && this.state.total2 !== "0") {
            this.calculateResult();
        } else if (num === '.') {
            if (!this.state.total.includes('.') && this.state.total2 === "0") {
                this.setState((prevState) => ({total: prevState.total + num}));
            } else if (!this.state.total2.includes('.')) {
                this.setState((prevState) => ({total2: prevState.total2 + num}));
            }
        } else {
            if (this.state.arithmetic !== "") {
                if (this.state.total2 === "0" && (num !== "." && num !== "=" && num !== '-' && num !== '+' && num !== '/' && num !== '*' && num !== '%')) {
                    this.setState({total2: num});
                } else {
                    if(num !== "." && num !== "=" && num !== '-' && num !== '+' && num !== '/' && num !== '*' && num !== '%') {
                        this.setState((prevState) => ({total2: prevState.total2 + num}));
                    }
                }
            } else {
                if (this.state.total === "0" && (num !== "." && num !== "=" && num !== '-' && num !== '+' && num !== '/' && num !== '*' && num !== '%')) {
                    this.setState({total: num});
                } else {
                    if(num !== "." && num !== "=" && num !== '-' && num !== '+' && num !== '/' && num !== '*' && num !== '%') {
                        this.setState((prevState) => ({total: prevState.total + num}));
                    }
                }
            }
        }
    };

    calculateResult = () => {
        let result;
        const num1 = parseFloat(this.state.total);
        const num2 = parseFloat(this.state.total2);
        switch (this.state.arithmetic) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    this.setState({ error: "Невозможно делить на ноль" });
                    return;
                }
                break;
            case '%':
                result = num1 % num2;
                break;
            default:
                return;
        }
        this.setState({ total: "0", total2: "0", equals: String(result), arithmetic: "", error: "" });
    };

    render() {
        return (
            <div className="back">
                <div className="background">
                    <div>{this.state.error}</div>
                    <div className="total-fon">
                        <div className="total">
                            {(this.state.arithmetic !== "") ? this.state.total2 !== '0' ? this.state.total2 : this.state.total : ((this.state.equals === "") ? this.state.total : this.state.equals)}
                        </div>
                    </div>
                    <Button total={this.state.total} update={this.updateTotal}/>
                </div>
            </div>
        );
    }
}

export default Body;