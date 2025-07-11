// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3 ", () => {
    describe("Function - calculateArea", (x , y) => {
        if (typeof x !== "number" || typeof y !== "number") {
            return undefined;
        }
        return x * y;
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {});
        expect(calculateArea.length).toBe(2);
    })    
})
it("should take two argunments", () => {
    expect(calculateArea.length).toBe(2);
})
it ("should return rentagle area by multiplying the two numbers",() => {
    expect( calculateArea(1 , 2) ).toEqual(2);
    expect( calculateArea(3 , 4) ).toEqual(12);
    expect( calculateArea(6 , 6) ).toEqual(36);
});

it("should return undefinded if any of the arguments is not provided", () => {
    expect( calculateArea(1) ).toEqual(undefined);
    expect( calculateArea() ).toEqual(undefined);
    expect( calculateArea(undefined , 1 ) ).toEqual(undefined);
});

it ("should return undefined if any of the arguments is not a number", () => {
    expect( calculateArea(1, "2") ).toEqual(undefined);
    expect( calculateArea("3", 4) ).toEqual(undefined);
    expect( calculateArea("1" , "5") ).toEqual(undefined);
});