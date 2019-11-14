module.exports = class Calculator
{
	constructor(initial)
	{
		this.value = !initial ? 0 : initial
	}

	rpn(s)
	{
		if (!s) return 0

		let num = ''
		let result = 0
		let params = []
		let firstResult = true
		let sequence = s.trim()

		for(let i in sequence)
		{
			if (sequence[i] !== '+' && sequence[i] !== '-' && sequence[i] !== '*' && sequence[i] !== '/' && sequence[i] !== ' ')
				num += sequence[i]
			else if (num !== '')
			{
				params.push(parseInt(num))
				num = ''
			}

			if (sequence[i] === '+' || sequence[i] === '-' || sequence[i] === '*' || sequence[i] === '/')
				switch (sequence[i])
				{
					case '+':
					{
						result += params.reduce((a, b) => a + b)
						params.length = 0
						firstResult = false
					}
					break;
					case '-':
					{
						if (!firstResult)
							params.unshift(result)
						result = params.reduce((a, b) => a - b)
						params.length = 0
						firstResult = false
					}
					break;
					case '*':
					{
						if (firstResult)
							result = params.reduce((a, b) => a * b)
						else
							result *= params.reduce((a, b) => a * b)
						params.length = 0
						firstResult = false
					}
					break;
					case '/':
					{
						if (!firstResult)
							params.unshift(result)
						result = params.reduce((a, b) => a / b)
						params.length = 0
						firstResult = false
					}
					break;
				}
		}

		return result
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
