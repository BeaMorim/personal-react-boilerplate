import React from "react";
import Page from './page';
import { mount } from './setupTest';

describe("unit tests", () => {
  it("find elements by class", () => {
    const wrapper = mount(<Page />);
    expect(wrapper.exists(".some-class")).toEqual(true);
    expect(wrapper.find(".other-class").exists()).toEqual(false);
  });

});
