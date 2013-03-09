
function todoController($scope){
    
    $scope.todos = [
        {text: "Study angular js", done: false},
        {text: "Build an todo app", done: false}
    ];
    
    $scope.totalTodos = function(){
        return $scope.todos.length;
    }
    
    $scope.addTodo = function(){
        console.log($scope.addTodoText)
        if($scope.addTodoText == '' || $scope.addTodoText == undefined) return;
        $scope.todos.push({text: $scope.addTodoText, done: false})
        $scope.addTodoText = ''
    }
    
    $scope.clearCompletedTodos = function(){
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done
        });
    }
    
    $scope.editTodo = function(todo){
        todo.editing = true;
    }
    
    $scope.doneEditing = function(todo){
        console.log("hiasd");
        todo.editing = false;
    }   
    
    $scope.doNothing = function(){
        return false;
    }

}

