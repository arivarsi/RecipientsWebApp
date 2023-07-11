define({
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
    /** onClick defined for btnSignin **/
    AS_Button_bf46e9a3f20145c3a96572d16e9aeab6: function AS_Button_bf46e9a3f20145c3a96572d16e9aeab6(eventobject) {
        var self = this;

        function SHOW_ALERT_e0540ea5c0364909a55725d529fe889e_True() {}

        function INVOKE_IDENTITY_SERVICE_c8c08baaa34d47219c4dcaa24dcd16d2_Success(response) {
            voltmx.application.dismissLoadingScreen();
            var ntf = new voltmx.mvc.Navigation("frmAccountList");
            ntf.navigate();
        }

        function INVOKE_IDENTITY_SERVICE_c8c08baaa34d47219c4dcaa24dcd16d2_Failure(error) {
            voltmx.application.dismissLoadingScreen();

            function SHOW_ALERT_e0540ea5c0364909a55725d529fe889e_Callback() {
                SHOW_ALERT_e0540ea5c0364909a55725d529fe889e_True();
            }
            voltmx.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                "alertTitle": null,
                "yesLabel": null,
                "noLabel": null,
                "alertIcon": null,
                "message": "Login failed. Please try again.",
                "alertHandler": SHOW_ALERT_e0540ea5c0364909a55725d529fe889e_Callback
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
        }
        voltmx.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
        if (login_inputparam == undefined) {
            var login_inputparam = {};
        }
        login_inputparam["serviceID"] = "UserAuthentication$login";
        login_inputparam["operation"] = "login";
        login_inputparam["userid"] = self.view.txtUserName.text;
        login_inputparam["password"] = self.view.txtPassword.text;
        UserAuthentication$login = mfidentityserviceinvoker("UserAuthentication", login_inputparam, INVOKE_IDENTITY_SERVICE_c8c08baaa34d47219c4dcaa24dcd16d2_Success, INVOKE_IDENTITY_SERVICE_c8c08baaa34d47219c4dcaa24dcd16d2_Failure);
    },
    /** preShow defined for frmUserLogin **/
    AS_Form_i3e15d882432406dab5b07c172e6a240: function AS_Form_i3e15d882432406dab5b07c172e6a240(eventobject) {
        var self = this;
        this.view.txtUserName.text = "";
        this.view.txtPassword.text = "";
    },
    /** onDone defined for txtPassword **/
    AS_TextField_e0e4ad9766c34f19b87c42aaa0715185: function AS_TextField_e0e4ad9766c34f19b87c42aaa0715185(eventobject, changedtext) {
        var self = this;

        function INVOKE_SERVICE_g97dd17f31754be6a9d468cea2c59253_Success(response) {
            voltmx.application.dismissLoadingScreen();
            var ntf = new voltmx.mvc.Navigation("frmAccountList");
            ntf.navigate();
        }

        function INVOKE_SERVICE_g97dd17f31754be6a9d468cea2c59253_Failure(error) {
            voltmx.application.dismissLoadingScreen();

            function SHOW_ALERT_ifda69d401714f998f57b56d5fc52abc_Callback() {
                SHOW_ALERT_ifda69d401714f998f57b56d5fc52abc_True();
            }
            voltmx.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                "message": "Login is failed! Please try again Later.",
                "alertHandler": SHOW_ALERT_ifda69d401714f998f57b56d5fc52abc_Callback
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
        }

        function SHOW_ALERT_ifda69d401714f998f57b56d5fc52abc_True() {}
        voltmx.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
        if (login_inputparam == undefined) {
            var login_inputparam = {};
        }
        login_inputparam["serviceID"] = "UserAuthentication$login";
        login_inputparam["operation"] = "login";
        login_inputparam["userid"] = self.view.txtUserName.text;
        login_inputparam["password"] = self.view.txtPassword.text;
        UserAuthentication$login = mfidentityserviceinvoker("UserAuthentication", login_inputparam, INVOKE_SERVICE_g97dd17f31754be6a9d468cea2c59253_Success, INVOKE_SERVICE_g97dd17f31754be6a9d468cea2c59253_Failure);
    }
});