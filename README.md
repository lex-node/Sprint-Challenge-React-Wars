# Sprint Challenge: React - Star Wars

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored ReactJS, Function Components, component state, side effects and styling techniques. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that uses ReactJS to consume live data retrieved from the World Wide Web and style that data nicely on the page.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL and Instructor in your cohort help channel on Slack.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you --in case you ever need to return to old code for any number of reasons-- and your Team Lead.

## Description

In this challenge, create a web page that presents a styled list of **characters obtained from an API**. Being able to render out data to a web page is a large part of what JavaScript developers do, this challenge assesses your ability to achieve such a task.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering free-form questions. Edit the `Answers.md` file at the root of the project to include your answer after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your Team Lead.

## Project Set Up

Follow these steps to set up and work on your project:

- [X] Create a forked copy of this project.
- [ ] Add TL as collaborator on Github.
- [X] Clone your OWN version of Repo. **(Not Lambda's by mistake!)**
- [X] Create a new Branch locally: `git checkout -b <firstName-lastName>`.
- [X] Change directories into `./starwars` (`cd starwars`) and run `npm install` to retrieve all needed dependencies.
- [X] Once you have installed the _node_modules_, run `npm start` to get your server up and running.
- [X] With the server up and running, open Chrome and head over to `localhost:3000` and view your beautiful app. Maybe it's not _that_ pretty... _yet_, your goal is to ensure this project becomes a thing of beauty.
Follow these steps for completing your project.
- [X] Implement the project on this Branch, **committing progress & changes often.**
- [X] Push commits: `git push origin <firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request.
- [ ] TL then will count the HW as done by merging the branch back into master.

## Minimum Viable Product

Your finished project must include all of the following requirements:

- [X] Use ONE of the following APIs:
  - [Star Wars API](https://swapi.py4e.com/)
  - [The Rick and Morty API](https://rickandmortyapi.com/)
  - [The RESTful Pokémon API](https://pokeapi.co/) (**harder**)
- [X] Use the documentation and Google to learn how to fetch characters from your API.
- [X] Obtain a list of characters. One or several requests might be needed, depending on the API.
- [X] Set the list of characters into state.
- [X] Render your characters to the screen:
  - Build a React component named 'Character' to render an individual character.
  - Map over the list in state, and for each character render a Character to the page.
  - You must display at least one element for each character in the data set.
  - The elements must be styled with either Reactstrap or styled-components - don't rely on browser default styles.

### Required best practices

- [ ] Consistent naming. Examples: variables, functions, Components, and file/folder organization.
- [ ] Consistent spacing. Examples: line breaks, around arguments and before/after functions.
- [ ] Consistent quotation usage.
- [ ] Spell-check.
- [ ] Schedule time to review, refine and reassess your work.

It is better to submit a challenge that meets [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) than one that attempts too much and fails.

### Tips and Gotchas

- [ ] Test your API and inspect the data in Chrome, _before_ writing the code for the request(s). See screenshots at the root of the project.
- [ ] Try not to hammer your API while developing. Infinite loops in your code might trigger hundreds of requests!
- [ ] The Pokemon API is a slightly harder challenge because a single network request might not be enough to get all the data you want.
- [ ] Running `npm` commands in the wrong folder will not work. **Be aware of what folder you're in** when working in the command line.
- [ ] The `start` process can sometimes choke after adding new dependencies and may need to be restarted.

## Stretch Problems

- [ ] Next week we will be looking at React forms. Look a head and try to create a search form that will filter through the data displayed from your characters.
- [ ] Build a pagination system that will allow you to load the next page of data.
  - `console.log()` the data coming back from the server.
  - There might be `next` and `previous` fields that give you a URL.
  - You can build a function that will get characters called `getCharacters` that you can use dynamically to get the next or previous set of characters. You would need to supply it with the proper fields, and you'll need to set up more state to do this.

<!--
- [ ] Build another app from scratch that looks very similar to this one. Inside of your main `App` component fetch some data in this same fashion from this url `https://dog.ceo/dog-api/#all` you'll have to follow the documentation at that website and figure out how to change up the code you've seen here in order to properly fetch the data and store it on Component State.
-->


0:
name: "Luke Skywalker"
height: "172"
mass: "77"
hair_color: "blond"
skin_color: "fair"
eye_color: "blue"
birth_year: "19BBY"
gender: "male"
homeworld: "https://swapi.py4e.com/api/planets/1/"
films: Array(5)
0: "https://swapi.py4e.com/api/films/1/"
1: "https://swapi.py4e.com/api/films/2/"
2: "https://swapi.py4e.com/api/films/3/"
3: "https://swapi.py4e.com/api/films/6/"
4: "https://swapi.py4e.com/api/films/7/"
length: 5
__proto__: Array(0)
species: ["https://swapi.py4e.com/api/species/1/"]
vehicles: (2) ["https://swapi.py4e.com/api/vehicles/14/", "https://swapi.py4e.com/api/vehicles/30/"]
starships: (2) ["https://swapi.py4e.com/api/starships/12/", "https://swapi.py4e.com/api/starships/22/"]
created: "2014-12-09T13:50:51.644000Z"
edited: "2014-12-20T21:17:56.891000Z"
url: "https://swapi.
