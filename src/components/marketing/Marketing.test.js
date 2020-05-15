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
    t('should render <Toolbar /> component correctly', () => {
      expect(component.find(Toolbar)).toHaveLength(1);
 })
   
})