# DevStack 🚀

A simple React app where you can pick technologies from a list and build your own "tech stack" — add stuff you use, remove stuff you dont use anymore. Made this while learning React, so its not super complex but it cover the basic concepts pretty good.

## What it does

Basically you got a list of technologies (comes from a JSON file), you select one, it get added to your stack. Dont want it anymore? just remove it, simple as that. Also shows toast notifications so you know when something happend (added/removed).

## Tech Used

- **React.js** – for building the UI
- **TypeScript / JavaScript (ES6+)** – for the logic
- **Tailwind CSS** – for styling, makes things fast
- **React-Toastify** – for the notification popups
- **JSON** – storing the technology data (name, icon etc)

## Features

1. **Select & Add Technology** – Pick any tech from the list and it get added into your personal stack instantly.
2. **Remove Technology** – Change your mind? remove any technology from your stack whenever you want, no page reload needed.
3. **Toast Notifications** – Every add/remove action shows a nice toast message so user always know whats going on (thanks to react-toastify).

---

## React Concepts Used (Q&A)

**1. What is JSX, and why is it used in React?**
JSX is basically a way to write HTML-like code directly inside JavaScript. React use it because it make writing UI components way more readable, instead of calling `React.createElement()` everytime you can just write something like `<div>Hello</div>` and React understand it under the hood.

**2. What is the difference between props and state?**
Props is data that come from the parent component, and the child cant change it — its read-only from childs side. State is data that belongs to the component itself and it *can* change over time (like when user clicks a button). So think of props as "given to you" and state as "your own thing you control".

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a component have its own memory/state that update the UI when it changes. In this project I used it to keep track of the selected technologies in the stack — so everytime i add or remove one, the state update and React automatically re-render the list on screen.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` is normally used to run side-effect (like fetching data, subscriptions etc) after the component render. But honestly in this project I didnt actually use `useEffect` — the JSON data is imported directly at the top of the file like a normal JS import, so it was avaliable immediately without needing to "fetch" it, no side-effect was needed here.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to keep track of which item is which when the list changes (like re-order, add, remove). Without a proper unique key, React can get confused about which item is which and it might re-render things wrong or cause bugs, plus you get that annoying warning in console lol.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on some condition. Like in this project, if the stack array is empty, instead of showing a blank space I show a message like "Your stack is empty, add something!" — something like:
```jsx
{stack.length === 0 ? <p>Your stack is empty!</p> : <StackList items={stack} />}
```

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
Parent to child: you just pass data as **props**, like `<Child data={someValue} />` and the child just receive it through its function parameters.
Child to parent is a bit different — since child cant directly change parent's state, the parent pass down a *function* as a prop, and the child just calls that function (usually with some data) whenever it needs to "send" something back up, like when clicking a remove button.