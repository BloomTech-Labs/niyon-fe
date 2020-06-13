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
        const setState = jest.fn();
        const useStateSpy = jest.spyOn(React, 'useState');
        useStateSpy.mockImplementation((init) => [init, setState])
        beforeEach(() => {
            wrapper = findByTestAttr(component, 'app-bar');
        })
        it('should render <AppBar /> component correctly', () => {             
             expect(wrapper.exists()).toBe(true);
        });
        it('should render <Tabs /> component inside <AppBar /> correctly', () => {
             expect(wrapper.find('WithStyles(ForwardRef(Tabs))').exists()).toBe(true);
        });

        it('should set the correct value on change', () => {
            // this needs to be implemented once the functionality is built
        })
        it('should render two <Tab /> components inside <Tabs /> component', () => {
             expect(wrapper.find('WithStyles(ForwardRef(Tab))').length).toBe(2);
        })
    })

    describe('<SwipeableViews /> component', () => {
        let viewComponent;
        beforeEach(() => {
            viewComponent = findByTestAttr(component,'swipeable-views');
        });

        it('should render <SwipeableViews /> component correctly', () => {
            expect(viewComponent.exists()).toBe(true);
        });

        it('should have proper props for <SwipeableViews /> component', () => {
            expect(viewComponent.props()).toMatchObject({
              axis:'x' || 'x-reverse',
              index:0,
              onChangeIndex: expect.any(Function)
            })
        });

        it('should have place holder for Mentor cards', () => {
             const cardHolder = findByTestAttr(component, 'tab-panel-1');
             expect(cardHolder.exists()).toBe(true);
             expect(cardHolder.props()
                              .children
                              .props
                              .children)
                              .toEqual('Mentor cards go here');             
        });

        it('should have place holder for Mentee cards', () => {
          const cardHolder = findByTestAttr(component, 'tab-panel-2');
          expect(cardHolder.exists()).toBe(true);
          expect(cardHolder.props()
                           .children
                           .props
                           .children)
                           .toEqual('Mentee cards go here');             
        });
    });
   
});