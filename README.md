# Code review by Carlos - May 13th 2025

## General comments

The code is well written and clear, uses React conventions. State updates are done correctly, by ussing immutability. Meaning that no data is mutated but the state is updated by creating a new data that adds the new value.
For example:

```javascript
function addTask() {
  if (newTask.trim() !== "") {
    setTasks((t) => [...t, newTask]);
    setNewTask("");
  }
}
```

Update is done by taking the current state `(t)` and setting it to a new array that is comprised of current state clone `(...t)` plus the item `newTask`

## Functional upgrades

1. You delete button is not working when Enter key is pressed down on keyboard. One why to fix this is to create a function that handles the form submission. I have called this handler `handleSubmit`. And then use this as the onSubmit atrribute of the form. Look how I have wrapped the input and the button with a form tag

2. Done state: I added a checkbox to the task that when clicked changes its "completed" property and strikes through the task. I used a `toggleTask(index)` function that has the task's index as parameter (`index`) and uses it to update the tasks state.

```javascript
function toggleComplete(index) {
  setTasks(
    tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    )
  );
}
```

So we map through `tasks` and check at every task if `i === index` using a ternary. So if there is no coincidence (meaning the condition is false), it will copy the task without modifying it. Otherwise it will toggle `completed` current state and leave the rest of such task as is.
Then the strikethrough part we have already study it with conditional styling

```jsx
style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
```

## Stylying upgrades

I centered the component vertically and horizontally, also I did several other style changes that I wrote inline so it would be easier for you to read. Feel free to change the color palet to your taste.

## VSCode config

I have include a `JS.code-profile` that you can import to copy my VSCode config. It will allow to set several configurations, such as autoformat when saving, automatically

---

**Good work, keep coding!**    
Carlos
