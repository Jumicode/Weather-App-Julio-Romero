import {  render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import App from './App';
import { store } from './app/Store/Store';
import { Provider } from 'react-redux';
import WeatherMain from './Components/WeatherMain';


describe('REACT - We test the components', () =>{
  test('We test the main component',() =>{
    const r = render(
      <Provider store={store}>
      <WeatherMain></WeatherMain>
      </Provider>
);
expect(r).toBeDefined();
});

test('should render WeatherMain component',() =>{
  const { getByTestId } = render(
    <Provider store={store}>
 <WeatherMain city="Buenos Aires" weatherData={{ temperature: 25, description: 'Sunny' }} />
    </Provider>
 
  );
  const weatherMainComponent = getByTestId('weather-main');
  expect(weatherMainComponent).toBeInTheDocument();


})





})



describe('REACT - integration test',() =>{
  test('We render the app', () =>{
    const r = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(r).toBeDefined();
  })
})


