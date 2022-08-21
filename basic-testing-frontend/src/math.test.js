import { expect, it } from 'vitest';
import { add } from './math';

it('should summarze all number values in an array', () => {
  // Arrange
  const numbers = [1, 2, 3];
  // Act
  const result = add(numbers);
  // Assert
  const expectedResult = numbers.reduce((prev, cur) => prev + cur, 0);
  expect(result).toBe(expectedResult);
});

it('should yield NaN if atleast one invalid number is provided', () => {
  // Arrange
  const numbers = ['invalid', 1];
  // Act
  const result = add(numbers);
  // Assert
  expect(result).toBeNaN();
});

it('should yield a correct sum if an array of numberic string values is provided', () => {
  // Arrange
  const numbers = ['1', '2', '3'];
  // Act
  const result = add(numbers);
  // Assert
  const expectedResult = numbers.reduce((prev, cur) => +prev + +cur, 0);
  expect(result).toBe(expectedResult);
});

it('should yield 0 if an empty array is provided', () => {
  // Arrange
  const numbers = [];
  // Act
  const result = add(numbers);
  // Assert
  expect(result).toBe(0);
});

it('should throw an error if no value is passed into the function', () => {
  const resultFn = () => {
    add();
  };
  expect(resultFn).toThrow();
});

it('should throw an error if provided with multiple arguments instead of an array', () => {
  // Arrange
  const num1 = 1;
  const num2 = 2;
  // Act
  const resultFn = () => {
    add(num1, num2);
  };
  // Assert
  expect(resultFn).toThrow();
});
