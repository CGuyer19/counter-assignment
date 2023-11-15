import { render, fireEvent } from '@testing-library/react' //Testing library
import Counter from '../components/Counter';

let comp //Declaring variable to load in counter component

beforeEach(() => {
  // Render the Counter component here
  comp = render(<Counter />);
});

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const { getByText } = comp;
  const counterMessage = getByText('Counter'); //https://testing-library.com/docs/queries/bytext/
  expect(counterMessage).toBeInTheDocument(); 
  //In testing library to see if component counterMessage is in the Doc https://testing-library.com/docs/guide-disappearance/
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const { getByTestId } = comp;
  const countElem = getByTestId('count'); //https://testing-library.com/docs/queries/bytestid
  expect(countElem).toHaveTextContent('0');
  //In testing library to see if the texr has a match of 0 https://stackoverflow.com/questions/68295232/react-testing-library-tohavetextcontent-exact-match
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const { getByText, getByTestId } = comp;
  const buttonInc = getByText('+');
  const countElem = getByTestId('count');

  fireEvent.click(buttonInc); //https://testing-library.com/docs/dom-testing-library/api-events

  expect(countElem).toHaveTextContent('1');
});

test('clicking - decrements the count', () => { //same as increment but with a minus 
  // Complete the unit test below based on the objective in the line above
  const { getByText, getByTestId } = comp;
  const buttonDec = getByText('-');
  const countElem = getByTestId('count');

  fireEvent.click(buttonDec);

  expect(countElem).toHaveTextContent('-1'); 
});
