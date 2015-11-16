Application.$controller("MainPageController", ["$scope", function($scope) {
    "use strict";

    /* perform any action with the variables inside this block(on-page-load) */
    $scope.onPageVariablesReady = function() {
        /*
         * variables can be accessed through '$scope.Variables' property here
         * e.g. $scope.Variables.staticVariable1.getData()
         */
    };

    /* perform any action with widgets inside this block */
    $scope.onPageReady = function() {
        /*
         * widgets can be accessed through '$scope.Widgets' property here
         * e.g. $scope.Widgets.byId(), $scope.Widgets.byName()or access widgets by $scope.Widgets.widgetName
         */
    };


    $scope.UserDetailsLiveform1Beforeservicecall = function($event, $operation, $data) {
        debugger
    };

}]);


Application.$controller("UserDetailsGrid1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("UserDetailsLiveform1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;


        $scope.emailChange = function($event, $isolateScope) {
            //debugger
            //if (/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/.test($isolateScope.datavalue) === true) {
            $scope.Variables.RegFormDBExecuteEmailIDexistCheck.setInput("emailID", $isolateScope.datavalue);
            $scope.Variables.RegFormDBExecuteEmailIDexistCheck.update();
            /*} else {
                $scope.Widgets.message1.caption = "Please provide valid Email"
            }*/
        };


        $scope.usernameChange = function($event, $isolateScope) {
            $scope.Variables.RegFormDBExecuteUsernameExistCheck.setInput("username", $isolateScope.datavalue);
            $scope.Variables.RegFormDBExecuteUsernameExistCheck.update();
        };





        $scope.emerRelationChange = function($event, $isolateScope) {
            if ($isolateScope.datavalue === "Other") {
                $scope.Widgets.text1.show = true;
                $(".otherRelation").prop('required', true);
            }
        };


        $scope.custom1Change = function($event, $isolateScope) {
            //debugger
            if ($scope.Widgets.UserDetailsLiveform1.Widgets.password.datavalue === $isolateScope.datavalue) {
                $scope.Widgets.message1.show = false;
            } else {
                $scope.Widgets.message1.caption = "Passwords does not match";
                $scope.Widgets.message1.show = true;
            }
        };

    }
]);