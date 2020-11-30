export const newdata = [
    {
        ticker: "abc",
        name: "A Big Cat",
        category: "memorabilla",
        hasExited: false,
        hasTraded: true,
        ipoDate: new Date("11-01-2018"),
        ipoMarketCap: 10000,
        ipoSharePrice: 10.50,
        numShares: 1000,
        curMarketCap: 20000,
        curSharePrice: 20.00,
        curROIPercentage: 100.00,
        liquidityEvents: [
            {
                liquidityDate: new Date("12-01-2018"),
                marketCap: 15000,
                sharePrice: 1.50,
                roiPercent: 50.00
            },
            {
                liquidityDate: new Date("06-01-2019"),
                marketCap: 17000,
                sharePrice: 1.70,
                roiPercent: 70.00
            }
        ]
    },
    {
        ticker: "2nd",
        name: "Second",
        category: "books",
        hasExited: false,
        hasTraded: false,
        ipoDate: new Date("11-01-2018"),
        ipoMarketCap: 10000,
        ipoSharePrice: 10.50,
        numShares: 1000,
        curMarketCap: 20000,
        curSharePrice: 20.00,
        curROIPercentage: 100.00,
        liquidityEvents: []
    }
]