class Calculator
{
	constructor(initial)
	{
		this.value = initial
	}

	clear()
	{
		this.value = 0
		return this
	}

	add(addend)
	{
		this.value += addend
		return this
	}

	subtract(subtrahend)
	{
		this.value -= subtrahend
		return this
	}

	multiply(factor)
	{
		this.value *= factor
		return this
	}

	divide(divisor)
	{
		if (divisor === 0)
			throw new Error("Division by 0 is not allowed.")

		this.value /= divisor
		return this
	}

	equals()
	{
		return this.value
	}
}

/*
c = new Calculator(5)
console.log(c.equals()) // 5
console.log(c.add(5).equals()) // 10
console.log(c.clear().add(2).equals()) // 2
console.log(c.subtract(1).equals()) // 1
console.log(c.multiply(20).equals()) // 20
console.log(c.divide(10).equals()) // 2
*/

module.exports = Calculator