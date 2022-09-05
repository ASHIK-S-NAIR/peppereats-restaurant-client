import create from "zustand";

import { devtools, persist } from "zustand/middleware";

const reservationStore = (set) => ({
  reservationOrders: [],
  reservationTable: "",
  reservationTime: "",
  addReservationOrder: (orderId) => {
    set((state) => ({
      reservationOrders: [
        { orderId, orderQuantity: 0 },
        ...state.reservationOrders,
      ],
    }));
  },
  removeReservationOrder: (orderId) => {
    set((state) => ({
      reservationOrders: state.reservationOrders.filter(
        (reservationOrder) => reservationOrder.orderId !== orderId
      ),
    }));
  },
  incrementReservationOrder: (orderId) => {
    set((state) => ({
      reservationOrders: state.reservationOrders.map((reservationOrder) =>
        reservationOrder.orderId === orderId
          ? {
              ...reservationOrder,
              orderQuantity: reservationOrder.orderQuantity + 1,
            }
          : reservationOrder
      ),
    }));
  },
  descrementReservationOrder: (orderId) => {
    set((state) => ({
      reservationOrders: state.reservationOrders.map((reservationOrder) =>
        reservationOrder.orderId === orderId
          ? {
              ...reservationOrder,
              orderQuantity: reservationOrder.orderQuantity - 1,
            }
          : reservationOrder
      ),
    }));
  },
  emptyReservationOrder: () => {
    set((state) => ({
      reservationOrders: [],
    }));
  },
  setReservationTable: (table) => {
    set((state) => ({
      reservationTable: table,
    }));
  },
  setReservationTime: (time) => {
    set((state) => ({
      reservationTime: time,
    }));
  },
  initialReservationDetails: () => {
    set((state) => ({
      reservationTime: "05:00PM",
      reservationTable: "",
      reservationOrders: [],
    }));
  },
});

const useReservationStore = create(
  devtools(
    persist(reservationStore, {
      name: "reservations",
    })
  )
);

export default useReservationStore;
