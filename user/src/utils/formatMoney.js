import React from 'react';

const formatMoney = (number) => {
    return number.toLocaleString('vi', { style: 'currency', currency: 'VND' });
};

const formatTotalSales = (totalSales) => {
    totalSales = Number(totalSales);
    if (totalSales >= 1000 && totalSales < 10000000) {
        return (totalSales / 1000).toFixed(1) + 'K';
    }
    if (totalSales >= 10000000) {
        return (totalSales / 10000000).toFixed(1) + 'M';
    }
    return totalSales;
};

export { formatMoney, formatTotalSales };
