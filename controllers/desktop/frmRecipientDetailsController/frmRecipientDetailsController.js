define({ 

  //Type your controller code here 
  onNavigate : function(params){
    if(params!==undefined && params!==null && params.segPayeeList_lblPayeeID!==undefined && params.segPayeeList_lblPayeeID!==null){
      this.view.lblRecipientIDValue.text=params.segPayeeList_lblPayeeID;
    }
    else if(params!==undefined && params!==null && params.lblPayeeID_text!==undefined && params.lblPayeeID_text!==null){
      this.view.lblRecipientIDValue.text=params.lblPayeeID_text;
    }
  },

  onEditClick:function(){
    var self = this;
    var ntf = new voltmx.mvc.Navigation("frmEditRecipient");
    ntf.navigate({
      "lblRecipientIDValue_text": self.view.lblRecipientIDValue.text,

    });
  },
});