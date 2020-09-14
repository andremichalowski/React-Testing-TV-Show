
## 331 - Web Applications II - Advanced Web Applications ➡ Testing React, "React Testing TV Show"

### Objectives
  - use mocks in unit tests
  - test asynchronous API calls that are made in a component
  - test React components as the props change

### Introduction
As a developer, you will be asked to write tests for the feature you are building, and even sometimes on components and features other developers have built. This project will mimic a situation where you are asked to test someone else's code.  
Get the project fired up and start using it as a user would. Try to go through the user sequences for this feature that you think users would go through. Once you have those in mind, you will have an idea of what to test in your application.

### Instructions and/or completion requirements

Your challenge for this module: write tests for both the `App.js` component and the `Episodesjs` component. 
  Take note of:
    1. where the state is being managed, 
    2. where the async call is, 
    3. where different data peices are being rendered. 
    
  Understanding all of this will be important so you know how to test each component.

------------------------------------------------------------------------------------------------------------------

### Initial commit

- [x] Initial commit

### Task 1: Project Set Up

  Task 1A "Setup":
  - [x] Create a forked copy of this project.
  - [x] Clone your OWN version of the repository in your terminal
  - [x] CD into the project base directory `cd React-Testing-TV-Show`
  - [x] Create a new branch: git checkout -b `<firstName-lastName>`.
  - [x] Plan out Tasks/Re-organize Read-Me
  - [x] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.

  Task 1B "Dependencies":
  - [x] Push commits: git push origin `<firstName-lastName>`.
  - [x] Add your team lead as collaborator on Github.
  - [x] Download project dependencies by running `npm install`
  - [x] Start up the app using `npm start`

## Task 2: Moving the async call**

The async call being inside the component makes it hard to test the asynchronous nature of the component. 
Let's move the async function into an `/api` directory so we can easily mock that function and make the async tests easier.

1. Create a directory called `/api` in the `src` directory
  1. Create a file called `fetchShow.js`
  1. Move `fetchShow` into that new file and export it (fetchShow is in the `useEffect` - pay attention to how this was setting state. You will still need to set state in this effect hook the exact same way...)
  1. Import `fetchShow` into `App.js` so you can make your async call from your `useEffect` hook.

2. You will need to `return` the `axios.get` call, _and_ the data inside your `.then()`. This is necessary because when you call `fetchShow` in your useEffect, you need to chain off the promise for a new `.then()`, then you need the data to be returned once the promise is resolved

3. Inside your `.then()` in the `useEffect` hook, set your data again.

- Note that you need `axios` in the new file

This should look something like this:

```javascript
// fetchShow.js
export const fetchShow = () => {
  return axios.get
    .then(res => return res) // or res.data, however you want to set that up
}

 // App.js
useEffect(() => {
  fetchShow
    .then(res => {
      // set state with the data
    })
}, []);
```

## Task 3: Testing
- [] Add additional information here for tasks/workflow
- [] ...

### Stretch goals
  - [] There is an utility function in this project that contains an isolated pure function. Look up how to do `unit tests` with Jest and test that function.
  - [] Look up the `TVMaze` API. Add a dropdown with the titles of some other popular shows. Add the user sequence of choosing a different show to fetch data for different shows.
  - [] Add React Router, and add the functionality to click an episode and navigate to an episode page.

## Follow these steps for completing your project.
  - [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repository). **Please don't merge your own pull request**
  - [ ] Add your team lead as a reviewer on the pull-request
  - [ ] Your team lead will count the project as complete by merging the branch back into master.
  - [ ] Do your magic!
