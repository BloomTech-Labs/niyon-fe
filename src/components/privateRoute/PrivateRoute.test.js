import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import {PrivateRoute} from './PrivateRoute';
import { MemoryRouter } from 'react-router-dom';


describe('<Routes />', () => {
   let component;
   beforeEach(() => {
      component = shallow(<PrivateRoute />);
   });

   it('should pass snapshot testing', () => {
       expect(toJSON(component)).toMatchSnapshot();
   });

   it('should render the component correctly', () => {
       expect(component.exists()).toBe(true);
   });
//    describe('Verifying Routes are secured', () => {
//       it('should not render a component if user has not been authenticated', () => {
//            const AuthComponent = () => <div>Auth-component</div>;
//            const props = { path: '/private', component: AuthComponent};
//            const wrapper = shallow(
//                <MemoryRouter initialEntries={[props.path]}>
//                    <PrivateRoute auth={false} props={props}/>
//                </MemoryRouter>,
//            );
//            const history: any = wrapper.find('Router').prop('history');
//         //    expect(wrapper.exists(AuthComponent)).toBe(false);
//             expect(history.location.pathname).toBe('/login');
//       });
//     })

});