whatCanIDrink=function(age){
   
switch (age) {
    case (age<0):
        return "Sorry. I can't tell what drink because that age is incorrect!";
        break;
    case (age<14):
        return "Drink Toddy";
        break;
    case (age<18):
        return "Drink Coke";
        break;
    case (age<21):
        return "Drink Beer";
        break;
    case (age<130):
        return "Drink Whiskey";
        break;
    default:
        return "Sorry, I can't tell what drink because that age is incorrect!";
        break;
}

}