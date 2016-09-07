var taxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(sales, taxRates) {
  var obj = {};

  for(var data in sales) {
    var totalRegionSales = 0;
    var regionSales = sales[data].sales;

    for(var i = 0; i < regionSales.length; i++) {
      totalRegionSales += regionSales[i];
    }
    var regionTax = totalRegionSales * taxRates[sales[data].province];

    if (!obj.hasOwnProperty(sales[data].name))  {
      obj[sales[data].name] = {};
      obj[sales[data].name]["totalSales"] = totalRegionSales;
      obj[sales[data].name]["totalTaxes"] = regionTax;
    } else {
      obj[sales[data].name]["totalSales"] += totalRegionSales;
      obj[sales[data].name]["totalTaxes"] += regionTax;
    }
  }
  return obj;
}

var results = calculateSalesTax(companySalesData, taxRates);
console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/