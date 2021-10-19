'use strict'

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            formula: ""
        };
    }
    render() {
        return (
            <div>
                <h1 id="presentation">Welcome to the Javascript Calculator</h1>
                <div id="main">
                    <div id="calculator">
                        <div id="equals">=</div>
                        <div id="zero">0</div>
                        <div id="one">1</div>
                        <div id="two">2</div>
                        <div id="three">3</div>
                        <div id="four">4</div>
                        <div id="five">5</div>
                        <div id="six">6</div>
                        <div id="seven">7</div>
                        <div id="eight">8</div>
                        <div id="nine">9</div>
                        <div id="add">+</div>
                        <div id="subtract">-</div>
                        <div id="multiply">X</div>
                        <div id="divide">/</div>
                        <div id="decimal">.</div>
                        <div id="clear">AC</div>
                        <div id="display">
                            <div id="formula">{this.state.formula}</div>
                            <div id="total">{this.state.total}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Calculator />, document.getElementById("container"));
