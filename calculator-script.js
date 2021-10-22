'use strict'

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            input: "0",
            formula: "",
            calc: [],
            decimal: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event){
        
        switch(event.target.id){
            case "zero":
                if(this.state.input === "0"){
                    this.setState({
                        input: "0",
                        formula: "0"
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
                if(this.state.input === "0"){
                    this.setState({
                        input: event.target.innerHTML,
                        formula: event.target.innerHTML
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
                if(this.state.input === "0"){
                    this.setState({
                        input: event.target.innerHTML,
                        formula: event.target.innerHTML
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
                if(this.state.input === "0"){
                    this.setState({
                        input: event.target.innerHTML,
                        formula: event.target.innerHTML
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
                if(this.state.input === "0"){
                    this.setState({
                        input: event.target.innerHTML,
                        formula: event.target.innerHTML
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
                if(this.state.input === "0"){
                    this.setState({
                        input: event.target.innerHTML,
                        formula: event.target.innerHTML
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
                if(this.state.input === "0"){
                    this.setState({
                        input: event.target.innerHTML,
                        formula: event.target.innerHTML
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
                if(this.state.input === "0"){
                    this.setState({
                        input: event.target.innerHTML,
                        formula: event.target.innerHTML
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
                if(this.state.input === "0"){
                    this.setState({
                        input: event.target.innerHTML,
                        formula: event.target.innerHTML
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
                if(this.state.input === "0"){
                    this.setState({
                        input: event.target.innerHTML,
                        formula: event.target.innerHTML
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
                if(this.state.decimal === false) {
                    this.setState({
                        input: this.state.input + event.target.innerHTML,
                        formula: this.state.formula + event.target.innerHTML,
                        decimal: true
                    });
                }
                else {
                    console.log("You cannot use more than one decimal separator");
                }
                break;
            case "add":
                this.state.calc.push(Number(this.state.input));
                this.state.calc.push("+");
                this.state.formula += "+";
                this.state.input = "";
                this.state.decimal = false;
                break;
            case "subtract":
                this.state.calc.push(Number(this.state.input));
                this.state.calc.push("-");
                this.state.formula += "-";
                this.state.input = "";
                this.state.decimal = false;
                break;
            case "multiply":
                this.state.calc.push(Number(this.state.input));
                this.state.calc.push("*");
                this.state.formula += "*";
                this.state.input = "";
                this.state.decimal = false;
                break;
            case "divide":
                this.state.calc.push(Number(this.state.input));
                this.state.calc.push("/");
                this.state.formula += "/";
                this.state.input = "";
                this.state.decimal = false;
                break;
            case "equals":
                this.state.calc.push(Number(this.state.input));
                console.log(this.state.calc);
                for(let i=0; i<this.state.calc.length; i++){
                    if(this.state.calc[i]==="*"){
                        this.state.total = this.state.calc[i-1] * this.state.calc[i+1];
                        this.state.calc.splice(i-1, 3, this.state.total);
                        i=0;
                    }
                    else if(this.state.calc[i]==="/"){
                        this.state.total = this.state.calc[i-1] / this.state.calc[i+1];
                        this.state.calc.splice(i-1, 3, this.state.total);
                        i=0;
                    }
                }
                for(let i=0; i<this.state.calc.length; i++){
                    if(this.state.calc[i]==="+"){
                        this.state.total = this.state.calc[i-1] + this.state.calc[i+1];
                        this.state.calc.splice(i-1, 3, this.state.total);
                        i=0;
                    }
                    else if(this.state.calc[i]==="-"){
                        this.state.total = this.state.calc[i-1] - this.state.calc[i+1];
                        this.state.calc.splice(i-1, 3, this.state.total);
                        i=0;
                    }
                }
                
                this.setState({
                    input: this.state.total
                })
                console.log(this.state.total);
                break;
            case "clear":
                this.setState({
                    total: 0,
                    input: "0",
                    formula: "",
                    calc: [],
                    decimal: false
                });
                break;
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
                        <div id="display-container">
                            <div id="output">{this.state.formula}</div>
                            <div id="display">{this.state.input}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Calculator />, document.getElementById("container"));