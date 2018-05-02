// Capture the form inputs
    $("#submit").on("click", function(event) {
      event.preventDefault();

      var surveyInput = {
        q1: $("#q1").val(),
        q2: $("#q2").val(),
        q3: $("#q3").val(),
        q4: $("#q4").val(),
        q5: $("#q5").val(),
        q6: $("#q6").val(),
        q7: $("#q7").val(),
        q8: $("#q8").val(),
        q9: $("#q9").val(),
        q10: $("#q10").val()
      };
         // Send an AJAX POST-request with jQuery
    $.post("/api/new", surveyInput).then(function () {
      alert("Survey successfully completed");
      console.log(surveyInput.firstName + " created successfully");
    });
    console.log(surveyInput);
    });



 