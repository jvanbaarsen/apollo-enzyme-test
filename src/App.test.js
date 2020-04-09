import React from 'react';
import { mount, shallow } from 'enzyme';
import App, { EXCHANGE_RATES } from './App';
import { MockedProvider } from "@apollo/react-testing"

const mocks = [
  {
    request: {
      query: EXCHANGE_RATES,
      variables: {
        currency: "USD"
      }
    }
  }
]

function MyProvider(props) {
  return (
    <MockedProvider mocks={mocks} addTypename={false}>
      {props.children}
    </MockedProvider>
  )
}

test('This works', () => {
  const wrapper = mount(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
    // {
    //   wrappingComponent: MyProvider
    // }
  );


  console.log(wrapper.debug())
});

test('This doesnt work', () => {
  const wrapper = shallow(
    <App />,
    {
      wrappingComponent: MyProvider
    }
  );

  console.log(wrapper.debug())
});
