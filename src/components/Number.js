import React from 'react';

class Number extends React.Component {
    onClick = (event) =>{
        const num = event.target.id;
        this.props.update(num)
}
    render() {
        return (
            <div className="grid-container">
                <button className="grid-item ac-2 color-ari" id='-' onClick={(event) => this.onClick(event)}>-</button>
                <button className="grid-item ac-1 color-ari" id='+' onClick={(event) => this.onClick(event)}>+</button>
                <button className="grid-item ac-3 color-ari" id='*' onClick={(event) => this.onClick(event)}>×</button>
                <button className="grid-item ac-4 color-ari" id='/' onClick={(event) => this.onClick(event)}>÷</button>
                <button className="grid-item ac1 wid equal color-ari" id='=' onClick={(event) => this.onClick(event)}>=</button>
                <button className="grid-item ac-5 color-rul" id='AC' onClick={(event) => this.onClick(event)}>AC</button>
                <button className="grid-item ac-5 color-rul" id='+/-' onClick={(event) => this.onClick(event)}>+/-</button>
                <button className="grid-item ac-5 color-rul" id='%' onClick={(event) => this.onClick(event)}>%</button>
                <button className="grid-item ac-5 color-num" id="1" onClick={(event) => this.onClick(event)}>1</button>
                <button className="grid-item ac-5 color-num" id="2" onClick={(event) => this.onClick(event)}>2</button>
                <button className="grid-item ac-4 color-num" id="3" onClick={(event) => this.onClick(event)}>3</button>
                <button className="grid-item ac-4 color-num" id="4" onClick={(event) => this.onClick(event)}>4</button>
                <button className="grid-item ac-3 color-num" id="5" onClick={(event) => this.onClick(event)}>5</button>
                <button className="grid-item ac-3 color-num" id="6" onClick={(event) => this.onClick(event)}>6</button>
                <button className="grid-item ac-2 color-num" id="7" onClick={(event) => this.onClick(event)}>7</button>
                <button className="grid-item ac-2 color-num" id="8" onClick={(event) => this.onClick(event)}>8</button>
                <button className="grid-item ac-1 color-num" id="9" onClick={(event) => this.onClick(event)}>9</button>
                <button className="grid-item ac-1 color-num" id="0" onClick={(event) => this.onClick(event)}>0</button>
                <button className="grid-item wide point color-num" id="." onClick={(event) => this.onClick(event)}>.</button>
            </div>
        );
    }
}

export default Number;