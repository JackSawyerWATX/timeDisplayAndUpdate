# Dynamic Greeting with Current Time

This project is a simple JavaScript program that displays a **greeting based on the current time** (Good Morning / Good Afternoon / Good Evening) along with the **current time in 12-hour format**. It also demonstrates **local vs. global variable scope** with a simple `showMessage` function.

---

## Features

- Determines the appropriate greeting based on the current hour.
- Displays the current time with hours, minutes, seconds, and AM/PM.
- Shows the difference between local and global variables.
- Easy to run in any terminal with Node.js installed.

---

## Files

- `script.js` – Main JavaScript file containing all the code.

---

## How It Works

1. The program uses the `Date` object to get the **current time**.
2. It formats hours into **12-hour format** and minutes/seconds with leading zeros.
3. A greeting is determined based on the hour:
   - Morning: 0 – 11
   - Afternoon: 12 – 17
   - Evening: 18 – 23
4. The `showMessage` function demonstrates **local variable scope** by printing a different message than the global variable.

---

## Example Output

```
Good Afternoon — 3:42:08 PM
Local
Global
```


- First line: Greeting + current time.
- Second line: Local variable from `showMessage()`.
- Third line: Global variable.

---

## Prerequisites

- Node.js installed (version 14 or higher recommended)
- Terminal or command prompt

---

## How to Run

1. Open a terminal.
2. Navigate to the folder containing `greeting.js`.
3. Run the program using Node.js:

```bash
node script.js
