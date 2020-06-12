import React from 'react';
import { shallow } from 'enzyme';
import Connections from './Connections'
import findByTestAttr from '../../tests/utils';

const setUp = (props={}) => {
  const wrapper = shallow(<Connections { ...props } />);
  return wrapper;
}

describe('<Connections /> component testing', () => {
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
    it('should render <Paper /> component correctly', () => {
      const wrapper = findByTestAttr(component, 'paper');
         expect(wrapper.find('WithStyles(ForwardRef(Paper))').length).toBe(1);
    })
    describe('<AppBar /> component', () => {
        let wrapper
        beforeEach(() => {
            wrapper = findByTestAttr(component, 'app-bar');
        })
        it('should render <AppBar /> component correctly', () => {
             console.log(component.debug());
             expect(wrapper.exists()).toBe(true);
        });
        it('should render <Tabs /> component inside <AppBar /> correctly', () => {
             expect(wrapper.find('WithStyles(ForwardRef(Tabs))').exists()).toBe(true);
        });
        it('should render two <Tab /> components inside <Tabs /> component', () => {
             expect(wrapper.find('WithStyles(ForwardRef(Tab))').length).toBe(2);
        })
    })
   
})