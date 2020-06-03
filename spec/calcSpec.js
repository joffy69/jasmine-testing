describe("Calculator", function() {
    describe("Addition tests", function(){
        it("should return 42", function(){
            expect(addition(20,22)).toBe(42);
        });
        it("should return 26", function(){
            expect(addition(17,9)).toBe(26);

        });
        it("should return an error if we don't apply two numbers", function(){
            expect(addition("Hitchhikers", "Guide")).toBe("Error!");
        });
    });
});