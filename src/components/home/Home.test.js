import React from 'react'
import { mount } from 'enzyme'
import Home from './Home'
import { MemoryRouter } from 'react-router-dom'
import findByTestAttr from '../../tests/utils'
import { UserContext } from '../../UserContext'
import { fakeServer } from 'sinon'

const response = {
  bio: 'xxxx',
  email: 'mayuri@gmail.com',
  first_name: 'mayuri',
  id: 64,
  job_title: 'Full Stack Web Developer',
  job_title_id: 2,
  last_name: 'gattu',
  location: 'Lagos, Nigeria',
  location_id: 2,
  myConnections: [],
  myRequests: [],
  mySentRequests: [],
  techs: [],
  user_type: 'Mentor'
}
describe('<Home /> component testing', () => {
  const setUser = jest.fn()
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation((init) => [init, setUser])
  const user = {}
  let component
  let server
  beforeEach((done) => {
    const id = window.localStorage.getItem('id')
    server = fakeServer.create()
    server.respondWith(
      'GET',
        `https://niyon-app.herokuapp.com/profiles/${id}`,
        [
          200,
          { 'Content-Type': 'application/json' },
          JSON.stringify(response)
        ]
    )
    component = mount(<UserContext.Provider value={{ user, setUser }}>
      <MemoryRouter initialEntries={['/home']}>
        <Home />
      </MemoryRouter>
    </UserContext.Provider>)
    server.respond()
    setTimeout(done)
  })

  it('should render the <Home /> component correctly', () => {
    const homeContainer = findByTestAttr(component, 'home-container')
    expect(homeContainer.length).toBe(1)
  })

  it('should render <Header /> component correctly', () => {
    expect(component.find('Header')).toHaveLength(1)
  })

  it('should render <Connections /> component correctly', () => {
    expect(component.find('Connections')).toHaveLength(1)
  })

  it('should render <ConnectionRequests /> component correctly', () => {
    expect(component.find('ConnectionRequests')).toHaveLength(1)
  })

    it('should render <Footer /> component correctly', () => {
       expect(component.find('Footer')).toHaveLength(1);
    });
    
});
