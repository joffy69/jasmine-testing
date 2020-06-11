describe ("whatCID", function(){
    
    var whatcid=new whatCID(age);
    describe ("unborn", function(){
        it("should return sorry", function(){
            expect(whatcid.age).toBe("Sorry");
        });
    });
});