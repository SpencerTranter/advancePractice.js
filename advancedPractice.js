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
  for(var sales in companySalesData){
    var totalRegionSales = 0;
    var regionSales = companySalesData[sales].sales;

    for(var i = 0; i < regionSales.length; i++){
      totalRegionSales += regionSales[i];
    }
    var regionTax = totalRegionSales * taxRates[companySalesData[sales].province];

    if (!obj.hasOwnProperty(companySalesData[sales].name))  {
      obj[companySalesData[sales].name] = {};
      obj[companySalesData[sales].name]["totalSales"] = totalRegionSales;
      obj[companySalesData[sales].name]["totalTaxes"] = regionTax;
    } else {
      obj[companySalesData[sales].name]["totalSales"] += totalRegionSales;
      obj[companySalesData[sales].name]["totalTaxes"] += regionTax;
    }
  }
  return obj;
}

var results = calculateSalesTax(companySalesData, taxRates);

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