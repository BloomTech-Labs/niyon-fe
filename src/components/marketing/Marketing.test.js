import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import { createShallow } from '@material-ui/core/test-utils';
import Marketing from './Marketing';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import findByTestAttr from '../../tests/utils';
import { Icon } from '@material-ui/core';

const setUp = (props={}, state=null) => {
   const wrapper = shallow(<Marketing />);  
   return wrapper;
}

describe('<Marketing /> component testing', () => {
   let component;   
   beforeEach(() => {
      component = setUp();
   });

   it('should call handleDrawerToggle function to toggle mobileOpen option', () =>{    
          const isMobileOpen = false;
          const mockSetMobileOpen = jest.fn();
          const shallowComponent = createShallow();
          React.useState = jest.fn(() => [isMobileOpen, mockSetMobileOpen]);
          const button = shallowComponent(<Marketing />).find(IconButton).at(0);         
          button.simulate('click');
          expect(mockSetMobileOpen).toHaveBeenCalled();
          expect(mockSetMobileOpen).toHaveBeenCalledWith(!isMobileOpen);
   })
   it('should pass snapshot testing correctly', () => {
            expect(toJSON(component)).toMatchSnapshot();
   });

   it('should render <Marketing /> component correctly', () => {
         const marketingWrapper = findByTestAttr(component, 'marketing-page');
         expect(marketingWrapper.length).toBe(1);
   });

   it('should render  <CssBaseline /> component with no errors', () => {
         expect(component.find(CssBaseline)).toHaveLength(1);
   });

   it('should render <AppBar /> component correctly', () => {
         expect(component.find(AppBar)).toHaveLength(1);
    });
   it('should render <Toolbar /> component correctly', () => {
          expect(component.find(Toolbar)).toHaveLength(1);
   });
   it('should render <IconButton /> component correctly', () => {
        expect(component.find(Toolbar).find(IconButton)).toHaveLength(1);
    });

   it('should render <IconButton /> component correctly', () => {
         expect(component.find(Toolbar).find(IconButton)).toHaveLength(1);
   });

   it('should render <MenuIcon /> component correctly', () => {
         expect(component.find(MenuIcon)).toHaveLength(1);
   });

   it('should render logo div correctly', () => {
        const logoWrapper = findByTestAttr(component, 'test-logo');
        expect(logoWrapper.exists()).toBe(true);
     });

   it('should render title content with no errors', () => {
         expect(component.find(Typography)).toHaveLength(1);
         expect(component.find(Typography).text()).toEqual('Niyon');
     });

     it('should render navbar component correctly',() => {
         expect(component.find('.makeStyles-drawer-2').exists()).toBe(true);
     });

     describe('First <Hidden /> component', () => {
      it('should render <Hidden /> with smUp attribute correctly', () => {
            const hiddenWrapper1 = component.find(Hidden).at(0);
            expect(hiddenWrapper1.exists()).toBe(true);
            expect(hiddenWrapper1.props().smUp).toEqual(true);           
      });
      it('should render the <Drawer /> component correctly', () => {
            const hiddenWrapper1 = component.find(Hidden).at(0);
            expect(hiddenWrapper1.find(Drawer)).toHaveLength(1);
      });
       it('should render <IconButton /> inside <Drawer /> component correctly', () => {
             const hiddenWrapper1 = component.find(Hidden).at(0);
             expect(hiddenWrapper1.find(Drawer).find(IconButton)).toHaveLength(1);
       });
     });

     describe('Second <Hidden /> component', () => {
      it('should render <Hidden /> with xsDown attribute correctly', () => {
            const hiddenWrapper2 = component.find(Hidden).at(1);
            expect(hiddenWrapper2.exists()).toBe(true);
            expect(hiddenWrapper2.props().xsDown).toEqual(true);           
      });
      it('should render the <Drawer /> component correctly', () => {
            const hiddenWrapper2 = component.find(Hidden).at(1);
            expect(hiddenWrapper2.find(Drawer)).toHaveLength(1);
      });
       it('should render a <Div /> inside <Drawer /> component correctly', () => {
             const hiddenWrapper2 = component.find(Hidden).at(1);
             expect(hiddenWrapper2.find('.makeStyles-toolbar-5').exists()).toBe(true);
       });
     });

     describe('Marketing container testing',() => {
           it('should render Marketing container correctly',() => {
                 const mainContainer = findByTestAttr(component, 'marketing-container');
                 expect(mainContainer.length).toBe(1);
           });

           it('should render second container div correctly',() => {
            const secondContainer = findByTestAttr(component, 'marketing-second-container');
            expect(secondContainer.length).toBe(1);
      });
        
         it('should render container title correctly', () => {
               const h3 = findByTestAttr(component, 'container-title');
               expect(h3.length).toBe(1);
               expect(h3.text()).toEqual('Connect with Mentors in your area!');
         });
         it('should render buttons container correctly', () => {
               const buttonsContainer = findByTestAttr(component, 'buttons-container');
               expect(buttonsContainer.length).toBe(1);
         });

         it('should render Sign Up button with no errors', () => {
               const signUpButton = findByTestAttr(component,'buttons-container').find(Button).at(0);
               expect(signUpButton.exists()).toBe(true);
               expect(signUpButton.text()).toEqual('Sign Up');
         });

         it('should render Login button with no errors', () => {
                  const logInButton = findByTestAttr(component,'buttons-container').find(Button).at(1);
                  expect(logInButton.exists()).toBe(true);
                  expect(logInButton.text()).toEqual('Login');
            });
      });  
});