define({ 

  //Type your controller code here 
  onSegRowClick:function(){
    var self = this;
    var ntf = new voltmx.mvc.Navigation("frmRecipientDetails");
    ntf.navigate({
      "segPayeeList_lblFirstName": voltmx.visualizer.getPropertyValue(self.view.segPayeeList.selectedRowItems[0]["lblFirstName"], "text"),
      "segPayeeList_lblLastName": voltmx.visualizer.getPropertyValue(self.view.segPayeeList.selectedRowItems[0]["lblLastName"], "text"),
      "segPayeeList_lblPhone": voltmx.visualizer.getPropertyValue(self.view.segPayeeList.selectedRowItems[0]["lblPhone"], "text"),
      "segPayeeList_lblPayeeID": voltmx.visualizer.getPropertyValue(self.view.segPayeeList.selectedRowItems[0]["lblPayeeID"], "text"),
    });
  }


});