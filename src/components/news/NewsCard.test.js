import React from "react";
import { mount } from "enzyme";
import NewsCard from "./NewsCard";
import { MemoryRouter } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { DarkModeContext } from "../../DarkModeContext";
import toJSON from "enzyme-to-json";
// import findByTestAttr from '../../tests/utils'

describe("<Search /> component testing", () => {
  const darkMode = false;
  const setDarkMode = jest.fn();
  const user = {};
  const setUser = jest.fn();
  let component;
  const profiles = [];
  beforeEach(() => {
    component = mount(
      <MemoryRouter initialEntries={["/news"]}>
        <UserContext.Provider value={{ user, setUser }}>
          <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
            <NewsCard />
          </DarkModeContext.Provider>
        </UserContext.Provider>
      </MemoryRouter>
    );
  });

  it("should pass snapshot testing", () => {
    expect(toJSON(component)).toMatchSnapshot();
  });

  
});


