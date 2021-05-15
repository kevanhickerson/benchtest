import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
import Header from "@/components/Header";
import TransactionTable from "@/components/TransactionTable";
import axios from "axios";
import flushPromises from "flush-promises";

jest.mock("axios");

describe("App.vue", () => {
  it("should contain a header", () => {
    axios.get.mockResolvedValueOnce({
      data: {
        totalCount: 1,
        page: 1,
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

    const wrapper = shallowMount(App);

    expect(wrapper.findComponent(Header)).toBeTruthy();
  });

  it("should contain a transaction table", () => {
    axios.get.mockResolvedValueOnce({
      data: {
        totalCount: 1,
        page: 1,
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

    const wrapper = shallowMount(App);

    expect(wrapper.findComponent(TransactionTable)).toBeTruthy();
  });

  it("should pass transactions to the transaction table", async () => {
    const transactions = [
      {
        Date: "2013-01-01",
        Ledger: "A test",
        Amount: "1",
        Company: "Test Company",
      },
    ];

    axios.get.mockResolvedValueOnce({
      data: {
        totalCount: 1,
        page: 1,
        transactions,
      },
    });

    const wrapper = shallowMount(App);

    await flushPromises();

    expect(
      wrapper.findComponent(TransactionTable).props().transactions
    ).toEqual(transactions);
  });
});
