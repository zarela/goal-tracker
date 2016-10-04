# goal-tracker-app: Goal Digger
Goal tracker application with points and rewards system

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
username: String
password: String
goals: [goalSchema],
rewards:[rewardSchema],
total points: Number,
history: (accomplishments)
}

Goal = {
points:Number,
completed: Boolean,
deadline: Date,
body: String
}

Reward = {
points: Number,
achieved: Boolean,
body: String
}

## FOLDERS

### Public

* CSS file includes:
 * style.css as a main css stylesheet file
 * reset.css code to help maintain consistency across multiple browsers. Source code taken from: http://meyerweb.com/eric/tools/css/reset/reset.css

### Models

### Controllers

### Views
