describe ("whatCanIDrink", function(){
   
        describe ("Unborn", function(){
            it("should return sorry",function(){
                var whatcanidrink = new whatCanIDrink();
                expect(whatcanidrink.age).toBe("Sorry. I can't tell what drink because that age is incorrect!");
            });
        });
});





/*describe ("Drink", function(){
   
    var age;
    describe ("Unborn", function(){

        it("should return sorry", function(){

            expect(whatCanIDrink(age)).toBe("Sorry. I can't tell what drink because that age is incorrect!");
        });
    });
    describe ("Toddy", function(){
        it("should return toddy", function(){
            expect(whatCanIDrink(age)).toBe("Drink Toddy");
        });
    });

    describe ("Coke", function(){
        it("should return coke", function(){
            expect(whatCanIDrink(age)).toBe("Drink Coke");
        });
    });

    describe ("Beer", function(){
        it("should return beer", function(){
            expect(whatCanIDrink(age)).toBe("Drink Beer");
        });
    });

    describe ("Whiskey", function(){
        it("should return whiskey", function(){
            expect(whatCanIDrink(age)).toBe("Drink Whiskey");
        });
    });

});*/