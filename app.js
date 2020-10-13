(function (){
'use strict';

var appname = angular.module('LunchCheck',[]);
appname.controller('LunchCheckController',evalLanchList);
// inject arguments for minification proofing
evalLanchList.$inject =['$scope'];
function evalLanchList($scope){
  $scope.items ="";
  // function that parse input string and return
  //the required message
  $scope.evaluator = function(){
    // remove empty items
    var list = $scope.items.replace(/ +/g, "")
                .replace(",,",",").split(',');
    // if input string is blank prompt "add data"
    if (  $scope.items == "" ){
        $scope.result="Please enter data first"
        $scope.styleBorder ={"border": "1px solid red"}
        $scope.styleFont ={"color" : "red"}
    }
    // when less than three items
    else if(list.length <=3 & list.length > 0){
      $scope.result="Enjoy!"
      $scope.styleBorder ={"border": "1px solid green"}
      $scope.styleFont ={"color" : "green"}
    }
    //when more than three items
    else if(list.length >3){
      $scope.result="Too much"
      $scope.styleBorder ={"border": "1px solid green"}
      $scope.styleFont ={"color" : "green"}

    }



      }
    }

})();
