'use strict'

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            input: "",
            formula: ""
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event){
        console.log(event.target.innerHTML);
        switch(event.target.id){
            case "zero":
                if(this.state.input==="+"||this.state.input==="-"||this.state.input==="X"||this.state.input==="/"){
                    this.setState({
                        input: event.target.innerHTML,
                        formula: this.state.formula + event.target.innerHTML
                    });
                }
                else {
                    this.setState({
                        input: this.state.input + event.target.innerHTML,
                        formula: this.state.formula + event.target.innerHTML
                    });
                }
                break;
            case "one":
                if(this.state.input==="+"||this.state.input==="-"||this.state.input==="X"||this.state.input==="/"){
                    this.setState({
                        input: event.target.innerHTML,
                        formula: this.state.formula + event.target.innerHTML
                    });
                }
                else {
                    this.setState({
                        input: this.state.input + event.target.innerHTML,
                        formula: this.state.formula + event.target.innerHTML
                    });
                }
                break;
            case "two":
                if(this.state.input==="+"||this.state.input==="-"||this.state.input==="X"||this.state.input==="/"){
                    this.setState({
                        input: event.target.innerHTML,
                        formula: this.state.formula + event.target.innerHTML
                    });
                }
                else {
                    this.setState({
                        input: this.state.input + event.target.innerHTML,
                        formula: this.state.formula + event.target.innerHTML
                    });
                }
                break;
            case "three":
                if(this.state.input==="+"||this.state.input==="-"||this.state.input==="X"||this.state.input==="/"){
                    this.setState({
                        input: event.target.innerHTML,
                        formula: this.state.formula + event.target.innerHTML
                    });
                }
                else {
                    this.setState({
                        input: this.state.input + event.target.innerHTML,
                        formula: this.state.formula + event.target.innerHTML
                    });
                }
                break;
            case "four":
                if(this.state.input==="+"||this.state.input==="-"||this.state.input==="X"||this.state.input==="/"){
                    this.setState({
                        input: event.target.innerHTML,
                        formula: this.state.formula + event.target.innerHTML
                    });
                }
                else {
                    this.setState({
                        input: this.state.input + event.target.innerHTML,
                        formula: this.state.formula + event.target.innerHTML
                    });
                }
                break;
            case "five":
                if(this.state.input==="+"||this.state.input==="-"||this.state.input==="X"||this.state.input==="/"){
                    this.setState({
                        input: event.target.innerHTML,
                        formula: this.state.formula + event.target.innerHTML
                    });
                }
                else {
                    this.setState({
                        input: this.state.input + event.target.innerHTML,
                        formula: this.state.formula + event.target.innerHTML
                    });
                }
                break;
            case "six":
                if(this.state.input==="+"||this.state.input==="-"||this.state.input==="X"||this.state.input==="/"){
                    this.setState({
                        input: event.target.innerHTML,
                        formula: this.state.formula + event.target.innerHTML
                    });
                }
                else {
                    this.setState({
                        input: this.state.input + event.target.innerHTML,
                        formula: this.state.formula + event.target.innerHTML
                    });
                }
                break;
            case "seven":
                if(this.state.input==="+"||this.state.input==="-"||this.state.input==="X"||this.state.input==="/"){
                    this.setState({
                        input: event.target.innerHTML,
                        formula: this.state.formula + event.target.innerHTML
                    });
                }
                else {
                    this.setState({
                        input: this.state.input + event.target.innerHTML,
                        formula: this.state.formula + event.target.innerHTML
                    });
                }
                break;
            case "eight":
                if(this.state.input==="+"||this.state.input==="-"||this.state.input==="X"||this.state.input==="/"){
                    this.setState({
                        input: event.target.innerHTML,
                        formula: this.state.formula + event.target.innerHTML
                    });
                }
                else {
                    this.setState({
                        input: this.state.input + event.target.innerHTML,
                        formula: this.state.formula + event.target.innerHTML
                    });
                }
                break;
            case "nine":
                if(this.state.input==="+"||this.state.input==="-"||this.state.input==="X"||this.state.input==="/"){
                    this.setState({
                        input: event.target.innerHTML,
                        formula: this.state.formula + event.target.innerHTML
                    });
                }
                else {
                    this.setState({
                        input: this.state.input + event.target.innerHTML,
                        formula: this.state.formula + event.target.innerHTML
                    });
                }
                break;
            case "decimal":
                if(this.state.input==="+"||this.state.input==="-"||this.state.input==="X"||this.state.input==="/"){
                    this.setState({
                        input: event.target.innerHTML,
                        formula: this.state.formula + event.target.innerHTML
                    });
                }
                else {
                    this.setState({
                        input: this.state.input + event.target.innerHTML,
                        formula: this.state.formula + event.target.innerHTML
                    });
                }
                break;
            case "add":
                this.setState({
                    input: "+",
                    formula: this.state.formula + "+"
                });
                break;
            case "subtract":
                this.setState({
                    input: "-",
                    formula: this.state.formula + "-"
                });
                break;
            case "multiply":
                this.setState({
                    input: "X",
                    formula: this.state.formula + "*"
                });
                break;
            case "divide":
                this.setState({
                    input: "/",
                    formula: this.state.formula + "/"
                });
                break;
            case "equals":
                this.setState({
                    total: parseInt(this.state.formula),
                });
                console.log(Number("5+7"));
;                break;
        }
    }
    render() {
    
        return (
            <div>
                <h1 id="presentation">Welcome to the Javascript Calculator</h1>
                <div id="main">
                    <div id="calculator">
                        <div id="equals" onClick={this.handleClick} value="=">=</div>
                        <div id="zero" onClick={this.handleClick} value="0">0</div>
                        <div id="one" onClick={this.handleClick} value="1">1</div>
                        <div id="two" onClick={this.handleClick} value="2">2</div>
                        <div id="three" onClick={this.handleClick} value="3">3</div>
                        <div id="four" onClick={this.handleClick} value="4">4</div>
                        <div id="five" onClick={this.handleClick} value="5">5</div>
                        <div id="six" onClick={this.handleClick} value="6">6</div>
                        <div id="seven" onClick={this.handleClick} value="7">7</div>
                        <div id="eight" onClick={this.handleClick} value="8">8</div>
                        <div id="nine" onClick={this.handleClick} value="9">9</div>
                        <div id="add" onClick={this.handleClick} value="+">+</div>
                        <div id="subtract" onClick={this.handleClick} value="-">-</div>
                        <div id="multiply" onClick={this.handleClick} value="*">X</div>
                        <div id="divide" onClick={this.handleClick} value="/">/</div>
                        <div id="decimal" onClick={this.handleClick} value=",">.</div>
                        <div id="clear" onClick={this.handleClick} value="AC">AC</div>
                        <div id="display">
                            <div id="formula">{this.state.formula}</div>
                            <div id="input">{this.state.input}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Calculator />, document.getElementById("container"));
