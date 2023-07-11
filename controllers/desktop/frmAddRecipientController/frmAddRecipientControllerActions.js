define({
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
    /** onClick defined for btnDone **/
    AS_Button_a1315d85d7aa44859a739fb31e124327: function AS_Button_a1315d85d7aa44859a739fb31e124327(eventobject) {
        var self = this;
        self.view.flexSuccess.isVisible = false;
        self.view.forceLayout();
        var ntf = new voltmx.mvc.Navigation("frmRecipientList");
        ntf.navigate();
    },
    /** onClick defined for btnAdd **/
    AS_Button_f075866e472e4bfd9179ef31b25cc053: function AS_Button_f075866e472e4bfd9179ef31b25cc053(eventobject) {
        var self = this;

        function SHOW_ALERT_ja0d2812cc444909bce87788a7acd678_True() {}

        function INVOKE_OBJECT_SERVICE_f0beb0a33ec54b0b88f203ec9c95e320_Callback(Recipients) {
            voltmx.application.dismissLoadingScreen();
            if (Recipients.opstatus == 0) {
                self.view.flexSuccess.isVisible = true;
                self.view.forceLayout();
            } else {
                function SHOW_ALERT_ja0d2812cc444909bce87788a7acd678_Callback() {
                    SHOW_ALERT_ja0d2812cc444909bce87788a7acd678_True();
                }
                voltmx.ui.Alert({
                    "alertType": constants.ALERT_TYPE_INFO,
                    "alertTitle": null,
                    "yesLabel": null,
                    "noLabel": null,
                    "alertIcon": null,
                    "message": "Record creation failed! Please try again later.",
                    "alertHandler": SHOW_ALERT_ja0d2812cc444909bce87788a7acd678_Callback
                }, {
                    "iconPosition": constants.ALERT_ICON_POSITION_LEFT
                });
            }
        }

        function SHOW_ALERT_b96784bef81842a6b1d6176c846832cb_True() {}
        if ((self.view.tbxFirstName.text == "") || (self.view.tbxLastName.text == "") || (self.view.tbxPhone.text == "")) {
            function SHOW_ALERT_b96784bef81842a6b1d6176c846832cb_Callback() {
                SHOW_ALERT_b96784bef81842a6b1d6176c846832cb_True();
            }
            voltmx.ui.Alert({
                "alertType": constants.ALERT_TYPE_ERROR,
                "alertTitle": "Error",
                "yesLabel": "OK",
                "message": "Please Enter All The Fields",
                "alertHandler": SHOW_ALERT_b96784bef81842a6b1d6176c846832cb_Callback
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
        } else {
            voltmx.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
            if (Recipients_inputparam == undefined) {
                var Recipients_inputparam = {};
            }
            Recipients_inputparam["serviceID"] = "RecipientStorage$Recipients$create";
            Recipients_inputparam["options"] = {
                "access": "online",
                "CRUD_TYPE": "create"
            };
            var data = {};
            data["FirstName"] = self.view.tbxFirstName.text;
            data["LastName"] = self.view.tbxLastName.text;
            data["NickName"] = self.view.tbxNickName.text;
            data["Phone"] = self.view.tbxPhone.text;
            Recipients_inputparam["options"]["data"] = data;
            var Recipients_httpheaders = {};
            Recipients_inputparam["httpheaders"] = Recipients_httpheaders;
            var Recipients_httpconfigs = {};
            Recipients_inputparam["httpconfig"] = Recipients_httpconfigs;
            RecipientStorage$Recipients$create = mfobjectsecureinvokerasync(Recipients_inputparam, "RecipientStorage", "Recipients", INVOKE_OBJECT_SERVICE_f0beb0a33ec54b0b88f203ec9c95e320_Callback);
        }
    },
    /** onClick defined for btnCancel **/
    AS_Button_fb0e7f1531e34721a23699b98571e0c3: function AS_Button_fb0e7f1531e34721a23699b98571e0c3(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("frmRecipientList");
        ntf.navigate();
    },
    /** onClick defined for flxUserLogout **/
    AS_FlexContainer_cde330a554934f9e9220cdb90a35cac1: function AS_FlexContainer_cde330a554934f9e9220cdb90a35cac1(eventobject) {
        var self = this;

        function INVOKE_SERVICE_f9e055f9bc6b4bd09ccd39068249a342_Success(response) {
            var ntf = new voltmx.mvc.Navigation("frmUserLogin");
            ntf.navigate();
        }

        function INVOKE_SERVICE_f9e055f9bc6b4bd09ccd39068249a342_Failure(error) {}
        if (logout_inputparam == undefined) {
            var logout_inputparam = {};
        }
        logout_inputparam["serviceID"] = "UserAuthentication$logout";
        logout_inputparam["operation"] = "logout";
        UserAuthentication$logout = mfidentityserviceinvoker("UserAuthentication", logout_inputparam, INVOKE_SERVICE_f9e055f9bc6b4bd09ccd39068249a342_Success, INVOKE_SERVICE_f9e055f9bc6b4bd09ccd39068249a342_Failure);
    },
    /** onClick defined for flxAccountTab **/
    AS_FlexContainer_e4cef24065ef4f0fa6948100439dd684: function AS_FlexContainer_e4cef24065ef4f0fa6948100439dd684(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("frmAccountList");
        ntf.navigate();
    },
    /** onClick defined for flxBack **/
    AS_FlexContainer_jfd01565ab454e6daa7130b1bdabd4b9: function AS_FlexContainer_jfd01565ab454e6daa7130b1bdabd4b9(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("frmRecipientList");
        ntf.navigate();
    },
    /** preShow defined for frmAddRecipient **/
    AS_Form_b8493f4231104140b5e3bc829a54f3ef: function AS_Form_b8493f4231104140b5e3bc829a54f3ef(eventobject) {
        var self = this;
        this.view.tbxFirstName.text = "";
        this.view.tbxLastName.text = "";
        this.view.tbxNickName.text = "";
        this.view.tbxPhone.text = "";
    }
});