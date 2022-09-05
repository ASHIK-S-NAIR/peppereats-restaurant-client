import create from "zustand";


import { devtools, persist } from "zustand/middleware";

const customerStore = (set) => ({
    customerPhoneNumber: 0,
    setCustomerPhoneNumber : (phoneNumber) => {
        set((state) => ({
            customerPhoneNumber: phoneNumber
        }))
    }
});

const useCustomerStore = create(
    devtools(
        persist(customerStore, {
            name: "customer"
        })
    )
)

export default useCustomerStore;