import React from 'react';
import { shallow } from 'enzyme';
import Connections from './Connections'
import findByTestAttr from '../../tests/utils';

const setUp = (props={}) => {
  const wrapper = shallow(<Connections { ...props } />);
  return wrapper;
}

describe('<Home /> component testing', () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });
  it('should render <Connections /> component correctly', () => {
        const connectionsWrapper = findByTestAttr(component, 'connections');
        expect(connectionsWrapper.length).toBe(1);
    });

    it('should render a second container <Div /> correctly', () => {
         const secondWrapper = findByTestAttr(component, 'second-wrapper');
         expect(secondWrapper.exists()).toBe(true);
    });

  it('should render three <h1 /> tag for My connections', () => {
          const myConnections = findByTestAttr(component, 'my-connections');
          expect(myConnections.length).toBe(1);
          expect(myConnections.text()).toEqual('My Connections');

    });

  it('should render three <h1 /> tag for requested connections', () => {
      const requestConnections = findByTestAttr(component, 'request-connections');
      expect(requestConnections.length).toBe(1);  
      expect(requestConnections.text()).toEqual('Connection Requests');
    });

  it('should render three <h1 /> tag for recommended connections', () => {
      const recommendedConnections = findByTestAttr(component, 'recommended-connections');
      expect(recommendedConnections.length).toBe(1);  
      expect(recommendedConnections.text()).toEqual('Recommended Connections');
    });
})