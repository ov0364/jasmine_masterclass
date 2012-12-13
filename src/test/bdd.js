describe("TODO APP", function() {
  it("should be able to add a todo item", function() {
	//Given
	// A TODO list with n number(s) of items.
	var nrTodoListItems = $("#todo-list").children().length;
	var $NewTodo = $("#new-todo");
	var $TodoList = $("#todo-list");
	
	//When
	// Entering a new to item.
	$NewTodo.val("my new item.");
	e = $.Event("keyup");
	e.which = 13; // # Some key code value
	$NewTodo.trigger(e);

	//Then
	// The TODO list has been increased with one item.
	expect($TodoList.children().length).toEqual(nrTodoListItems + 1);
  });
  
  it("should delete an item.", function(){
	  waits(4000);
	  
	  runs(function(){
		  //Given
		  var $removeButton = $(".destroy:first"),
		  nrTodoListItems = $("#todo-list").children().length,
		  $TodoList = $("#todo-list");
		  
		  //When
		  $removeButton.click();
		  
		  //Then
		  expect($TodoList.children().length).toEqual(nrTodoListItems - 1);
		  
	  });
  });
});