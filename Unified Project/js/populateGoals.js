var json = [{
    "goalID": "Retirement",
    "CurrentAmount": "59999",
    "TotalAmount": "60000"
},
{
    "goalID": "New Car",
    "CurrentAmount": "0",
    "TotalAmount": "5000"
},
{
    "goalID": "Vacation",
    "CurrentAmount": "1200",
    "TotalAmount": "3000"
}];


for (var i = 0; i < json.length; i++) {
    
    //create outer div
    var divSectionTitle = document.createElement('div');
    divSectionTitle.className = 'sectionTitle';
    document.getElementById('content').appendChild(divSectionTitle);

    //bootstrap grid div for goal id
    var divColGoalID = document.createElement('div');
    divColGoalID.className = 'col-sm-4';
    divSectionTitle.appendChild(divColGoalID);
    
    //display goal id
    var divGoalID = document.createElement('div');
    divGoalID.className = 'textLeft';
    divColGoalID.appendChild(divGoalID);
    divGoalID.innerHTML = "<h3>" + json[i].goalID + "</h3>";

    //bootstrap grid div for motivational message
    var divColMotMsg = document.createElement('div');
    divColMotMsg.className = 'col-sm-4';
    divSectionTitle.appendChild(divColMotMsg);

    //display motivational message
    var divMotMsg = document.createElement('div');
    divMotMsg.className = 'textCenter';
    divColMotMsg.appendChild(divMotMsg);
    divMotMsg.setAttribute('style', 'padding-top: 1em;')

    var progress = json[i].CurrentAmount / json[i].TotalAmount;

    if (progress < .25) {
        divMotMsg.innerHTML = "<h4>You've added a new goal.</h4>";
    } else if (progress < .5 && progress > .25) {
        divMotMsg.innerHTML = "<h4>Making Progress!</h4>";
    } else if (progress < .75 && progress > .5) {
        divMotMsg.innerHTML = "<h4>You're doing great!</h4>";
    } else if (progress < 1 && progress > .75) {
        divMotMsg.innerHTML = "<h4>Almost there!</h4>";
    } else if (progress == 1) {
        divMotMsg.innerHTML = "<h4>You've reached your goal!</h4>";
    }

    //bootstrap grid div for total amount
    var divColTotalAmt = document.createElement('div');
    divColTotalAmt.className = 'col-sm-4';
    divSectionTitle.appendChild(divColTotalAmt);

    //display total amount
    var divTotalAmt = document.createElement('div');
    divTotalAmt.className = 'textRight';
    divColTotalAmt.appendChild(divTotalAmt);
    divTotalAmt.innerHTML = "<h3>" + json[i].TotalAmount + "</h3>";

    //progress bar
    var divProgressWrapper = document.createElement('div');
    divProgressWrapper.className = 'progressBarWrapper';
    document.getElementById('content').appendChild(divProgressWrapper);

    var divProgressBar = document.createElement('div');
    divProgressBar.className = 'progressBar';
    divProgressWrapper.appendChild(divProgressBar);

    var divProgressFiller = document.createElement('div');
    divProgressFiller.className = 'progressBarFiller';
    divProgressBar.appendChild(divProgressFiller);
    divProgressFiller.setAttribute('style', 'width: ' + (progress * 100) + '%');
    if (progress == 1) {
        divProgressFiller.setAttribute('style', 'border-radius: 5px 5px 5px 5px;');
    }
    //display current amount
    divProgressFiller.innerHTML = "<h4>" + json[i].CurrentAmount + "</h4>";
 
    
    
}