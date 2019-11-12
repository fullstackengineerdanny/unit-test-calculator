# Calculator Class

## Constructor

The constructor receives a starting number. Then, calculation methods may be chained on the new instance. Finally, a value is returned when the `equals` method is executed. Only `clear` resets the register to 0.

## Supported Operations

addition, subtraction, multiplication, division, clear, equals

## Example

1: (new Calculator(5)).equals() // 5
2: (new Calculator(5)).add(3).equals() // 8
3: (new Calculator(5)).clear().add(3).equals() // 3