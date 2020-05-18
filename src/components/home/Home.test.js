import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Connections from '../connections/Connections'
import findByTestAttr from '../../tests/utils';

const setUp = (props={}) => {
  const wrapper = shallow(<Home { ...props } />);
  return wrapper;
}

describe('<Home /> component testing', () => {
    let component;
    beforeAll(() => {
      component = setUp();
    });
    it('should render the <Home /> component correctly', () => {
        const homeContainer = findByTestAttr(component, 'home-container');
        expect(homeContainer.length).toBe(1);
    });
    it('should render <Header /> component correctly', () => {
        expect(component.find(Header)).toHaveLength(1);
    });
    it('should render <Connections /> component correctly', () => {
        expect(component.find(Connections)).toHaveLength(1);
    });
    it('should render <Footer /> component correctly', () => {
       expect(component.find(Footer)).toHaveLength(1);
    });
});