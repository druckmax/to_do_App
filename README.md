# TODO App:

- Add new todo item
- Update items as done
- Delete items
- Filter items (done/not done)
- Show number of items left to do
- Show done todos
- Don’t allow adding empty items

ToDos List App:
- "Shopping"
- "Home work"
- "Go to the gym"

## create TODOs App
### Create functions:
1. Add item
    - create function to Insert new items to toDosStore
2. Update Items
    - create function to change status of todos
3. Remove Item
    - create function to remove any item by order number
    - the function takes one Argument as item order number
4. Edit Item
    - create function to edit any item by order number
    - the function takes 2 Arguments ==> the first Argument is item order number and the Second Argument is new item value
5. filter Items
    - create function to display all pending todos
    - create function to display all done todos
6. Read TodosList
    - RenderToDosListTemplate function
    - this function prints the end Results as string template.
    - check if toDosStore is empty return a message (To do list stor is empty)
    - else return todos template

## Call Stack
    insertTodo("test1");
    insertTodo("test2");
    insertTodo("test4");
    insertTodo("test5");
    removeTodo(3);
    removeTodo(5);
    updateTodo(2);
    insertTodo("Call Alex");
    editTodo(3, "Pay bills");
    editTodo(5, "Visiting Tommy");
    pendingTodo();
    doneTodos();
render to do template ```js console.log(RenderToDosListTemplate()); // toDosStore is empty ==> To do list is empty
/ToDo List: 1- Shopping 2- Meet with PR department 3- Pay bills 4- By milk 5- Visiting Tommy 6- Check the internet connection 7- Go to supermarket 8- Meet with Ghassan 9- New test