import React from 'react';
import {shallow, mount} from 'enzyme';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import  { UserContext } from './UserContext';
import findByTestAttr from './tests/utils/index';
// import { components } from 'react-select';

const setUp = (path) => {
      const authorized = true;
      const component = mount(
        <MemoryRouter initialEntries={[path]}>
          <UserContext.Provider>
             <App authorized={authorized} />
          </UserContext.Provider>
        </MemoryRouter>
      );
      return component;
};

describe('<App /> Component', () => {
     const setState = jest.fn();
     const setUserSpy = jest.spyOn(React,'useState');
     setUserSpy.mockImplementation((init) => [init, setState]);
     let wrapper;
     beforeEach(() => {
       wrapper = setUp("/");        
     });
     afterEach(() => {
       jest.clearAllMocks();
     })
     it('should render <App /> component correctly', () => {
           expect(wrapper.exists()).toBe(true);
     });

     it('should render the App container correctly',() => {
          expect(findByTestAttr(wrapper, 'app').length).toBe(1);
     })

     it('should contain <Switch /> component', () => {          
          expect(wrapper.find('Switch')).toBeDefined();
     });

     it('should render <Router /> correctly', () => {
          expect(wrapper.find('Router').exists()).toBe(true);
     });

     it('should render <PrivateRouter /> correctly', () => {
          expect(wrapper.find('PrivateRoute').exists()).toBe(true);
     });

     it('should render the <MarketingPage />', () => {
           const shallowWrapper = wrapper.find('App');
           expect(shallowWrapper.find('Marketing').exists()).toBe(true);
      });
});