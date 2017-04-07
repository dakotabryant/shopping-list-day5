// Someone types new item in text area
// User submits, and event fires
let appState = {
  items: [
    { title: 'apple', done: true },
    { title: 'orange', done: false }
  ]
};

let itemTemplate = (`<li>
                        <span class="shopping-item"></span>
                        <div class="shopping-item-controls">
                          <button class="shopping-item-toggle">
                            <span class="button-label">check</span>
                          </button>
                          <button class="shopping-item-delete">
                            <span class="button-label">delete</span>
                          </button>
                        </div>
                    </li>`);

// Event then renders a new li that includes the user item
// New li gets styling, and elements of a list item

// this function adds a new item to the state

function addItem(state, item) {
  state.items.push(item);
}

// If user clicks check button, event fires
// Check button event strikes through text

function checkItem(state, itemIndex) {
  state.items[itemIndex];
}

checkItem(appState, 0);


// If user clicks delete button, event fires
// Delete button removes the clicked li
