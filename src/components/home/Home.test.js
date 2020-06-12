import React from 'react';
import { mount} from 'enzyme';
import toJSON from 'enzyme-to-json';
import Home from './Home';
import { MemoryRouter } from 'react-router-dom';
import findByTestAttr from '../../tests/utils';
import  { UserContext } from '../../UserContext';


describe('<Home /> component testing', () => {
  const setUser = jest.fn();
  const user = {};  
    let component;
    beforeEach(() => {
      component = mount(<UserContext.Provider value={{user, setUser}}>
      <MemoryRouter initialEntries={['/home']}>
        <Home />
        </MemoryRouter>
      </UserContext.Provider> );
    });

    it('should render the component correctly', () => {      
         expect(toJSON(component)).toMatchSnapshot();
    });

    it('should render the <Home /> component correctly', () => {        
        const homeContainer = findByTestAttr(component, 'home-container');
        expect(homeContainer.length).toBe(1);
    });

    it('should render <Header /> component correctly', () => {
        expect(component.find('Header')).toHaveLength(1);
    });

    it('should render <Connections /> component correctly', () => {
        expect(component.find('Connections')).toHaveLength(1);
    });
    
    it('should render <ConnectionRequests /> component correctly', () => {
      expect(component.find('ConnectionRequests')).toHaveLength(1);
    });

    it('should render  <RecommendedConnections /> component correctly', () => {
      expect(component.find('RecommendedConnections')).toHaveLength(1);
    });

    it('should render <Footer /> component correctly', () => {
       expect(component.find('Footer')).toHaveLength(1);
    });
});