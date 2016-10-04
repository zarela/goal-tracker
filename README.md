# goal-tracker-app: Goal Digger
Goal tracker application with points and rewards system

## User Stories

* Create an account
* Successfully login
* Create goals
* Edit goals later if possible
* Have a deadline to accomplish those goals
* Have a record history of what I have accomplished
* Have a record history of my rewards
* Edit my rewards and add more points if possible
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
