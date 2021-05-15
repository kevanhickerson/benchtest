import { shallowMount } from "@vue/test-utils";
import TransactionTable from "@/components/TransactionTable.vue";

describe("TransactionTable.vue", () => {
  it("should contain a header row", () => {
    const wrapper = shallowMount(TransactionTable);

    const headers = wrapper.findAll("th");

    expect(headers.length).toEqual(4);
    expect(headers[0].text()).toBe("Date");
    expect(headers[1].text()).toBe("Company");
    expect(headers[2].text()).toBe("Account");
    expect(headers[3].text()).toBe("$0");
  });
});
