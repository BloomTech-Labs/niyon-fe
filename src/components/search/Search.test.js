import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Search from './Search';
import { MemoryRouter } from 'react-router-dom';
import findByTestAttr from '../../tests/utils';
import  { UserContext } from '../../UserContext';

// const setUp = (props={}) => {
//    const wrapper = shallow(<Search />);
//    return wrapper;
// }

describe('<Search /> component testing', () => {
   const user = {}  ;
   const setUser = jest.fn();
   let component;
   const profiles = [];
   beforeEach(() => {
      component = mount(
          <UserContext.Provider value={{user,setUser}}>
           <MemoryRouter initialEntries={['/search']}>
               <Search />
               </MemoryRouter>    
          </UserContext.Provider>
      )
   });

//    it('should pass snaps shot testing', () => {
//         expect(toJSON(component)).toMatchSnapshot();
//    });

   it('should render the <Search /> component correctly', () => { 
        expect(component.exists()).toBe(true);
   });
   it('should render <Header /> component correctly', () => {
        expect(component.find('Header').length).toBe(1);
   });

   it('should render container wrapper correctly', () => {
         const divContainer = findByTestAttr(component, 'search-container');
         expect(divContainer.length).toBe(1);
   });

   it('should render main title correctly', () => {
        expect(component.find('h1').exists()).toBe(true);
        expect(component.find('h1').render().text().trim()).toEqual('Search');
   });

   it('should render search title correctly', () => {
     expect(component.find('h2').exists()).toBe(true);
     expect(component.find('h2').render().text().trim()).toEqual('Job Title');
   });

   describe('<select /> component', () => {
         let selectWrapper;
         const setState = jest.fn();
         const useStateSpy = jest.spyOn(React, 'useState');
         useStateSpy.mockImplementation((init) => [init, setState]);
         const handleChange = setState();
         beforeEach(() => {
              selectWrapper = component.find('Select');
         });

         it('should render <Select />  component correctly', () => {
            expect(selectWrapper.exists()).toBe(true);
         
        });
        it('it should change the job title on change correctly', () => {
            selectWrapper.props().onChange(handleChange);
            expect(setState).toHaveBeenCalled();
        });
   });

   it('should render the selected job title paragraph correctly', () => {
     expect(component.find('p').length).toBe(1);
     expect(component.find('p')
                     .render()
                     .text()
                     .trim())
                     .toEqual('Users with Selected Job Title');
    });

    it('should render profiles container correctly', () => {
          const container = findByTestAttr(component, 'search-profile');
          if(profiles.length === 0) {
            expect(container.length).toBe(0);
          } else {
            expect(container.length).toBe(1);
          }
    })

   it('should render the <Footer /> component correctly', () => {
        expect(component.find('Footer').length).toBe(1);
   });
});