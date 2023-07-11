define({
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
    /** onClick defined for flxUserLogout **/
    AS_FlexContainer_a3dab1928b6e45ca87061f0d3d7b751d: function AS_FlexContainer_a3dab1928b6e45ca87061f0d3d7b751d(eventobject) {
        var self = this;

        function INVOKE_SERVICE_j5aead00ca174744a79932fcba09ea72_Success(response) {
            var ntf = new voltmx.mvc.Navigation("frmUserLogin");
            ntf.navigate();
        }

        function INVOKE_SERVICE_j5aead00ca174744a79932fcba09ea72_Failure(error) {}
        if (logout_inputparam == undefined) {
            var logout_inputparam = {};
        }
        logout_inputparam["serviceID"] = "UserAuthentication$logout";
        logout_inputparam["operation"] = "logout";
        UserAuthentication$logout = mfidentityserviceinvoker("UserAuthentication", logout_inputparam, INVOKE_SERVICE_j5aead00ca174744a79932fcba09ea72_Success, INVOKE_SERVICE_j5aead00ca174744a79932fcba09ea72_Failure);
    },
    /** onClick defined for flxRecipientTab **/
    AS_FlexContainer_ea6e54381f914c24a25f5d28c38f8d0a: function AS_FlexContainer_ea6e54381f914c24a25f5d28c38f8d0a(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("frmRecipientList");
        ntf.navigate();
    },
    /** preShow defined for frmAccountList **/
    AS_Form_a2d025a3382f4b93a8ec8f14ea509e48: function AS_Form_a2d025a3382f4b93a8ec8f14ea509e48(eventobject) {
        var self = this;

        function INVOKE_SERVICE_fa6005abc9e742068c1ba1534f85c3ab_Callback(Accounts) {
            voltmx.application.dismissLoadingScreen();
            var tempCollection3867 = [];
            var tempData5311 = Accounts.records;
            for (var each6868 in tempData5311) {
                tempCollection3867.push({
                    "lblAccountNumber": {
                        "text": tempData5311[each6868]["AccountNumber"]
                    },
                    "lblBalance": {
                        "text": tempData5311[each6868]["Balance"]
                    },
                    "lblAccountName": {
                        "text": tempData5311[each6868]["AccountName"]
                    },
                    "lblDots": {
                        "text": "..."
                    },
                });
            }
            self.view.segAccountList.setData(tempCollection3867);
        }
        voltmx.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
        if (Accounts_inputparam == undefined) {
            var Accounts_inputparam = {};
        }
        Accounts_inputparam["serviceID"] = "AccountStorage$Accounts$get";
        Accounts_inputparam["options"] = {
            "access": "online",
            "CRUD_TYPE": "get"
        };
        var Accounts_httpheaders = {};
        Accounts_inputparam["httpheaders"] = Accounts_httpheaders;
        var Accounts_httpconfigs = {};
        Accounts_inputparam["httpconfig"] = Accounts_httpconfigs;
        AccountStorage$Accounts$get = mfobjectsecureinvokerasync(Accounts_inputparam, "AccountStorage", "Accounts", INVOKE_SERVICE_fa6005abc9e742068c1ba1534f85c3ab_Callback);
    }
});