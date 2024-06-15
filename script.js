const familyGuyJokes = [
    {
        character: 'Peter Griffin',
        jokes: [
            "I'm not a racist, Lois. I love all races, especially the 100-meter dash.",
            "I'm not a racist, Lois. I just don't like those people.",
            "You know, I've often thought that Jesus should have a more American name. Like 'Jesus Bojangles Christ.",
            "I haven't been this scared since Mother Teresa OD'd in my car.",
            "I'm not afraid of anything. Except for the guy who's afraid of me.",
            "Lois, you're like my own personal Vietnam.",
            "I'm gonna go upstairs and eat a bowl of chips while watching 'The O'Reilly Factor.'",
            "I'm not a big fan of the gays. It's just that I work with them all day, and they're so loud.",
            "I don't see color. Except when I'm having sex. Then I like pink.",
            "If I were gay, there'd be no problem. But since I'm straight, it's an issue.",
            "You know what's great about having sex with twenty-eight-year-olds? There are twenty of them.",
            "Hey there sweet stuff... How old are you?",
            "You know what's worse than being a woman? Being a child."
        ]
    },
    {
        character: 'Stewie Griffin',
        jokes: [
            "You know, Brian, if I were looking for safe conversation topics, the last three you mentioned would be on my list along with 'who's your favorite Nazi?'",
            "I'm not saying I hate you because you're black. I hate you because you're a woman.",
            "You know, Brian, if I were you, I'd use the money to enter a 'Glamour Dog' competition. Oh wait, they don't have one for fat, alcoholic dogs.",
            "You know what's even worse than being a woman? Being a child.",
            "Oh, I get it! Like a dog driving a bus! That's just ridiculous!",
            "Brian, remember when we used to make fun of those people who thought robots would take over the world? Good times.",
            "You're as useless as Aquaman on dry land."
        ]
    },
    {
        character: 'Quagmire',
        jokes: [
            "I don't see color. Except when I'm having sex. Then I like pink.",
            "If I were gay, there'd be no problem. But since I'm straight, it's an issue.",
            "I'm not a big fan of the gays. It's just that I work with them all day, and they're so loud.",
            "You know what's worse than being a woman? Being a child.",
            "Hey there sweet stuff... How old are you?",
            "You know what's even worse than being a woman? Being a child."
        ]
    },
    {
        character: 'Joe Swanson',
        jokes: [
            "I can't believe my legs are disabled, but at least they're not gay.",
            "I can't feel my legs... because of racism."
        ]
    },
    {
        character: 'Herbert the Pervert',
        jokes: [
            "Hey there, Chris! You wanna come inside and play with my action figures? I've got a GI Jew and an Inflatable Betty!",
            "Hey there, Chris! You're looking pretty good today... for a boy."
        ]
    },
    {
        character: 'Cleveland Brown',
        jokes: [
            "I'm not saying my wife is fat, but when she wears a yellow raincoat, people yell 'Taxi!'",
            "I'm not homophobic; I have plenty of gay friends. Just none that are close to me."
        ]
    },
    {
        character: 'Brian Griffin',
        jokes: [
            "You know, Stewie, if I were you, I'd use the money to enter a 'Glamour Dog' competition. Oh wait, they don't have one for fat, alcoholic dogs.",
            "You know what's even worse than being a woman? Being a child.",
            "Oh, I get it! Like a dog driving a bus! That's just ridiculous!",
            "Stewie, remember when we used to make fun of those people who thought robots would take over the world? Good times.",
            "You're as useless as Aquaman on dry land.",
            "Hey, Lois. I'm going to the bar to drink some beer. Want to come with me?",
            
        ]
    },
    {

        character: 'Consuela',
        jokes: [
            "No... no... no... I clean.",
            "No, no... no... me no clean that! Me no like!"
        ]
    },
    {
        character: 'Bruce',
        jokes: [
            "Oh no! That's worse than getting a birthday telegram from Zinedine Zidane!",
            "Oh my God, that is so gay! Not that there's anything wrong with that..."
        ]
    },
    {
        character: 'Mort Goldman',
        jokes: [
            "I'm so Jewish that I call my wallet 'The Holocaust Remembrance Fund.'",
            "I heard Jews can't eat bacon... That's like half the reason to live!"
        ]
    },
    {
        character: 'Mayor Adam West',
        jokes: [
            "I'll have you know my great-grandfather was one-sixteenth black! And also a horse thief.",
            "In Quahog, we don't discriminate based on race or religion... just sexual orientation!"
        ]
    }
];

// Function to get a random joke for a specific character
function getRandomJokeByCharacter(characterName) {
    const characterObj = familyGuyJokes.find(jokeObj => jokeObj.character.toLowerCase().includes(characterName.toLowerCase()));
    if (characterObj && characterObj.jokes.length > 0) {
        const randomIndex = Math.floor(Math.random() * characterObj.jokes.length);
        return characterObj.jokes[randomIndex];
    }
    return '';
}

// Example usage with search bar:
document.getElementById('searchButton').addEventListener('click', () => {
    const searchInput = document.getElementById('searchBar').value;
    const randomJoke = getRandomJokeByCharacter(searchInput);
    
    // Clear previous results
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
    
    if (randomJoke) {
        // Display the random joke for the searched character
        const jokeElement = document.createElement('div');
        jokeElement.classList.add('joke');
        
        const characterElement = document.createElement('div');
        characterElement.classList.add('character');
        characterElement.textContent = `${searchInput} says:`;
        
        const jokeTextElement = document.createElement('div');
        jokeTextElement.classList.add('joke-text');
        jokeTextElement.textContent = randomJoke;
        
        jokeElement.appendChild(characterElement);
        jokeElement.appendChild(jokeTextElement);
        
        resultsContainer.appendChild(jokeElement);
    } else {
        // Display a message if no jokes are found
        resultsContainer.textContent = 'No jokes found for this character.';
    }
});
