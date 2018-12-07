import * as React from 'react';
import 'jsdom-global/register';
import {mount} from 'enzyme';
import WidgetComponent from "../../../../../src/app/components/pages/widget/WidgetComponent";
import {InfoText} from "../../../../../src/app/components/common/info-text/InfoText";

describe("Home Component :", () => {
  const widgetComponent = mount(<WidgetComponent/>);
  
  beforeEach(() => {
    widgetComponent.setProps({
      city: 'Some City',
      data: {weather: ['sunny'], main: {temp: 100}},
      isFetching: false
    });
    widgetComponent.update();
  });
  
  it("should receive proper props", () => {
    expect(widgetComponent.props().city).toEqual('Some City');
    expect(widgetComponent.props().isFetching).toBeFalsy();
    expect(widgetComponent.props().data).toEqual({weather: ['sunny'], main: {temp: 100}});
  });
  
  it("should render home component", () => {
    expect(widgetComponent.find('.render-data').exists()).toBe(true);
  });
  
  it("should display Get Data button", () => {
    expect(widgetComponent.find('.get-data-btn').exists()).toBe(true);
  });
  
  it("should contain InfoText components when isFetching as true", () => {
    expect(widgetComponent.find(InfoText).length).toBe(4);
  });
  
  it("should contain fetching message when isFetching as true", () => {
    widgetComponent.setProps({...widgetComponent.props(), isFetching: true});
    widgetComponent.update();
    expect(widgetComponent.contains(<p className="container">Fetching...</p>)).toBeTruthy();
  });
});
