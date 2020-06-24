import React from 'react'
import toJSON from 'enzyme-to-json'
import { shallow, mount } from 'enzyme'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import Footer from './Footer'
import { signOut } from '../apiStuff/signout'

const setUp = (props = {}) => {
  const wrapper = shallow(<Footer {...props} />)
  return wrapper
}

const mockedObj = {
  signOut
}

describe('<Footer /> component testing', () => {
  let component
  const mockFn = jest.fn()
  const useStateSpy = jest.spyOn(React, 'useState')
  const mockSignOut = jest.spyOn(mockedObj, 'signOut')
  useStateSpy.mockImplementation((init) => [init, mockFn])
  beforeEach(() => {
    component = setUp()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should match the snapshot test for  <Footer /> component', () => {
    expect(toJSON(component)).toMatchSnapshot()
  })
  it('should render <Footer /> component correctly', () => {
    expect(component.exists()).toBe(true)
  })

  describe('<Menu /> testing', () => {
    let menu
    beforeEach(() => {
      menu = component.find('WithStyles(ForwardRef(Menu))')
    })
    it('should render <Menu /> correctly', () => {
      expect(menu.exists()).toBe(true)
      expect(menu.length).toBe(1)
    })
    it('should trigger close functionality when click onClose', () => {
      const handleClose = () => mockFn()
      menu.props().onClose(handleClose)
      expect(mockFn).toHaveBeenCalled()
    })
    it('should render two <MenuItems /> correctly', () => {
      const menuItem = menu.find('WithStyles(ForwardRef(MenuItem))')
      expect(menuItem.length).toBe(2)
    })

    it('should change state value when clicked on the first MenuItem', () => {
      const firstMenuItem = menu.find('WithStyles(ForwardRef(MenuItem))').at(0)
      const handleClose = () => mockFn()
      firstMenuItem.props().onClick(handleClose)
      expect(mockFn).toHaveBeenCalled()
    })

    it('should change the state value when clicked on the second Menuitem', () => {
      const secondMenuItem = menu.find('WithStyles(ForwardRef(MenuItem))').at(1)
      const e = { preventDefault: jest.fn() }
      secondMenuItem.props().onClick(mockSignOut())
      expect(mockSignOut).toHaveBeenCalled()
    })
  })

  describe('<ButtomNavigation /> component', () => {
    let navigation
    beforeEach(() => {
      navigation = component.find('WithStyles(ForwardRef(BottomNavigation))')
    })

    it('should render <BottomNavigation /> correctly', () => {
      expect(navigation.length).toBe(1)
    })

    it('should render <BottomNavigationAction /> components(4) with no errors', () => {
      const actionNavigation = navigation.find('WithStyles(ForwardRef(BottomNavigationAction))')
      expect(actionNavigation.length).toBe(4)
    })

    it('should set the state when clicked on the last navigation button', () => {
      const lastNavigationButton = navigation.find('WithStyles(ForwardRef(BottomNavigationAction))').at(3)
      const handleClick = () => mockFn()
      lastNavigationButton.props().onClick(handleClick)
      expect(mockFn).toHaveBeenCalled()
    })
  })
})
