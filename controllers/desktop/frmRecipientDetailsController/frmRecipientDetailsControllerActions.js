define({
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
    /** onClick defined for btnDone **/
    AS_Button_c4ba7b6f42f54b6e879a471f6e59ff28: function AS_Button_c4ba7b6f42f54b6e879a471f6e59ff28(eventobject) {
        var self = this;
        self.view.flexSuccess.isVisible = false;
        self.view.forceLayout();
        var ntf = new voltmx.mvc.Navigation("frmRecipientList");
        ntf.navigate();
    },
    /** onClick defined for btnEdit **/
    AS_Button_ea8d9b62387844ab8099b4199f23896e: function AS_Button_ea8d9b62387844ab8099b4199f23896e(eventobject) {
        var self = this;
        return self.onEditClick.call(this);
    },
    /** onClick defined for btnDelete **/
    AS_Button_fa04b98406414b6b90d491de34e06786: function AS_Button_fa04b98406414b6b90d491de34e06786(eventobject) {
        var self = this;

        function SHOW_ALERT_a159d99ca3334784a5e6fd8bb112faf1_True() {}

        function INVOKE_OBJECT_SERVICE_hadd2cb85f5f49688129c53ad9fe32e2_Callback(Recipients) {
            voltmx.application.dismissLoadingScreen();
            if (Recipients.opstatus == 0) {
                self.view.flexSuccess.isVisible = true;
                self.view.forceLayout();
            } else {
                function SHOW_ALERT_a159d99ca3334784a5e6fd8bb112faf1_Callback() {
                    SHOW_ALERT_a159d99ca3334784a5e6fd8bb112faf1_True();
                }
                voltmx.ui.Alert({
                    "alertType": constants.ALERT_TYPE_INFO,
                    "alertTitle": null,
                    "yesLabel": null,
                    "noLabel": null,
                    "alertIcon": null,
                    "message": "Record deletion failed! Please try again later.",
                    "alertHandler": SHOW_ALERT_a159d99ca3334784a5e6fd8bb112faf1_Callback
                }, {
                    "iconPosition": constants.ALERT_ICON_POSITION_LEFT
                });
            }
        }
        voltmx.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
        if (Recipients_inputparam == undefined) {
            var Recipients_inputparam = {};
        }
        Recipients_inputparam["serviceID"] = "RecipientStorage$Recipients$delete";
        Recipients_inputparam["options"] = {
            "access": "online",
            "CRUD_TYPE": "delete"
        };
        var data = {};
        data["RecipientID"] = voltmx.visualizer.toNumber(self.view.lblRecipientIDValue.text);
        Recipients_inputparam["options"]["data"] = data;
        var Recipients_httpheaders = {};
        Recipients_inputparam["httpheaders"] = Recipients_httpheaders;
        var Recipients_httpconfigs = {};
        Recipients_inputparam["httpconfig"] = Recipients_httpconfigs;
        RecipientStorage$Recipients$delete = mfobjectsecureinvokerasync(Recipients_inputparam, "RecipientStorage", "Recipients", INVOKE_OBJECT_SERVICE_hadd2cb85f5f49688129c53ad9fe32e2_Callback);
    },
    /** onClick defined for flxAccountTab **/
    AS_FlexContainer_bff16002e3e34215bdce9cf7e2d52454: function AS_FlexContainer_bff16002e3e34215bdce9cf7e2d52454(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("frmAccountList");
        ntf.navigate();
    },
    /** onClick defined for flxBack **/
    AS_FlexContainer_d3121d3b7ce84798ab5a7485aaad7449: function AS_FlexContainer_d3121d3b7ce84798ab5a7485aaad7449(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("frmRecipientList");
        ntf.navigate();
    },
    /** onClick defined for flxUserLogout **/
    AS_FlexContainer_jccb66161f414bcc8d3b82bfa02456d8: function AS_FlexContainer_jccb66161f414bcc8d3b82bfa02456d8(eventobject) {
        var self = this;

        function INVOKE_SERVICE_c503a4a855ac487698aa492266b6d672_Success(response) {
            var ntf = new voltmx.mvc.Navigation("frmUserLogin");
            ntf.navigate();
        }

        function INVOKE_SERVICE_c503a4a855ac487698aa492266b6d672_Failure(error) {}
        if (logout_inputparam == undefined) {
            var logout_inputparam = {};
        }
        logout_inputparam["serviceID"] = "UserAuthentication$logout";
        logout_inputparam["operation"] = "logout";
        UserAuthentication$logout = mfidentityserviceinvoker("UserAuthentication", logout_inputparam, INVOKE_SERVICE_c503a4a855ac487698aa492266b6d672_Success, INVOKE_SERVICE_c503a4a855ac487698aa492266b6d672_Failure);
    },
    /** onMapping defined for frmRecipientDetails **/
    AS_Form_f166302c45d24df1a5eb0da282274af2: function AS_Form_f166302c45d24df1a5eb0da282274af2(eventobject) {
        var self = this;

        function SHOW_ALERT_a4fbd517934a4006800aa399b452f5d1_True() {}

        function INVOKE_OBJECT_SERVICE_ea320af286be47f2a52e2f6f3e201d1e_Callback(Recipients) {
            voltmx.application.dismissLoadingScreen();
            if (Recipients.opstatus == 0) {
                self.view.lblRecipientIDValue.text = voltmx.visualizer.toString(Recipients["records"][0]["RecipientID"]);
                self.view.lblFirstNameValue.text = Recipients["records"][0]["FirstName"];
                self.view.lblLastNameValue.text = Recipients["records"][0]["LastName"];
                self.view.lblNickNameValue.text = Recipients["records"][0]["NickName"];
                self.view.lblPhoneValue.text = Recipients["records"][0]["Phone"];
            } else {
                function SHOW_ALERT_a4fbd517934a4006800aa399b452f5d1_Callback() {
                    SHOW_ALERT_a4fbd517934a4006800aa399b452f5d1_True();
                }
                voltmx.ui.Alert({
                    "alertType": constants.ALERT_TYPE_INFO,
                    "alertTitle": null,
                    "yesLabel": null,
                    "noLabel": null,
                    "alertIcon": null,
                    "message": "Data fetch failed! Please try again later.",
                    "alertHandler": SHOW_ALERT_a4fbd517934a4006800aa399b452f5d1_Callback
                }, {
                    "iconPosition": constants.ALERT_ICON_POSITION_LEFT
                });
            }
        }
        voltmx.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
        if (Recipients_inputparam == undefined) {
            var Recipients_inputparam = {};
        }
        Recipients_inputparam["serviceID"] = "RecipientStorage$Recipients$get";
        Recipients_inputparam["options"] = {
            "access": "online",
            "CRUD_TYPE": "get"
        };
        var odataParams = [];
        var filters = [];
        filters.push("RecipientID eq '" + voltmx.visualizer.toNumber(self.view.lblRecipientIDValue.text) + "'");
        odataParams.push("$filter=" + filters.join(' and '));
        Recipients_inputparam["options"]["odataurl"] = odataParams.join("&");
        var Recipients_httpheaders = {};
        Recipients_inputparam["httpheaders"] = Recipients_httpheaders;
        var Recipients_httpconfigs = {};
        Recipients_inputparam["httpconfig"] = Recipients_httpconfigs;
        RecipientStorage$Recipients$get = mfobjectsecureinvokerasync(Recipients_inputparam, "RecipientStorage", "Recipients", INVOKE_OBJECT_SERVICE_ea320af286be47f2a52e2f6f3e201d1e_Callback);
    }
});