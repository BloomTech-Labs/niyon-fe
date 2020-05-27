import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import findByTestAttr from '../../tests/utils';
import Login from './Login';
import { act } from 'react-dom/test-utils';


describe('<Search /> component testing', () => {
  let component;
  let onSubmit = jest.fn();
  beforeEach(() => {
    onSubmit = jest.fn();
    component = shallow(<Login onSubmit={onSubmit} />);
  });

  afterEach(() => {
     jest.clearAllMocks();
  })

it('should pass snaps shot testing', () => {
      expect(toJSON(component)).toMatchSnapshot();
    });

 it('should render <Login /> component correctly', () => {
      expect(component.exists()).toBe(true);
      console.log(component.debug());
    });

 it('should render form correctly', () => {
      expect(component.find('form').exists()).toBe(true);
     });

 it('should render the div container with class name "formWrap"', () => {
      expect(component.find('div').at(0).exists()).toBe(true);
      expect(component.find('div').at(0).hasClass('formWrap')).toBe(true);
     });

 it('should render the div container with class name "formLogin"', () => {
      expect(component.find('div').at(1).exists()).toBe(true);
      expect(component.find('div').at(1).hasClass('formLogin')).toBe(true);
    });
  it('should render the input for email correctly', () => {
      expect(component.find('input[type="email"]').exists()).toBe(true);
    });

  it('should render the input for email correctly', () => {
      expect(component.find('input[type="password"]').exists()).toBe(true);
    });

  it('should render submit button correctly with its text', () => {
      const button = component.find('button');
      expect(button.exists()).toBe(true);
      expect(button.text()).toEqual('Login');
    });

    describe('Form submission', () => {
        it('should submit when data filled',  () => {
            const emailInput = component.find('input[type="email"]');
            // const passwordInput = component.find('input[type="password"]');            
            // emailInput.value = "test@email.com";
            // emailInput.dispatchEvent(new Event("input"));
        });
    });


});  