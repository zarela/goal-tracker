# goal-tracker-app: Goal Digger
Goal tracker application with points and rewards system

[Heroku Link] (https://goal-digger.herokuapp.com/)

[App Wireframe](https://drive.google.com/file/d/0B9p6hJKmZMZEVmxzQy1pTTJMckU/view?usp=sharing)

## App Overview

Goal Digger is an application intended to keep track of weekly goals, where the user can assign points to each goal.
1  = Easy to accomplish
5  = Medium difficulty to accomplish
10 = Hard to accomplish

By assigning points to this goals, the user can weight the difficulty of being accomplished. At the same time, the user can create rewards and assign points as well.

The intention of this app is to keep track of the points accumulated by accomplish goals and keeping track of how many points are needed to claim a reward.

## Unsolved features:

* Points are not being added
* UPDATE is not working because I was not able to extract a goal id from the array of goals
* Points for rewards are not being added
* Just as goals, I cannot update rewards
* Due date is including local time and I wish to show the date only
* Couldn't have all users page. This page is supposed to show other users points only.

## User Stories

As a user I would like to:
* Create an account
* Successfully login
* User can see other users points only
* Create goals
* Edit goals later if possible
* Have a deadline to accomplish those goals
* Have a record history of what I have accomplished
* Have a record history of my rewards
* Edit my rewards and add more points if possible
* Delete a goal if not longer want it // same with a reward
* See how many points away I am from my rewards
* Successfully logout and login again without any issues

## Stretch Goals

* Reminders when login in
* Inspirational quotes
* Choose Between Monthly and Weekly
* Special trophies for hard goals or long term goals
* Create another page for other users to see (restricted)// If user if matches...

## Entity Relationship Diagrams (Database Modeling)

User = {
  username: String,
  password: String,
  goals: [goalSchema],
  rewards:[rewardSchema],
  totalPoints: Number,
}

Goal = {
  goalPoints:Number,
  completed: Boolean,
  deadline: Date,
  body: String
}

Reward = {
  rewardPoints: Number,
  achieved: Boolean,
  bodyReward: String
}

## FOLDERS

### Public

* CSS file includes:
 * style.css as a main css stylesheet file
 * reset.css code to help maintain consistency across multiple browsers. Source code taken from: http://meyerweb.com/eric/tools/css/reset/reset.css

### Models

* user.js includes:
* reward.js
* goal.js

### Controllers

* index.js: Includes the main route to "/" index page, which is the homepage.
* users.js: Includes authentication, routes to user's page and routes to user's goals and rewards.

### Views

* Layout: Includes header and footer
* Homepage: Main page, where users can create an account and login
* User: User's main page with boards of created goals and rewards
* Show: Includes show page for a single goals
* All Users: Page where all users can be displayed showing only their points (NOT WORKING)

### Copyrights

Art used:
Logo on header:
http://vignette2.wikia.nocookie.net/inanimateinsanity/images/e/e2/TrophyPro.png

Number 1 Medal on goal board:
http://carton2garden.com/wp-content/themes/carton2garden/assets/img/1st-place.png

Small trophy on rewards board:
http://www.clipartkid.com/images/758/trophy-icon-black-clipart-panda-free-clipart-images-H6GJZs-clipart.png
