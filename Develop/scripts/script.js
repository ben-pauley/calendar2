$(document).ready(function () {
  $("#currentDay").text(todaysDate());

  loadEventContent();
  applyCSS();
  buttonListeners();

  function buttonListeners() {
    // FAILED ATTEMPT AT MAKING CODE MORE DRY:

    // for (var i = 9; i <= 17; i++) {
    //   var btnID = "#btn" + i;
    //   var eventID = "#event" + i;
    //   var localStorageKey = "event" + i;
    //   $(btnID).click(function () {
    //     storeEventContent(eventID, localStorageKey);
    //   });
    // }
    // -

    $("#btn9").click(function () {
      storeEventContent("#event9", "event9");
    });
    $("#btn10").click(function () {
      storeEventContent("#event10", "event10");
    });
    $("#btn11").click(function () {
      storeEventContent("#event11", "event11");
    });
    $("#btn12").click(function () {
      storeEventContent("#event12", "event12");
    });
    $("#btn13").click(function () {
      storeEventContent("#event13", "event13");
    });
    $("#btn14").click(function () {
      storeEventContent("#event14", "event14");
    });
    $("#btn15").click(function () {
      storeEventContent("#event15", "event15");
    });
    $("#btn16").click(function () {
      storeEventContent("#event16", "event16");
    });
    $("#btn17").click(function () {
      storeEventContent("#event17", "event17");
    });
  }

  function todaysDate() {
    var today = moment().format("dddd, MMMM Do");
    return today;
  }

  function storeEventContent(eventID, localStorageKey) {
    var eventContent = $(eventID).text();
    localStorage.setItem(localStorageKey, eventContent);
  }

  function loadEventContent() {
    for (var i = 9; i <= 17; i++) {
      var localStorageKey = "event" + i;
      var eventID = "#event" + i;

      var eventContent = localStorage.getItem(localStorageKey);
      $(eventID).text(eventContent);
    }
  }

  function applyCSS() {
    var currentTime = moment().format("HH:mm:ss");
    for (var i = 9; i <= 17; i++) {
      var eventID = "#event" + i;
      var eventValue = $(eventID).attr("value");
      if (moment().hour(i).isSame(moment())) {
        $(eventID).addClass("present");
      } else if (moment().hour(i).isBefore(moment())) {
        $(eventID).addClass("past");
      } else if (moment().hour(i).isAfter(moment())) {
        $(eventID).addClass("future");
      }
    }
  }
});
