import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header.vue";

describe("Header.vue", () => {
  it("should contain header text", () => {
    const wrapper = shallowMount(Header);

    expect(wrapper.text()).toMatch("Bench Test");
  });
});
