import React from "react";
import Header from '..';
import { mount } from '@/utils/tests/setupTest';

describe("unit tests", () => {
  it("find elements by class", () => {
    const wrapper = mount(<Header />);
    expect(wrapper.exists(".header")).toEqual(true);
    expect(wrapper.find(".other-class").exists()).toEqual(false);
  });

});
