# User Directory: ReactJS-based Web Application

This project is developed as part of a hiring assignment for a Frontend role at [Teachmint](https://www.teachmint.com/).

## Table of Contents

1. [Overview](#overview)
2. [Demo](#demo)
3. [Usage](#usage)
4. [Screenshots](#screenshots)
5. [Features](#features)
6. [Technologies](#technologies)
7. [Setup](#setup)

## Overview

This application interacts with the provided APIs shown below and displays a list of users, their posts, and an interactive world clock.

- [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users) (GET users)
- [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts) (GET posts)
- [http://worldtimeapi.org/api/timezone](http://worldtimeapi.org/api/timezone) (GET time zones)
- [http://worldtimeapi.org/api/timezone/:area/:location[/:region]](http://worldtimeapi.org/api/timezone/Africa/Abidjan) (GET current time)

## Demo

You can experience a live demo of the application [here](https://user-directory-charandanda.netlify.app/), hosted on Netlify.

## Usage

1. Click on a user card on the home page to navigate to the user details page.
3. Click on the dropdown to pick a time zone for the clock.
3. Toggle the button on the top right to pause or resume the clock.
4. Click on a post card to open a popup, click outside the popup to close it.
5. Click on the "Back" button to return to the home page.

## Screenshots

- Home Page:
<img width="1440" alt="Home Page" src="https://github.com/charandvvk/User-Directory/assets/87474759/759ffc95-bc11-4abd-8c70-3f006de63b1f">

- User Details Page:
<img width="1440" alt="User Details Page" src="https://github.com/charandvvk/User-Directory/assets/87474759/b4e63b77-5dd0-42f4-ace7-07906d3b4a9f">

- Time Zones Dropdown:
<img width="1440" alt="Dropdown for Time Zones" src="https://github.com/charandvvk/User-Directory/assets/87474759/ee72bbc1-4a18-4eac-9884-0cfb49157cd5">

- Post Content Popup:
<img width="1440" alt="Popup for Post Content" src="https://github.com/charandvvk/User-Directory/assets/87474759/6ddb1516-04b1-4b3d-aeb1-b9e2730a49cb">

## Features

- Clean and optimized business logic to reduce API calls.
- Unique routes to each user's details page.
- Data served via states, context, and a custom hook.
- Responsive UI, reusable and maintainable components.

## Technologies

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript/ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [React Router](https://reactrouter.com/en/main)
- [React](https://react.dev)

## Setup

To get a local copy of the project up and running, follow these steps:

1. Launch your preferred command-line interface (CLI).

2. Clone the repository: `git clone https://github.com/charandvvk/User-Directory.git`
  
3. Change to the project directory: `cd User-Directory`

4. Install dependencies: `npm i`

5. Start the development server: `npm run dev`

6. Open your favored browser and navigate to http://localhost:5173.
