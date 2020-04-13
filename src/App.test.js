import React from 'react';
import { mount, shallow } from 'enzyme';
import { render, findByText } from "@testing-library/react"
import App, { EXCHANGE_RATES } from './App';
import { MockedProvider, wait } from "@apollo/react-testing"
import { act } from 'react-dom/test-utils';

const mocks = [
  {
    request: {
      query: EXCHANGE_RATES
    },
    result: {
      error: "bla",
      data: {
        rates: [
          {
            currency: "AED",
            rate: "3.673"
          }
        ]
      }
    }
  }
]

 // test("Renders loading text",  () => {
 //   const wrapper = render(
 //     <MockedProvider mocks={mocks} addTypename={false}>
 //       <App/>
 //     </MockedProvider>
 //   )
 //   expect(wrapper.getByText(/Loading.../i).textContent).toBe("Loading...");
 // })

 // test("Renders loading text", async () => {
 //   const wrapper = render(
 //     <MockedProvider mocks={mocks} addTypename={false}>
 //       <App/>
 //     </MockedProvider>
 //   )

 //   await act(async () => {
 //     await wait(0)
 //   })

 //   expect(wrapper.getByText(/Loading.../i).textContent).toBe("Loading...");
 // })


// test('This works', async () => {
//   let wrapper
//   wrapper = await act(async () => {
//     mount(
//       <MockedProvider mocks={mocks} addTypename={false}>
//         <App />
//       </MockedProvider>
//     );
//     await wait(0)
//     wrapper.update()
//   })



//   console.log(wrapper.debug())
// });

test('This doesnt work with Shallow and wrappingComponent', async () => {
  function wrappingComponent(props) {
    return (
      <MockedProvider mocks={mocks} addTypename={false}>
        {props.children}
      </MockedProvider>
    )
  }

  const wrapper = shallow(
    <App />,
    {
      wrappingComponent: wrappingComponent,
    }
  );

  console.log(wrapper.getWrappingComponent().debug())
});
