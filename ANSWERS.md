# Assessment Answers

### 1. How to Run
[cite_start]To run this project on a fresh machine, open the folder in Visual Studio Code, right-click `index.html`, and select **Open with Live Server**[cite: 8, 9]. [cite_start]No additional installations or framework dependencies are strictly required to compile the application[cite: 3, 9]. 

* **Live Deployment URL:** [Paste your Vercel or Netlify link here after you deploy in the next step!]

---

### 2. Stack & Design Choices
* [cite_start]**Stack Choice:** I chose vanilla HTML5, CSS3, and modern JavaScript[cite: 3, 10]. [cite_start]Because a tip calculator is a highly focused, single-screen utility, using a framework like React would add unnecessary bundle weight and configuration boilerplate[cite: 3, 10]. Vanilla JS ensures a fast load time and instant responsiveness.
* [cite_start]**Interaction Decision 1:** I designed a side-by-side split container on desktop layouts[cite: 11]. [cite_start]The left 50% contains inputs, and the right 50% houses a dark-colored output card[cite: 11]. [cite_start]This follows a natural left-to-right reading pattern, letting the user watch the output adjust immediately as they type on the left side[cite: 22].
* [cite_start]**Interaction Decision 2:** On mobile screens, the layout stacks vertically rather than squishing horizontally[cite: 11, 12]. [cite_start]I placed the input area at the top and the output card at the bottom [cite: 11] [cite_start]so that when a smartphone’s native virtual keyboard pops up, it overlays safely without blocking the final calculation text[cite: 34].

---

### 3. Responsive & Accessibility
* [cite_start]**Responsiveness:** On a 360px mobile viewport, the app stacks into a single-column block layout[cite: 12]. [cite_start]On a 1440px desktop viewport, it shifts into an expansive side-by-side row layout using explicit CSS media queries[cite: 12].
* [cite_start]**Accessibility Handled:** I added distinct `:focus` keyboard ring indicators with a bright teal border on all numeric inputs and preset buttons[cite: 13, 34]. [cite_start]This ensures users relying exclusively on `Tab` keyboard navigation can easily identify exactly which item is currently active[cite: 13, 34].
* [cite_start]**Accessibility Skipped:** I knowingly skipped advanced `aria-live` announcements for real-time mathematical changes[cite: 14]. [cite_start]While useful for screen readers to hear dynamic calculation changes instantly, integrating robust screen reader alerts across rapid character inputs requires extensive state debouncing that fell outside the core timeline of this task[cite: 14, 35].

---

### 4. AI Usage
* [cite_start]**Tool Used:** Gemini / ChatGPT [cite: 15]
* [cite_start]**Prompt Asked:** "Give me a clean responsive grid structure for modern CSS button elements." [cite: 15]
* [cite_start]**What it Gave:** It provided a layout containing absolute fixed columns like `grid-template-columns: repeat(3, 100px);`[cite: 15].
* [cite_start]**What I Tweaked:** I modified the AI's output to use a fluid grid structure: `grid-template-columns: repeat(2, 1fr);` updating to `repeat(3, 1fr);` on desktop[cite: 16, 18]. [cite_start]I switched it to use fractional units (`1fr`) so that the preset buttons scale proportionally to stretch across the full width of the input area cleanly, regardless of fractional screen variances[cite: 18].

---

### 5. Honest Gap / Rounding Policy
* [cite_start]**Rounding Policy:** I implemented a standard nearest-cent rounding policy using JavaScript's `.toFixed(2)`[cite: 29]. [cite_start]In a consumer scenario, standard monetary rounding is intuitive and widely expected[cite: 29, 30]. [cite_start]If splitting a precise bill leaves fractions of a cent remaining, the small discrepancy is absorbed traditionally, keeping individual splits predictable[cite: 29, 30].
* [cite_start]**Honest Gap:** If given an extra 24 hours, I would love to build a dynamic "remainder-distribution" algorithm rather than relying entirely on decimal rounding[cite: 19, 30]. [cite_start]If splitting a bill results in uneven pennies, the app could intelligently assign the odd cent to the first person in the group so that the aggregated mathematical total perfectly equals the original bill down to the absolute single cent[cite: 19, 30].