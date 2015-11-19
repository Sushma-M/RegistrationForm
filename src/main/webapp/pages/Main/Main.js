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
            if (/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test($isolateScope.datavalue) === true) {
                $scope.Variables.RegFormDBExecuteEmailIDexistCheck.setInput("emailID", $isolateScope.datavalue);
                $scope.Variables.RegFormDBExecuteEmailIDexistCheck.update();
            } else {
                $scope.Widgets.message1.caption = "Please provide valid Email";
                $scope.Widgets.message1.show = true;
                $scope.Widgets.message2.show = false;
                $scope.Widgets.message6.show = false;
            }
        };


        $scope.usernameChange = function($event, $isolateScope) {
            //debugger
            //if ($isolateScope.datavalue > 0 || $isolateScope.datavalue !== undefined) {
            $scope.Variables.RegFormDBExecuteUsernameExistCheck.setInput("username", $isolateScope.datavalue);
            $scope.Variables.RegFormDBExecuteUsernameExistCheck.update();
            /*} else {
                $scope.Widgets.message7.show = false;
                $scope.Widgets.message3.show = false;
            }*/
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
                $scope.Widgets.message5.show = false;
                $scope.Widgets.message9.show = true;
            } else {
                //$scope.Widgets.message5.caption = "Passwords does not match";
                $scope.Widgets.message5.show = true;
                $scope.Widgets.message9.show = false;
            }
        };

        $scope.passwordChange = function($event, $isolateScope) {
            if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test($isolateScope.datavalue) === true) {
                $scope.Widgets.message4.show = false;
                $scope.Widgets.message8.show = true;
            } else {
                $scope.Widgets.message4.show = true;
                $scope.Widgets.message8.show = false;
            }
        };


        $scope.dobChange = function($event, $isolateScope) {
            //debugger
            /*if (((new Date().getTime() - new Date($isolateScope.datavalue).getTime()) / (1000 * 3600 * 24)) / 365.25 > 18) {
                $scope.Widgets.message10.show = true;
                $scope.Widgets.message11.show = false;
            } else {
                $scope.Widgets.message11.show = true;
                $scope.Widgets.message10.show = false;
            }*/
            if (moment.duration(moment(new Date()).diff($isolateScope.datavalue)).asYears() > 18) {
                $scope.Widgets.message10.show = true;
                $scope.Widgets.message11.show = false;
            } else {
                $scope.Widgets.message11.show = true;
                $scope.Widgets.message10.show = false;
            }
        };

    }
]);