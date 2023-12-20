const formatCurrencyVND = (amount: string) => {
  const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

  return formatter.format(parseInt(amount, 10));
};

export { formatCurrencyVND };
