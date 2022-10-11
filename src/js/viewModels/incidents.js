/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your incidents ViewModel code goes here
 */





define(['../accUtils', 'ojs/ojcore', 'knockout', 'ojs/ojarraydataprovider', "ojs/ojbufferingdataprovider", 'jquery', '../appController', 'ojs/ojknockout', 'ojs/ojcollectiontabledatasource', 'ojs/ojformlayout', 'ojs/ojinputtext', 'ojs/ojslider',
    'ojs/ojinputnumber', 'ojs/ojbutton', 'ojs/ojtable', 'ojs/ojlabel', 'ojs/ojvalidationgroup',
    'ojs/ojvalidation-number', 'ojs/ojarraytabledatasource'
  ],
  function (accUtils, oj, ko, ArrayDataProvider, BufferingDataProvider, $,app) {
    function IncidentsViewModel() {


      app.test3();
      var self = this;
      self.inputNameToAdd = ko.observable();
      self.groupValid = ko.observable();

    

 


      self.loadData = function () {





        var today = new Date();
        var dd = today.getDate();
  
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
  

        let time = today.getTime();
        console.log(time);
  
  
  
        if (dd < 10) {
          dd = '0' + dd;
        }
        console.log(dd);
  
        if (mm < 10) {
          mm = '0' + mm;
        }
  
        console.log(mm);
  
        yyyy %= 100;
        console.log(yyyy);
        today = dd +""+ mm +""+ yyyy+""+time;
  
  
  
        console.log(today);
  







        const tracker = document.getElementById("tracker");
        if (tracker.valid !== "valid") {
          tracker.showMessages();
          tracker.focusOn("@firstInvalidShown");
          return;
        }




        const sanctionReq = {


          id: today + "-MANL",
          name: self.inputNameToAdd(),
          listName: "MANL",
          percentage: 1

        };
        console.log(sanctionReq);
        var tempArray = [];
        $.ajax({
          type: "POST",
          url: "http://192.168.220.143:7005/sanction-screening/sanctioned/add",
          data: JSON.stringify(sanctionReq),
          headers: {
            "Access-Control-Allow-Origin": "*"
          },

          contentType: "application/json;application/xml; charset=utf-8",
          dataType: "json",
          crossDomain: true,
          success: function (data) {
            console.log(JSON.stringify(sanctionReq));
            console.log("test");
            console.log(data);
            alert('Te dhenat u kaluan me sukses!');
            self.inputNameToAdd(' ');

          }

        });


        $.ajax({
          type: "GET",
          url: " http://192.168.220.143:7005/sanction-screening/list/delete/all",
          headers: {
            "Access-Control-Allow-Origin": "*"
          },
          contentType: "application/json;application/xml; charset=utf-8",
          dataType: "json",
          crossDomain: true,
          success: function (data) {
           
           
           // alert('cACHE U FSHI me sukses!');
          

          }

        });













      }









    }
    return IncidentsViewModel;
  }
);