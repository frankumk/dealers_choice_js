const data = [
    {id: 1, title : "A Scanner Darkly", author:"Philip Dick",img:"AScannerDarkly.jpg",review: "****",summary: "A curious novel that reads less like sci-fi and more like a hallucinated autobiography detailing the author’s struggle with drug addiction. In a near-future California, vice cop Bob Arctor lives undercover with a community of drug addicts hooked on devastating psychoactive dope Substance D. Arctor, who needs to don a special “scramble suit” to hide his face and voice when meeting his fellow cops, has to grapple with gradually losing his sense of self."},
    {id: 2, title : "Parable of the Sower", author:"Octavia Butler", img: "ParableOfTheSower.jpg", review: "***", summary :"Lauren Olamina and her family live in one of the only safe neighborhoods remaining on the outskirts of Los Angeles. Behind the walls of their defended enclave, Lauren’s father, a preacher, and a handful of other citizens try to salvage what remains of a culture that has been destroyed by drugs, disease, war, and chronic water shortages. While her father tries to lead people on the righteous path, Lauren struggles with hyperempathy, a condition that makes her extraordinarily sensitive to the pain of others. When fire destroys their compound, Lauren’s family is killed and she is forced out into a world that is fraught with danger. With a handful of other refugees, Lauren must make her way north to safety, along the way conceiving a revolutionary idea that may mean salvation for all mankind."},
    {id: 3, title : "Children of Time", author:"Adrian Tchaikovsky",img: "ChildrenOfTime.jpg", review: "***", summary:"The book's plot involves a planet inhabited by evolved spiders uplifted by human scientist Avrana Kern, and their much later discovery by the last humans alive in the universe. The work plays off the contrast between the societal development of the spiders and the barbaric descent of the starship crew of the last humans."},
    {id: 4, title : "The Fifth Season", author:"N.K. Jemison",img: "TheFifthSeason.jpg",review: "*****", summary:"Three terrible things happen in a single day. Essun, a woman living an ordinary life in a small town, comes home to find that her husband has brutally murdered their son and kidnapped their daughter. Meanwhile, mighty Sanze -- the world-spanning empire whose innovations have been civilization's bedrock for a thousand years -- collapses as most of its citizens are murdered to serve a madman's vengeance. And worst of all, across the heart of the vast continent known as the Stillness, a great red rift has been torn into the heart of the earth, spewing ash enough to darken the sky for years. Or centuries. Now Essun must pursue the wreckage of her family through a deadly, dying land. Without sunlight, clean water, or arable land, and with limited stockpiles of supplies, there will be war all across the Stillness: a battle royale of nations not for power or territory, but simply for the basic resources necessary to get through the long dark night. Essun does not care if the world falls apart around her. She'll break it herself, if she must, to save her daughter."},
    {id: 5, title : "Ancillary Justice", author:"Ann Leckie", img: "AncillaryJustice.jpg", review: "**", summary:"On a remote, icy planet, the soldier known as Breq is drawing closer to completing her quest. Once, she was the Justice of Toren - a colossal starship with an artificial intelligence linking thousands of soldiers in the service of the Radch, the empire that conquered the galaxy. Now, an act of treachery has ripped it all away, leaving her with one fragile human body, unanswered questions, and a burning desire for vengeance."},
    {id: 6, title : "The Windup Girl", author:"Paolo Bacigalupi", img: "TheWindupGirl.jpg", review: "***", summary:"Anderson Lake is a company man, AgriGen's Calorie Man in Thailand. Under cover as a factory manager, Anderson combs Bangkok's street markets in search of foodstuffs thought to be extinct, hoping to reap the bounty of history's lost calories. There, he encounters Emiko. Emiko is the Windup Girl, a strange and beautiful creature. One of the New People, Emiko is not human; instead, she is an engineered being, creche-grown and programmed to satisfy the decadent whims of a Kyoto businessman, but now abandoned to the streets of Bangkok. Regarded as soulless beings by some, devils by others, New People are slaves, soldiers, and toys of the rich in a chilling near future in which calorie companies rule the world, the oil age has passed, and the side effects of bio-engineered plagues run rampant across the globe."}
];

const list = () => {
    console.log([...data]);
    return [...data];
}

const nextBook = (ID) => {
    //6 books, once it reaches 6, restarts at 1
    if(ID === 6){
        return 1;
    }else{
        return ID++;
    }
}

const findBook = (ID) => {
    //const intID = Integer.parseInt(ID);
    const book = data.find(val => val.id === ID);
    return {...book};
 }

module.exports = {
    data: data,
    list : list,
    findBook : findBook,
    nextBook : nextBook
}