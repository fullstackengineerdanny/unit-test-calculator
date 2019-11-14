const Calculator = require('./rpn-calculator')

const realDescribe = describe
describe = ((name, fn) => {realDescribe(name, () => {fn()})})

describe(`Calculator class that supports Reverse Polish Notation`, () =>
{
	test(`Addition is proven to work, 2 2 + is equal to 4`, () =>
	{
		expect((new Calculator()).rpn('2 2 +')).toBe(4)
	}),

	test(`Subtraction is proven to work, 12 2 - is equal to 10`, () =>
	{
		expect((new Calculator()).rpn('12 2 -')).toBe(10)
	}),

	test(`Multiplication is proven to work, 3 5 * is equal to 15`, () =>
	{
		expect((new Calculator()).rpn('3 5 *')).toBe(15)
	}),

	test(`Division is proven to work, 12 2 / is equal to 6`, () =>
	{
		expect((new Calculator()).rpn('12 2 /')).toBe(6)
	}),

	test(`Complex equations are proven to work, 1 2 + 7 - 2 * is equal to -8`, () =>
	{
		expect((new Calculator()).rpn('1 2 + 7 - 2 *')).toBe(-8)
	})
})

describe(`Prove previous functions still work`, () =>
{
	test(`Calculator objects have methods that return themselves for chaining`, () =>
	{
		expect((new Calculator(5)).clear() instanceof Calculator).toBeTruthy()
	}),

	test(`throws error when dividing by zero`, () =>
	{
		expect(() => (new Calculator(5)).divide(0)).toThrow(/Division by 0/)
	}),

	test(`has a method \`clear\` to reset the value`, () =>
	{
		expect((new Calculator(5)).clear).toBeDefined()
	}),

	test(`has a method \`add\` which increases the value`, () =>
	{
		expect((new Calculator(5)).add).toBeDefined()
	}),

	test(`has a method \`subtract\` which decreases the value`, () =>
	{
		expect((new Calculator(5)).subtract).toBeDefined()
	}),

	test(`has a method \`multiply\` which applies a factor to the value`, () =>
	{
		expect((new Calculator(5)).multiply).toBeDefined()
	}),

	test(`has a method \`divide\` which applies a measure to the value`, () =>
	{
		expect((new Calculator(5)).divide).toBeDefined()
	}),

	test(`has a getter on \`register\` called \`equals\``, () =>
	{
		expect((new Calculator(5)).equals).toBeDefined()
	}),

	test(`\`equals()\` returns the current value, initial value is 5`, () =>
	{
		expect((new Calculator(5)).equals()).toBe(5)
	}),

	test(`\`clear()\` resets the value to zero`, () =>
	{
		expect((new Calculator(5)).clear().equals()).toBe(0)
	}),

	test(`\`add(10)\` adds ten to the initial value of five to equal 15`, () =>
	{
		expect((new Calculator(5)).add(10).equals()).toBe(15)
	}),

	test(`\`subtract(4)\` subtracts four from the initial value of five to equal one`, () =>
	{
		expect((new Calculator(5)).subtract(4).equals()).toBe(1)
	}),

	test(`\`multiply(3)\` multiplies the initial value of five by three to equal 15`, () =>
	{
		expect((new Calculator(5)).multiply(3).equals()).toBe(15)
	}),

	test(`\`divide(5)\` divides the initial value of five by five to equal one`, () =>
	{
		expect((new Calculator(5)).divide(5).equals()).toBe(1)
	}),

	test(`supports complex calculations because chaining is supported, so (5 + 10) * 2 = 30`, () =>
	{
		expect((new Calculator(5)).add(10).multiply(2).equals()).toBe(30)
	})
})