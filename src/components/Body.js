import React from 'react';
import Button from './Button';

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: "0",
            previous: null,
            operation: null,
            lastNumber: null,
            error: false,
            newCalculation: true
        };
    }

    updateTotal = (input) => {
        let { current, previous, operation, lastNumber, error, newCalculation } = this.state;

        // Сбросить все
        if (input === 'AC') {
            this.setState({ current: "0", previous: null, operation: null, lastNumber: null, error: false, newCalculation: true });
            return;
        }

        // Обработка ввода после получения результата
        if (newCalculation && !error) {
            if (!isNaN(input)) {
                // Начать новое вычисление с введенного числа
                this.setState({ current: input, previous: null, operation: null, lastNumber: null, newCalculation: false });
                return;
            } else if (['+', '-', '*', '/', '%'].includes(input)) {
                // Начать новое вычисление с текущего результата и новой операции
                this.setState({ operation: input, previous: current, lastNumber: null, newCalculation: false });
                return;
            }
        }

        // Обработка операций
        if (['+', '-', '*', '/', '%'].includes(input)) {
            this.setState({
                operation: input,
                previous: current,
                current: "0",
                lastNumber: previous !== null ? parseFloat(current) : null
            });
            return;
        }

        // Добавление десятичной точки
        if (input === '.' && !current.includes('.')) {
            this.setState({ current: current + '.' });
            return;
        }

        // Добавление цифр
        if (input !== "." && input !== "=") {
            this.setState({ current: current === "0" ? input : current + input });
        }

        // Вычисление результата
        if (input === '=') {
            if (previous !== null && operation) {
                const num = lastNumber !== null ? lastNumber : parseFloat(current);
                const result = this.calculateResult(parseFloat(previous), num, operation);
                this.setState({ current: String(result), previous: null, lastNumber: num, error: false, newCalculation: true });
            } else if (previous === null && lastNumber !== null) {
                const result = this.calculateResult(parseFloat(current), lastNumber, operation);
                this.setState({ current: String(result), previous: null, error: false, newCalculation: true });
            }
        }
    };

    calculateResult = (num1, num2, operation) => {
        switch (operation) {
            case '+': return num1 + num2;
            case '-': return num1 - num2;
            case '*': return num1 * num2;
            case '/': return num2 !== 0 ? num1 / num2 : "Error";
            case '%': return num1 % num2;
            default: return "Error";
        }
    };

    render() {
        const { current, error } = this.state;

        return (
            <div className="back">
                <div className="background">
                    <div className="total-fon">
                        <div className="total">
                            {error ? "Ошибка: Деление на ноль" : current}
                        </div>
                    </div>
                    <Button update={this.updateTotal} />
                </div>
            </div>
        );
    }
}

export default Body;