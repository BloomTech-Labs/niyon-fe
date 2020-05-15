import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
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

const setUp = (props={}) => {
   const wrapper = shallow(<Marketing />);
   return wrapper;
}

describe('<Marketing /> component testing', () => {
   let component;
   beforeEach(() => {
      component = setUp();
   });
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
             console.log(hiddenWrapper2.dive().debug());
             expect(hiddenWrapper2.find('.makeStyles-toolbar-5').exists()).toBe(true);
       });
     });
    
   
})