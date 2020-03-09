document.getElementById('inputForm').addEventListener('submit', saveIssue);

function saveIssue(e){
    var issueDescription = document.getElementById('issueDescription').value;
    var issueSeverity = document.getElementById('severityDescription').value;
    var issueAssignedTo = document.getElementById('assignedDescription').value;
    var issueId = chance.guid();
}

function fetchIssues() {
    var issues = JSON.parse(localStorage.getItem('issues'));
    var issuesList = document.getElementById('issuesList');

    issuesList.innerHTML = "";

    for (var i = 0; i < issues.length; i++){
        var id = issues[i].id;
        var description = issues[i].description;
        var severity = issues[i].severity;
        var assignedTo = issues[i].assignedTo;
        var status = issues[i].status;

        issuesList.innerHTML += '<h6 class="well">'+
                                '<h6>Issue ID</h6>' + id + '</h6>'+
                                '<p><span class="label label-info">' + status + '</span></p>'+
                                '<h3>' + description + '</h3>'+
                                '<p><span class="glyphicon glyphicon-time"></span>' + severity + '</p>'+
                                '<p><span class="glyphicon glyphicon-user"></span>' + assignedTo + '</p>'+
                                '<a href="#" onclick="setStatusClosed(\''+id+'\')" class="btn btn-warning">Close</a>'+
                                '<a href="#" onclick="deleteIssue(\''+id+'\')" class="btn btn-danger">Delete</a>'+
                                '</div>';
    }
}