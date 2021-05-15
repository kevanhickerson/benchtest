import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
import Header from "@/components/Header";

describe("App.vue", () => {
  it("should contain a header", () => {
    const wrapper = shallowMount(App);

    expect(wrapper.findComponent(Header)).toBeTruthy();
  });
});
