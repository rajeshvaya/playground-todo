//Todo controller
function todoController($scope){
    
    //initialization
    $scope.defaultTodo = {text: "You are awesome! you have no more todos to do :)", show: true};
    $scope.todos = [];
    
    //return total number of todos
    $scope.totalTodos = function(){
        var todoLength = $scope.todos.length
        $scope.defaultTodo.show = todoLength ? false : true
        return $scope.todos.length;
    }
    
    //add a new todo in the list
    $scope.addTodo = function(){
        console.log($scope.addTodoText)
        if($scope.addTodoText == '' || $scope.addTodoText == undefined) return;
        $scope.todos.push({text: $scope.addTodoText, done: false})
        $scope.saveToLocalStorage();
        $scope.addTodoText = ''
    }
    
    //edit a todo from  the list
    $scope.editTodo = function(todo){
        todo.editing = true;
    }
    
    //remove a todo from the list
    $scope.removeTodo = function(idx){
        $scope.todos.splice(idx,1);
        $scope.saveToLocalStorage();
    }
    
    //clear the completed todos (using underscore.js filter method)
    $scope.clearCompletedTodos = function(){
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done
        });
        $scope.saveToLocalStorage();
    }
    
    //reset flag after editing
    $scope.doneEditing = function(todo){
        todo.editing = false;
        $scope.saveToLocalStorage();
    }   
    
    
    //save todos to local storage if available
    $scope.saveToLocalStorage = function(){
        console.log("Saving to local storage");
        if(window.localStorage){
            window.localStorage.setItem("_todos", JSON.stringify($scope.todos))
        }
        return;
    }
    
    //get back todo list from local storage if available
    $scope.getFromLocalStorage = function(){
        if(window.localStorage){
            storedTodos = window.localStorage.getItem("_todos");
            if(storedTodos) $scope.todos = JSON.parse(storedTodos);
        }
        return;
        
    }
    
    //empty method to do nothing
    $scope.doNothing = function(){
        return false;
    }
    
    //check for saved todos in local storage
    $scope.getFromLocalStorage();

}

