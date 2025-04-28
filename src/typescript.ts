// let user: [number, string] = [1, 'Charles'];
// user.push(1);

// enum Size {Small = 0, Medium = 1, Large = 2}
// enum Size {Small = 's', Medium = 'm', Large = 'l'}

function calculateTax(income: number, taxYear: number): number {
    if (taxYear < 2020)
        return income * 1.2;
    return income * 1.3;
}

calculateTax(10_000, 2022); 