# Bryt Designs Front-end Tech Challenge
### React and Vanilla Js Multi-step Forms

### Hello fellow candidate! 👋
###### Today's challenge is to build two versions of a multi-step form, one version using Javascript/JQuery, HTML, CSS/Bootstrap and the other version using React and CSS/Tailwindcss. The styling is completely up to you, feel free to get creative 😎!

### Why a multi-step form? 🤔
###### We believe it's the best challenge to demonstrate your technical skills, problem solving and your knowledge of HTML and CSS basics.

### Why the two different tech stacks? 👨‍💻
###### The reason for the two different tech stacks has to do with the technology we use everyday. While we are moving our tech stack be more React/JS focused, some of our older projects that we maintain still use Vanilla Javascript and JQuery.

### What's the goal of this challenge? ⚽
###### I'm glad you asked! We want to get an understanding of your abilities by measuring how creative you can be, how readable your code is and how you approach problems.

### What's the process like?
###### You have 4 hours from project start to complete this challenge and submit your repo via email for review.

### Assets: 
1. [Figma Mock-up](https://www.figma.com/file/ZhMFAK1UWwKWS0L25LAYyx/Bryt-Designs-Front-end-Tech-Challenge?node-id=1%3A2)
2. [Font Awesome](https://fontawesome.com/search?m=free&s=solid%2Cregular)
3. Vanilla Js
   1. [JQuery](https://api.jquery.com/)
   2. [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/)
4. React Js
   1. [React](https://reactjs.org/docs/react-api.html)
   2. [Tailwindcss](https://tailwindcss.com/docs/installation)

**While we love dependencies and the ability to use other libraries created by amazing developers. For this challenge, please only stick to using the provided dependencies. You may install whatever icon library necessary. Both templates come with Font Awesome Icon as the default.**

#### Requirements:

- [ ] Please ensure you have all of the required fields and **follow** the structure of the provided wireframe.
- [ ] The form should be broken up into multiple steps and only one step should be visible at a time.
- [ ] Every step outside of the first step **SHOULD** have next and back button.
  - [ ] The first step **should not** have a back button.
  - [ ] The next button goes to the next step.
  - [ ] The next button should be disabled if the user has **not** filled out all of the **required** fields.
  - [ ] The back button should go back to the previous step.
- [ ] Going back to the previous step **should not** require the user to fill out the **required** fields again.
- [ ] Submitting the form should not refresh the page.
- [ ] Once submitted, the field names and their values should be logged to the console as a JSON string. **(Only the fields with values should be included within the JSON string)**
  - example ```{"firstName": "Bryt", "lastName": "Designs"}```

#### Extras *(These are just nice haves if you have more time. Do not prioritize otherwise)*

- [ ] Transition animations between each step.
- [ ] Active, Focus and Hover styling for input fields and buttons.
- [ ] Input field values saved to local storage.
  - [ ] On page load all of the fields should be populated with their respective values from local storage.
- [ ] URL updates depending on which step within the form the user is on.
- [ ] Form validation
  - [ ] Should display the error message if the value the user entered is invalid.
  - [ ] Every field should type check what the user is inputting.
