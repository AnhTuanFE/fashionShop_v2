const paymentStatusConstants = {
  initialized: {
    chipColor: 'default',
  },
  paid: {
    chipColor: 'success',
  },
  refunded: {
    chipColor: 'secondary',
  },
};

const PAYMENT_METHOD = {
  PAY_WITH_MOMO: 2,
  PAY_WITH_CASH: 1,
  PAY_WITH_ATM: 3,
  PAY_WITH_CREDIT_CARD: 4,
};

export { paymentStatusConstants, PAYMENT_METHOD };
