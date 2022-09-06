import create from "zustand";

import { devtools, persist } from "zustand/middleware";

const customerStore = (set) => ({
  customerPhoneNumber: 0,
  customerFirstName: "Gautham",
  customerLastName: "",
  customerEmail: "",
  customerIsCustomer: false,
  setCustomerPhoneNumber: (phoneNumber) => {
    set((state) => ({
      customerPhoneNumber: phoneNumber,
    }));
  },
  setCustomerFirstName: (firstName) => {
    set((state) => ({
      customerFirstName: firstName,
    }));
  },
  setCustomerLastName: (lastName) => {
    set((state) => ({
      customerLastName: lastName,
    }));
  },
  setCustomerEmail: (email) => {
    set((state) => ({
      customerEmail: email,
    }));
  },
  setCustomerIsCustomer: (customerState) => {
    set((state) => ({
      customerIsCustomer: customerState,
    }));
  },
});

const useCustomerStore = create(
  devtools(
    persist(customerStore, {
      name: "customer",
    })
  )
);

export default useCustomerStore;
