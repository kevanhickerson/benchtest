import { shallowMount } from "@vue/test-utils";
import TransactionTable from "@/components/TransactionTable.vue";

describe("TransactionTable.vue", () => {
  it("should contain only a header row", () => {
    const wrapper = shallowMount(TransactionTable);

    const headers = wrapper.findAll("th");
    const rows = wrapper.findAll("tr");

    expect(rows.length).toEqual(0);
    expect(headers.length).toEqual(4);
    expect(headers[0].text()).toBe("Date");
    expect(headers[1].text()).toBe("Company");
    expect(headers[2].text()).toBe("Account");
    expect(headers[3].text()).toBe("$0.00");
  });

  it("should contain a single table row", () => {
    const wrapper = shallowMount(TransactionTable, {
      propsData: {
        transactions: [
          {
            Date: "2013-01-01",
            Ledger: "A test",
            Amount: "1",
            Company: "Test Company",
          },
        ],
      },
    });

    const rows = wrapper.findAll("tr");
    const data = rows[0].findAll("td");

    expect(rows.length).toEqual(1);
    expect(data.length).toEqual(4);
    expect(data[0].text()).toBe("2013-01-01");
    expect(data[1].text()).toBe("Test Company");
    expect(data[2].text()).toBe("A test");
    expect(data[3].text()).toBe("$1.00");
  });

  it("should contain more than one table row", () => {
    const wrapper = shallowMount(TransactionTable, {
      propsData: {
        transactions: [
          {
            Date: "2013-01-01",
            Ledger: "A test",
            Amount: "1",
            Company: "Test Company",
          },
          {
            Date: "2014-01-01",
            Ledger: "A different test",
            Amount: "10.00",
            Company: "Another Test Company",
          },
        ],
      },
    });

    const rows = wrapper.findAll("tr");
    const data1 = rows[0].findAll("td");
    const data2 = rows[1].findAll("td");

    expect(rows.length).toEqual(2);
    expect(data1.length).toEqual(4);
    expect(data1[0].text()).toBe("2013-01-01");
    expect(data1[1].text()).toBe("Test Company");
    expect(data1[2].text()).toBe("A test");
    expect(data1[3].text()).toBe("$1.00");

    expect(data2.length).toEqual(4);
    expect(data2[0].text()).toBe("2014-01-01");
    expect(data2[1].text()).toBe("Another Test Company");
    expect(data2[2].text()).toBe("A different test");
    expect(data2[3].text()).toBe("$10.00");
  });

  it("amount column should have currency formatting", () => {
    const wrapper = shallowMount(TransactionTable, {
      propsData: {
        transactions: [
          {
            Date: "2013-01-01",
            Ledger: "A test",
            Amount: "1",
            Company: "Test Company",
          },
          {
            Date: "2014-01-01",
            Ledger: "A different test",
            Amount: "10.00",
            Company: "Another Test Company",
          },
        ],
      },
    });

    const rows = wrapper.findAll("tr");
    const data1 = rows[0].findAll("td");
    const data2 = rows[1].findAll("td");

    expect(data1[3].text()).toBe("$1.00");
    expect(data2[3].text()).toBe("$10.00");
  });
});
