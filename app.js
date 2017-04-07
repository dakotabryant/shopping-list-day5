// Someone types new item in text area
// User submits, and event fires
let appState = {
    items: []
};
// this function adds a new item to the state
let editingObject = {
    state: appState,

    addItem: function(task) {
        let item = { title: task, done: false};
        item.title = task;
        this.state.items.push(item);
    },

    deleteItem: function(itemIndex) {
        let currentItem = this.state.items;
        currentItem.splice(itemIndex, 1);
    },

    checkItem: function(itemIndex) {
        this.state.items[itemIndex].done = !this.state.items[itemIndex].done;
    }
}


let renderObject = {
    render: function(state) {
      let listParent = $('.shopping-list');
        listParent.html('');
        let newString = '';
        state.items.forEach(function(item) {
            let htmlElement = `<li>
                              <span class="shopping-item">${item.title}</span>
                              <div class="shopping-item-controls">
                                <button class="shopping-item-toggle">
                                  <span class="button-label">check</span>
                                </button>
                                <button class="shopping-item-delete">
                                  <span class="button-label">delete</span>
                                </button>
                              </div>
                          </li>`
            newString += htmlElement;
        });

        listParent.append(newString);
    }
}

$('#js-shopping-list-form').submit(function(event) {
    let input = $('#shopping-list-entry').val();
    event.preventDefault();
    editingObject.addItem(input);
    renderObject.render(appState);
});
