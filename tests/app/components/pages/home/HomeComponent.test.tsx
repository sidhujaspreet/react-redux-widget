import * as React from 'react';
import 'jsdom-global/register';
import {mount} from 'enzyme';
import HomeComponent from "../../../../../src/app/components/pages/home/HomeComponent";

describe("Home Component:", ()=> {
  
  const wrapper = mount(<HomeComponent />);
  
  it("should render home component", ()=> {
    expect(wrapper.find('p').text()).toEqual(`Switch to 'Widget' to get weather data.. ;)`);
  })
});
