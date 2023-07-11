define({
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
    /** onClick defined for btnDone **/
    AS_Button_d4c41bbe63324487ac997684389e7b8b: function AS_Button_d4c41bbe63324487ac997684389e7b8b(eventobject) {
        var self = this;
        return self.onUpdate.call(this);
    },
    /** onClick defined for btnUpdate **/
    AS_Button_e93c154ab3c24dfb99d8b7727ecdb500: function AS_Button_e93c154ab3c24dfb99d8b7727ecdb500(eventobject) {
        var self = this;

        function SHOW_ALERT_eca1b75072cc4c2b915a85641c44fb49_True() {}

        function INVOKE_OBJECT_SERVICE_db8716010d104243ad768eb62f001fd2_Callback(Recipients) {
            if (Recipients.opstatus == 0) {
                self.view.flexSuccess.isVisible = true;
                self.view.forceLayout();
            } else {
                function SHOW_ALERT_eca1b75072cc4c2b915a85641c44fb49_Callback() {
                    SHOW_ALERT_eca1b75072cc4c2b915a85641c44fb49_True();
                }
                voltmx.ui.Alert({
                    "alertType": constants.ALERT_TYPE_INFO,
                    "alertTitle": null,
                    "yesLabel": null,
                    "noLabel": null,
                    "alertIcon": null,
                    "message": "Record updation failed! Please try again later.",
                    "alertHandler": SHOW_ALERT_eca1b75072cc4c2b915a85641c44fb49_Callback
                }, {
                    "iconPosition": constants.ALERT_ICON_POSITION_LEFT
                });
            }
            voltmx.application.dismissLoadingScreen();
        }

        function SHOW_ALERT_jce0fd871dd24c80a91ba64800c09007_True() {}
        if ((self.view.tbxFirstName.text == "") || (self.view.tbxLastName.text == "") || (self.view.tbxPhone.text == "")) {
            function SHOW_ALERT_jce0fd871dd24c80a91ba64800c09007_Callback() {
                SHOW_ALERT_jce0fd871dd24c80a91ba64800c09007_True();
            }
            voltmx.ui.Alert({
                "alertType": constants.ALERT_TYPE_ERROR,
                "alertTitle": "Error",
                "yesLabel": "OK",
                "message": "Please enter all the fields.",
                "alertHandler": SHOW_ALERT_jce0fd871dd24c80a91ba64800c09007_Callback
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
        } else {
            voltmx.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
            if (Recipients_inputparam == undefined) {
                var Recipients_inputparam = {};
            }
            Recipients_inputparam["serviceID"] = "RecipientStorage$Recipients$update";
            Recipients_inputparam["options"] = {
                "access": "online",
                "CRUD_TYPE": "update"
            };
            var data = {};
            data["PayeeID"] = voltmx.visualizer.toNumber(self.view.lblPayeeID.text);
            data["FirstName"] = self.view.tbxFirstName.text;
            data["LastName"] = self.view.tbxLastName.text;
            data["NickName"] = self.view.tbxNickName.text;
            data["Phone"] = self.view.tbxPhone.text;
            data["RecipientID"] = voltmx.visualizer.toNumber(self.view.lblPayeeID.text);
            Recipients_inputparam["options"]["data"] = data;
            var Recipients_httpheaders = {};
            Recipients_inputparam["httpheaders"] = Recipients_httpheaders;
            var Recipients_httpconfigs = {};
            Recipients_inputparam["httpconfig"] = Recipients_httpconfigs;
            RecipientStorage$Recipients$update = mfobjectsecureinvokerasync(Recipients_inputparam, "RecipientStorage", "Recipients", INVOKE_OBJECT_SERVICE_db8716010d104243ad768eb62f001fd2_Callback);
        }
    },
    /** onClick defined for btnCancel **/
    AS_Button_fb59ae4469bb49739a4694de670a18f2: function AS_Button_fb59ae4469bb49739a4694de670a18f2(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("frmRecipientDetails");
        ntf.navigate();
    },
    /** onClick defined for flxBack **/
    AS_FlexContainer_e78d67373df34550ab745cb9ba487da3: function AS_FlexContainer_e78d67373df34550ab745cb9ba487da3(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("frmRecipientDetails");
        ntf.navigate();
    },
    /** onClick defined for flxUserLogout **/
    AS_FlexContainer_fdb9107694eb41e18517e0bcd3edfe65: function AS_FlexContainer_fdb9107694eb41e18517e0bcd3edfe65(eventobject) {
        var self = this;

        function INVOKE_SERVICE_j7d49bd0ff95437a800f8c99e34341fe_Success(response) {
            var ntf = new voltmx.mvc.Navigation("frmUserLogin");
            ntf.navigate();
        }

        function INVOKE_SERVICE_j7d49bd0ff95437a800f8c99e34341fe_Failure(error) {}
        if (logout_inputparam == undefined) {
            var logout_inputparam = {};
        }
        logout_inputparam["serviceID"] = "UserAuthentication$logout";
        logout_inputparam["operation"] = "logout";
        UserAuthentication$logout = mfidentityserviceinvoker("UserAuthentication", logout_inputparam, INVOKE_SERVICE_j7d49bd0ff95437a800f8c99e34341fe_Success, INVOKE_SERVICE_j7d49bd0ff95437a800f8c99e34341fe_Failure);
    },
    /** onClick defined for flxAccountTab **/
    AS_FlexContainer_gfb0a6f8e14647eba11e9b5825109323: function AS_FlexContainer_gfb0a6f8e14647eba11e9b5825109323(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("frmAccountList");
        ntf.navigate();
    },
    /** preShow defined for frmEditRecipient **/
    AS_Form_e318adcf349d42ac9fe8add7ba069d72: function AS_Form_e318adcf349d42ac9fe8add7ba069d72(eventobject) {
        var self = this;

        function INVOKE_SERVICE_d45ab1c8d26b401fb793c7120e5c4ec8_Callback(Recipients) {
            self.view.tbxFirstName.text = Recipients["records"][0]["FirstName"];
            self.view.tbxLastName.text = Recipients["records"][0]["LastName"];
            self.view.tbxNickName.text = Recipients["records"][0]["NickName"];
            self.view.tbxPhone.text = Recipients["records"][0]["Phone"];
            self.view.lblPayeeID.text = voltmx.visualizer.toString(Recipients["records"][0]["RecipientID"]);
        }
        self.view.flexSuccess.isVisible = false;
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
        filters.push("RecipientID eq '" + voltmx.visualizer.toNumber(self.view.lblPayeeID.text) + "'");
        odataParams.push("$filter=" + filters.join(' and '));
        Recipients_inputparam["options"]["odataurl"] = odataParams.join("&");
        var Recipients_httpheaders = {};
        Recipients_inputparam["httpheaders"] = Recipients_httpheaders;
        var Recipients_httpconfigs = {};
        Recipients_inputparam["httpconfig"] = Recipients_httpconfigs;
        RecipientStorage$Recipients$get = mfobjectsecureinvokerasync(Recipients_inputparam, "RecipientStorage", "Recipients", INVOKE_SERVICE_d45ab1c8d26b401fb793c7120e5c4ec8_Callback);
    }
});