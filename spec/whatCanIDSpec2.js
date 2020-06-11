describe ("Drink", function(){
    describe ("Unborn", function(){
        it("should return sorry", function(){
            expect(whatCanIDrink(age)).toBe("Sorry. I can't tell what drink because that age is incorrect!");
        });
    });
    describe ("Toddy", function(){
        it("should return toddy", function(){
            expect(something(age)).toBe("Drink Toddy");
        });
    });

    describe ("Coke", function(){
        it("should return coke", function(){
            expect(something(age)).toBe("Drink Coke");
        });
    });

    describe ("Beer", function(){
        it("should return beer", function(){
            expect(something(age)).toBe("Drink Beer");
        });
    });

    describe ("Whiskey", function(){
        it("should return whiskey", function(){
            expect(something(age)).toBe("Drink Whiskey");
        });
    });

});