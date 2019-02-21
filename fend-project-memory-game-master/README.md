# Memory Game Project

## Table of Contents

* [How game was built](#how-game-was-built)
* [Contributing](#contributing)
* [Game insallation](#game-installation)
* [How to play](#how-to-play)
* [Known issue](#known-issue)

## How game was built

The starter project given by Udacity [link](https://github.com/udacity/fend-project-memory-game.git) or download original files directly by clicking[here](https://github.com/udacity/fend-project-memory-game/archive/master.zip) had some HTML and CSS styling to display a static version of the Memory Game project. I needed to convert this project from a static project to an interactive one. This required modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## Game installation

Go to: https://github.com/luisbull/udacity-memory-game.git
  - Click on: Clone or Download.  (green color tab)
  - Download Zip file.
  - Load index.html in browser.
  - Play the game

## How to play

8 pair of cards are displayed randomly (16 cards in total) on a deck for player to match them

When player click a first card:
  - A card will be shown

When Player click in a second card:
  - The timer will start
  - If both cards match, cards remain open and change color
  - If both cards don’t match, cards get hidden.

Player will be rate by stars depending the amount of moves player had taken to show all cards.  The more moves the player take, more stars will be taken away.

Player can restart the game at any time by clicking restart icon on the top right of the deck

When player matched all the cards:
  - A pop up message will be shown telling the player time and moves taken to complete it.
  - Players rate
  - Button to play again players rate and a play again button.
  
## Known issue

If player click very quick a third card can be seen.  Though it will count as part of the next move.


