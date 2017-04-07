// Someone types new item in text area
// User submits, and event fires
let appState = {
    items: []
};
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

    itemIndex: function(itemName) {
      return this.state.items.findIndex(function(item) {
        return item.title === itemName;
      })
    },

    checkItem: function(itemName) {
        var index = this.itemIndex(itemName);
        this.state.items[index].done = this.state.items[index].done ? false : true;
    }
}

let renderObject = {
    render: function(state) {
      let listParent = $('.shopping-list');
        listParent.html('');
        let newString = '';
        state.items.forEach(function(val) {
            let done = '';
            if(val.done === true) {
              done = 'shopping-item__checked';
            }
            let htmlElement = `<li>
                              <span class="shopping-item ${done}">${val.title}</span>
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

$('.shopping-list').on('click', 'button', function(event) {
  if($(this).hasClass('shopping-item-toggle')) {
    editingObject.checkItem($(event.target).closest('li').find('.shopping-item').text());
    renderObject.render(appState);
    console.log(appState.items);

  } else if($(this).hasClass('shopping-item-delete')) {
    editingObject.deleteItem();

    renderObject.render(appState);
  }
})
