# Udacity-Memory-Game

# [Play the Game Here](https://luisbull.github.io/Udacity-02.Memory-Game)

## Table of Contents

* [How game was built](#how-game-was-built)
* [Contributing](#contributing)
* [Game insallation](#game-installation)
* [How to play](#how-to-play)
* [Known issue](#known-issue)
* [External sources](#external-sources)

## How game was built

The starter project given by Udacity [link](https://github.com/udacity/fend-project-memory-game.git) or download original files directly by clicking [here](https://github.com/udacity/fend-project-memory-game/archive/master.zip) There are three files (HTML, CSS, JS) that display a static version of the Memory Game project. I needed to convert this project from a static project to an interactive one. This required modifying the HTML and CSS files, but primarily the JavaScript file.

I started by analysing the files given and started building out the app's functionality from there.

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## Game installation

Go to: https://github.com/luisbull/udacity-memory-game.git
  - Click on: Clone or Download.  (green color tab)
  - Download Zip file.
  - Load index.html in browser.
  - Play the game.

## How to play

8 pair of cards are displayed randomly (16 cards in total) on a deck for player to match them.

When player click a first card:
  - A card will be shown.

When Player click in a second card:
  - The timer will start.
  - If both cards match, cards remain open and change color.
  - If both cards don’t match, cards get hidden.

Player will be rate by stars depending the amount of moves player had taken to show all cards.  The more moves the player take, more stars will be taken away.

Player can restart the game at any time by clicking restart icon on the top right of the deck.

When player matched all the cards:
  - A pop up message will be shown congratulating the player for finishing.
  - Time and moves taken to complete it.
  - Players rate.
  - Button to play again players rate and a play again button.
  
## Known issue

If player click very quick a third card can be seen.  Though it will count as part of the next move.

## External sources

Fonts and Icons for the game were taken from [https://fontawesome.com/](https://fontawesome.com/) and [https://fonts.google.com/](https://fonts.google.com/).

Inside JS file Udacity provided a shuffle function which was taken from [http://stackoverflow.com/a/2450976](http://stackoverflow.com/a/2450976).
