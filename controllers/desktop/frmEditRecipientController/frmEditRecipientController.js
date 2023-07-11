define({ 

  //Type your controller code here 
  onNavigate : function(params){
    if(params!==undefined && params!==null && params.lblRecipientIDValue_text!==undefined && params.lblRecipientIDValue_text!==null){
      this.view.lblPayeeID.text=params.lblRecipientIDValue_text;
    }
  },

  onUpdate:function(){
    var self = this;
    self.view.flexSuccess.isVisible = false;
    var ntf = new voltmx.mvc.Navigation("frmRecipientDetails");
    ntf.navigate({
      "lblPayeeID_text": self.view.lblPayeeID.text,
    });
  }

});