import React from 'react';
import {mount} from 'enzyme';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import  { UserContext } from './UserContext';
// import findByTestAttr from '../../tests/utils';
// import { components } from 'react-select';

const setUp = (path) => {
      const authorized = true;
      const component = mount(
        <MemoryRouter initialEntries={['/path']}>
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
     it('should render <App /> component correctly', () => {
           const wrapper = setUp("/");
           console.log(wrapper.debug());
     })
});