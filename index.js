/* returns only an array of account numbers, and accepts following optional parameters
 -user
  -sortby - acctNum/balance
 -sortDirection - asc/desc, default asc*/

accData= [
    {
        "acctName": "AAA - 1234",
        "user": "Alice"
    },
    {
        "acctName": "AAA - 5231",
        "user": "Bob"
    },
    {
        "acctName": "AAA - 9921",
        "user": "Alice"
    },
    {
        "acctName": "AAA - 8191",
        "user": "Alice"
    }
]

balance = {
    "AAA - 1234": 4593.22,
    "AAA - 9921": 0,
    "AAA - 5231": 232142.5,
    "AAA - 8191": 4344
}

/* 2 filter by Bob
- filter by Charlie
- Sorted by acctNumb
- filtered by Alice, sorted by balance asc */

function filterRecords(user='', sortBy='', sortType = 'asc') {
    let results;    
    // console.log(accData, balance)
    if(user){
        results = accData.filter((data) => data.user === user )
    }
    if(!user)
        results = accData;
    if(results) {
        results.map((item) => {
            item.balance = balance[item.acctName];
        });
    } 
    // console.log(results)
    if(sortBy) {
        var sortedResults = results.sort(function(param1, param2) {
            // console.log(sortBy)
            if (sortType == 'asc') {
                if (param1[sortBy] < param2[sortBy])
                    return -1;
                else 
                    return 1;
            }
            if (sortType == 'desc') {
                if (param1[sortBy] > param2[sortBy])
                    return -1;
                else
                    return 1;
            }
        });
        return sortedResults
    } else 
     return results 
}

function execute(){
console.log(filterRecords("Alice", "balance", "desc"));
console.log(filterRecords("Alice", "balance", "asc"));
console.log(filterRecords("Alice", "acctName", "desc"));
console.log(filterRecords("Alice", "acctName", "asc"));
console.log(filterRecords("Alice", 'balance'));
console.log(filterRecords("Bob"));
console.log(filterRecords("harlie"));
}

execute();

