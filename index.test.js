import React from 'react';
import ReactDom from 'react-dom';
import App from  './src/App';

jest.mock("react-dom", () => ({render: jest.fn()}));

describe('Index.js testing>>>>>>Application root', () => {
    it('should render without crashing', () => {
         const div = document.createElement("div");
         div.id = "root";
         document.body.appendChild("div");
         require('./index.js');
         expect(ReactDom.render).toHaveBeenCalledWith(<App />, div);
    });
});