'use strict'

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            input: "",
            formula: "",
            calc: []
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event){
        switch(event.target.id){
            case "zero":
                this.setState({
                    input: this.state.input + event.target.innerHTML,
                    formula: this.state.formula + event.target.innerHTML
                });
                break;
            case "one":
                this.setState({
                    input: this.state.input + event.target.innerHTML,
                    formula: this.state.formula + event.target.innerHTML
                });
                break;
            case "two":
                this.setState({
                    input: this.state.input + event.target.innerHTML,
                    formula: this.state.formula + event.target.innerHTML
                });
                break;
            case "three":
                this.setState({
                    input: this.state.input + event.target.innerHTML,
                    formula: this.state.formula + event.target.innerHTML
                });
                break;
            case "four":
                this.setState({
                    input: this.state.input + event.target.innerHTML,
                    formula: this.state.formula + event.target.innerHTML
                });
                break;
            case "five":
                this.setState({
                    input: this.state.input + event.target.innerHTML,
                    formula: this.state.formula + event.target.innerHTML
                });
                break;
            case "six":
                this.setState({
                    input: this.state.input + event.target.innerHTML,
                    formula: this.state.formula + event.target.innerHTML
                });
                break;
            case "seven":
                this.setState({
                    input: this.state.input + event.target.innerHTML,
                    formula: this.state.formula + event.target.innerHTML
                });
                break;
            case "eight":
                this.setState({
                    input: this.state.input + event.target.innerHTML,
                    formula: this.state.formula + event.target.innerHTML
                });
                break;
            case "nine":
                this.setState({
                    input: this.state.input + event.target.innerHTML,
                    formula: this.state.formula + event.target.innerHTML
                });
                break;
            case "decimal":
               
            case "add":
                this.state.calc.push(parseInt(this.state.input));
                this.state.calc.push("+");
                this.state.formula += "+";
                this.state.input = "";
                
                break;
            case "subtract":
                this.state.calc.push(parseInt(this.state.input));
                this.state.calc.push("-");
                this.state.formula += "-";
                this.state.input = "";
                
                break;
            case "multiply":
                this.state.calc.push(parseInt(this.state.input));
                this.state.calc.push("*");
                this.state.formula += "*";
                this.state.input = "";
                
                break;
            case "divide":
                this.state.calc.push(parseInt(this.state.input));
                this.state.calc.push("/");
                this.state.formula += "/";
                this.state.input = "";
                
                break;
            case "equals":
                this.state.calc.push(parseInt(this.state.input));
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
                console.log(this.state.total);
;               break;
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
