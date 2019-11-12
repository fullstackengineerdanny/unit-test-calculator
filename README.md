# Calculator Class

## Constructor

The constructor receives a starting number. Then, calculation methods may be chained on the new instance. Finally, a value is returned when the `equals` method is executed. Only `clear` resets the register to 0.

## Supported Operations

add, subtract, multiply, divide, clear, equals

## Examples

(new Calculator(5)).equals() // 5

(new Calculator(5)).add(3).equals() // 8

(new Calculator(5)).clear().add(3).equals() // 3
