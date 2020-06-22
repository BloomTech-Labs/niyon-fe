import React from 'react';
import { shallow, } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Login from './Login';



describe('<Login /> component testing', () => {
  let component
  let onMockSubmit
  beforeEach(() => {
    onMockSubmit = () => jest.fn()
    component = shallow(<Login onSubmit={onMockSubmit} />)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should pass snaps shot testing', () => {
    expect(toJSON(component)).toMatchSnapshot()
  })

  it('should render <Login /> component correctly', () => {
    // console.log(component.debug());
    expect(component.exists()).toBe(true)
  })

  it('should render form correctly', () => {
    expect(component.find('form').exists()).toBe(true)
  })

  it('should render the div container with class name "formWrap"', () => {
    expect(component.find('div').at(0).exists()).toBe(true)
    expect(component.find('div').at(0).hasClass('formWrap')).toBe(true)
  })

  it('should render the div container with class name "formLogin"', () => {
    expect(component.find('div').at(1).exists()).toBe(true)
    expect(component.find('div').at(1).hasClass('formLogin')).toBe(true)
  })

  it('should render the input for email correctly', () => {
    expect(component.find('input[type="email"]').exists()).toBe(true)
  })

  it('should render the input for email correctly', () => {
    expect(component.find('input[type="password"]').exists()).toBe(true)
  })

  describe('Form submission', () => {
    // it('should show email error message if clicked on login button without email',  async () => {
    //      await act(async () => {
    //       const event = { preventDefault: jest.fn};
    //       const form = component.find('form');
    //      //  console.log(button.debug());
    //       await form.props().onSubmit();
    //       // console.log(component.debug());
    //       expect(onMockSubmit).toHaveBeenCalled();
    //      })

    // });

  })
})
