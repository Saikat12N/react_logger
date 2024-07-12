import fs from 'fs';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './component/Counter';

beforeAll(() => {
  // Write test cases to test_report.txt before running tests
  fs.writeFileSync('test_report.txt', 'List of Test Cases:\n');
  testcases.forEach(testcase => {
    fs.appendFileSync('test_report.txt', `${testcase}\n`);
  });
  fs.appendFileSync('test_report.txt', '---------------------------\n');
});

const testcases = [
  '1-renders counter component with initial count value',
  '2-increments count value when increase button is clicked',
  '3-decrements count value when decrease button is clicked',
  '4-resets count value to 0 when reset button is clicked'
];

describe('Counter Component', () => {
  test('1-renders counter component with initial count value', () => {
    const { getByTestId } = render(<Counter />);
    const countElement = getByTestId('count');
    expect(countElement.textContent).toBe('Count: 0');
    writeTestResult('1-renders counter component with initial count value', true);
  });

  test('2-increments count value when increase button is clicked', () => {
    const { getByTestId } = render(<Counter />);
    const increaseButton = getByTestId('increase-button');
    const countElement = getByTestId('count');
    fireEvent.click(increaseButton);
    expect(countElement.textContent).toBe('Count: 1');
    writeTestResult('2-increments count value when increase button is clicked', true);
  });

  test('3-decrements count value when decrease button is clicked', () => {
    const { getByTestId } = render(<Counter />);
    const decreaseButton = getByTestId('decrease-button');
    const countElement = getByTestId('count');
    fireEvent.click(decreaseButton);
    expect(countElement.textContent).toBe('Count: -2');
    writeTestResult('3-decrements count value when decrease button is clicked', true);
  });

  test('resets count value to 0 when reset button is clicked', () => {
    const { getByTestId } = render(<Counter />);
    const increaseButton = getByTestId('increase-button');
    const resetButton = getByTestId('reset-button');
    const countElement = getByTestId('count');
    fireEvent.click(increaseButton);
    fireEvent.click(resetButton);
    expect(countElement.textContent).toBe('Count: 0');
    writeTestResult('4-resets count value to 0 when reset button is clicked', true);
  });
});

function writeTestResult(testName, passed) {
  const result = `${passed ? 'Passed' : 'Failed'} :    ${testName}. `;
  fs.appendFileSync('test_report.txt', result + '\n');
}
