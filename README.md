## Exploding Kittens Card Game 😼
CSS ReactJS Redux Nodejs Express MongoDB 

Welcome to the Exploding Kittens card game! This is an online single-player card game where you try to draw cards from a deck without exploding kittens blowing up in your face. Let's dive into how the game works and how you can access it locally.

# How the Game Works
## Rules:
## Types of Cards:

- 😼 Cat Card: Harmless card, just a cute cat.

- 🙅‍♂️ Defuse Card: Used to defuse an exploding kitten.

- 🔀 Shuffle Card: Shuffles the deck and resets the game.

- 💣 Exploding Kitten Card: Instant game over if drawn.

![cat1](https://github.com/Imesunny/Exploding_Kittens/blob/main/frontend/src/assets/cat1.png?raw=true) ![cat2](https://github.com/Imesunny/Exploding_Kittens/blob/main/frontend/src/assets/cat2.png?raw=true) ![cat3](https://github.com/Imesunny/Exploding_Kittens/blob/main/frontend/src/assets/cat3.png?raw=true) ![cat4](https://github.com/Imesunny/Exploding_Kittens/blob/main/frontend/src/assets/cat4.png?raw=true) 
 
 ## Gameplay
- Clicking on the deck reveals a card.
- If it's a cat card, it's removed from the deck.
- If it's an exploding kitten card and you don't have a defuse card, you lose.
- If it's a defuse card, it's removed from the deck and can be used to defuse an exploding kitten later.
- If it's a shuffle card, the game restarts with a freshly shuffled deck.

## Accessing the Game Locally

## For React Frontend:
- Install dependencies: npm install
- Start the frontend server: npm start
- Access the game at: http://localhost:3000

## For Backend:
- Install dependencies: npm install
- Start the server: node index.js
- The backend will run on port 8080;

## Tech Stack Used
- ReactJs
- Redux
- Node.js
- Express
- MongoDB
- CSS

## Contributions and License
This project is open for contributions. Feel free to fork the repository, make changes, and submit a pull request. There is no license specified for this project. Enjoy playing and happy coding!