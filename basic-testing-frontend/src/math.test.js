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
