Application.run(function ($rootScope) {
    "use strict";
    /* perform any action on the variables within this block(on-page-load) */
    $rootScope.onAppVariablesReady = function () {
        /*
         * variables can be accessed through '$rootScope.Variables' property here
         * e.g. $rootScope.Variables.staticVariable1.getData()
         */
    };

	$rootScope.RegFormDBExecuteEmailIDexistCheckonSuccess = function(variable, data){
			//debugger
			if(data.content.length === 0 ) {
			    $rootScope.Widgets.message2.show = false;
			    $rootScope.Widgets.message6.show = true;
			    $rootScope.Widgets.message1.show = false;
			}
			else {
			    $rootScope.Widgets.message2.show = true;
			    $rootScope.Widgets.message1.show = false;
			    $rootScope.Widgets.message6.show = false;
			    //$rootScope.Widgets.message2.caption = "Email already registered";
			}
	};


	$rootScope.RegFormDBExecuteUsernameExistCheckonSuccess = function(variable, data){
	    	if(data.content.length === 0 ) {
			    $rootScope.Widgets.message3.show = false;
			    $rootScope.Widgets.message7.show = true;
			}
			else {
			    $rootScope.Widgets.message3.show = true;
			    $rootScope.Widgets.message7.show = false;
			    //$rootScope.Widgets.message3.caption = "Username already registered";
			}	
	};

});