const Calculator = require('./calculator')

const realDescribe = describe
describe = ((name, fn) => {realDescribe(name, () => {fn()})})

describe(`calculator`, () => test(`Calculator objects have methods that return themselves for chaining`, () => expect((new Calculator(5)).clear() instanceof Calculator).toBeTruthy()))

describe(`calculator`, () => test(`throws error when dividing by zero`, () => expect(() => (new Calculator(5)).divide(0)).toThrow(/Division by 0/)))

describe(`calculator`, () => test(`has a method \`clear\` to reset the value`, () => expect((new Calculator(5)).clear).toBeDefined()))

describe(`calculator`, () => test(`has a method \`add\` which increases the value`, () => expect((new Calculator(5)).add).toBeDefined()))

describe(`calculator`, () => test(`has a method \`subtract\` which decreases the value`, () => expect((new Calculator(5)).subtract).toBeDefined()))

describe(`calculator`, () => test(`has a method \`multiply\` which applies a factor to the value`, () => expect((new Calculator(5)).multiply).toBeDefined()))

describe(`calculator`, () => test(`has a method \`divide\` which applies a measure to the value`, () => expect((new Calculator(5)).divide).toBeDefined()))

describe(`calculator`, () => test(`has a getter on \`register\` called \`equals\``, () => expect((new Calculator(5)).equals).toBeDefined()))

describe(`calculator`, () => test(`\`equals()\` returns the current value, initial value is 5`, () => expect((new Calculator(5)).equals()).toBe(5)))

describe(`calculator`, () => test(`\`clear()\` resets the initial value to zero`, () => expect((new Calculator(5)).clear().equals()).toBe(0)))

describe(`calculator`, () => test(`\`add(10)\` adds ten to the initial value of five to equal 15`, () => expect((new Calculator(5)).add(10).equals()).toBe(15)))

describe(`calculator`, () => test(`\`subtract(4)\` subtracts four from the initial value of five to equal one`, () => expect((new Calculator(5)).subtract(4).equals()).toBe(1)))

describe(`calculator`, () => test(`\`multiply(3)\` multiplies the initial value of five by three to equal 15`, () => expect((new Calculator(5)).multiply(3).equals()).toBe(15)))

describe(`calculator`, () => test(`\`divide(5)\` divides the initial value of five by five to equal one`, () => expect((new Calculator(5)).divide(5).equals()).toBe(1)))

describe(`calculator`, () => test(`supports complex calculations because chaining is supported, so (5 + 10) * 2 = 30`, () => expect((new Calculator(5)).add(10).multiply(2).equals()).toBe(30)))