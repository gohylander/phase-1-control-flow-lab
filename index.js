function scuberGreetingForFeet(someNumber){
    if (someNumber < 400)
    return 'This one is on me!';

    else if (someNumber < 2000)
    return "That will be twenty bucks.";

    else if (someNumber <= 2001)
    return 'I will gladly take your thirty bucks.';

    else (someNumber > 2500)
    return 'No can do.';
}    




function ternaryCheckCity(city){
 if (city === 'NYC')
 return 'Ok, sounds good.';

 else if (city !== 'NYC')
 return 'No go.';
}

function switchOnCharmFromTip(tip){
  if (tip === 'generous')
  return 'Thank you so much.';

  else if (tip === 'not as generous')
  return 'Thank you.';

  else (tip === "anything else")
  return 'Bye.';
}