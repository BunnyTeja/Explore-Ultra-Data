$(document).ready(function () {
  const url = "http://casy.cse.sc.edu/Api/data-api.php";
  const all_url = {
    "http://casy.cse.sc.edu/ultra/data-ui/ProposalTable/data.html": 1,
    "http://casy.cse.sc.edu/ultra/data-ui/UserTable/userTable.html": 2,
    "http://casy.cse.sc.edu/ultra/data-ui/analyticsTable/analyticsTable.html": 3,
  };
  function api_call(request,url) {
    return $.ajax({
      url: url,
      type: "Post",
      async: true,
      data: JSON.stringify(request),
      xhrFields: {
        withCredentials: false,
      },
      crossDomain: true,
    });
  }



  
  function getUserTable() {
    let request = {
      getUserTable: 1,
    };
    $("#getUserTable").DataTable({
      responsive: true,
      paging: true,
      processing: true,
      serverSide: true,
      scrollX: true,
      lengthChange: true,
      "dom": '<"top"ifl<"clear">>rt<"bottom"ip<"clear">>',
      //searching: false,
      ajax: {
        url: url,
        type: "post",
        data: request,
      },
    });
  }


  getUserTable();
  var currentURL = $(location).attr("href");

  $("select")
    .find("option[value=" + all_url[currentURL] + "]")
    .attr("selected", "selected");
  $("select").on("change", function () {
    let getOption = $(this).val();
    localStorage.setItem("option", getOption);
    if (getOption == "1") {
      window.location.href = "../ProposalTable/data.html";
      
    }
    if (getOption == "2") {
      getUserTable();
    }
    if (getOption == "3") {
      window.location.href = "../analyticsTable/analyticsTable.html";
    }

    console.log(getOption);
  });
});
