import { it, expect } from 'vitest';
import { transformToNumber } from './numbers';

it('should transform a string number to a number type', () => {
  // Arrange
  const number = '1';
  // Act
  const result = transformToNumber(number);
  // Assert
  expect(result).toBeTypeOf('number');
});

it('should transform a string number to a number value', () => {
  // Arrange
  const number = '1';
  // Act
  const result = transformToNumber(number);
  // Assert
  expect(result).toBe(+number);
});

it('should yield NaN for non-transformable values', () => {
  // Arrange
  const number = 'one';
  const number2 = 'two';
  // Act
  const result = transformToNumber(number);
  const result2 = transformToNumber(number2);
  // Assert
  expect(result).toBeNaN();
  expect(result2).toBeNaN();
});

it('should yield NaN when not providing a number', () => {
  // Arrange
  // Act
  const result = transformToNumber();
  // Assert
  expect(result).toBeNaN();
});
