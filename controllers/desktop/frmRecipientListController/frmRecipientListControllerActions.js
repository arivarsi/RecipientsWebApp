define({
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
    /** onClick defined for btnAddPayee **/
    AS_Button_bea434575de248a38c5f15f3664f75f1: function AS_Button_bea434575de248a38c5f15f3664f75f1(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("frmAddRecipient");
        ntf.navigate();
    },
    /** onClick defined for flxAccountTab **/
    AS_FlexContainer_ca45cf33954e4132a3461c9eba9081f5: function AS_FlexContainer_ca45cf33954e4132a3461c9eba9081f5(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("frmAccountList");
        ntf.navigate();
    },
    /** onClick defined for flxUserLogout **/
    AS_FlexContainer_g46166257d2f4ddea85d515cb92085b7: function AS_FlexContainer_g46166257d2f4ddea85d515cb92085b7(eventobject) {
        var self = this;

        function INVOKE_SERVICE_aea535bf80c246a3ac68b1cd5cf01d34_Success(response) {
            var ntf = new voltmx.mvc.Navigation("frmUserLogin");
            ntf.navigate();
        }

        function INVOKE_SERVICE_aea535bf80c246a3ac68b1cd5cf01d34_Failure(error) {}
        if (logout_inputparam == undefined) {
            var logout_inputparam = {};
        }
        logout_inputparam["serviceID"] = "UserAuthentication$logout";
        logout_inputparam["operation"] = "logout";
        UserAuthentication$logout = mfidentityserviceinvoker("UserAuthentication", logout_inputparam, INVOKE_SERVICE_aea535bf80c246a3ac68b1cd5cf01d34_Success, INVOKE_SERVICE_aea535bf80c246a3ac68b1cd5cf01d34_Failure);
    },
    /** onClick defined for flxBack **/
    AS_FlexContainer_j40b4f3cb8ee4d6e89c40fb0d5c9c8de: function AS_FlexContainer_j40b4f3cb8ee4d6e89c40fb0d5c9c8de(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("frmAccountList");
        ntf.navigate();
    },
    /** preShow defined for frmRecipientList **/
    AS_Form_b172b8e040404773a54f08b9595f68b9: function AS_Form_b172b8e040404773a54f08b9595f68b9(eventobject) {
        var self = this;

        function INVOKE_SERVICE_i62afd965c4e4ab7918d5d31b38811e7_Callback(Recipients) {
            voltmx.application.dismissLoadingScreen();
            var tempCollection6603 = [];
            var tempData3963 = Recipients.records;
            for (var each1932 in tempData3963) {
                tempCollection6603.push({
                    "lblFirstName": {
                        "text": tempData3963[each1932]["FirstName"]
                    },
                    "lblLastName": {
                        "text": tempData3963[each1932]["LastName"]
                    },
                    "lblPhone": {
                        "text": tempData3963[each1932]["Phone"]
                    },
                    "lblPayeeID": {
                        "text": voltmx.visualizer.toString(tempData3963[each1932]["RecipientID"])
                    },
                });
            }
            self.view.segPayeeList.setData(tempCollection6603);
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
        var Recipients_httpheaders = {};
        Recipients_inputparam["httpheaders"] = Recipients_httpheaders;
        var Recipients_httpconfigs = {};
        Recipients_inputparam["httpconfig"] = Recipients_httpconfigs;
        RecipientStorage$Recipients$get = mfobjectsecureinvokerasync(Recipients_inputparam, "RecipientStorage", "Recipients", INVOKE_SERVICE_i62afd965c4e4ab7918d5d31b38811e7_Callback);
    },
    /** onRowClick defined for segPayeeList **/
    AS_Segment_c185cd5c2def48999e3f1bf93b7859d0: function AS_Segment_c185cd5c2def48999e3f1bf93b7859d0(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onSegRowClick();
    }
});