$(function() {
    //  VARIABLE DECLARATIONS
    //  Initial value for number of teams desired is set to zero
    var numTeams = 0;
    //  Initial empty array set, in which the generated team arrays will be pushed
    var teams = [];
    //  Array of students in the class to be randomly split into teams
    var studentArray = [
        "Richard",
        "Jon",
        "Sahasha",
        "Tracy",
        "Megan",
        "Justin",
        "Hillary",
        "Liz",
        "Brian V",
        "Donovan",
        "Connor",
        "Cormick",
        "Ryan",
        "Kyle",
        "Andrew",
        "Brian A",
        "Anthony",
        "Katie",
        "Trent"
    ];
    //  Max number of teams that would be reasonable for total number of
    //  students (because, for example, 20 students logically could only be
    //  placed into 10 teams of 2)
    var maxNumber = parseInt(studentArray.length / 2);

    //  FUNCTION DECLARATIONS
    //  Takes a given array and reorders its contents in randomized order
    function randomizeArray(array) {
        var i, num, temp;
        for (i = array.length; i; i--) {
            num = Math.floor(Math.random() * i);
            temp = array[i - 1];
            array[i - 1] = array[num];
            array[num] = temp;
        }
        console.log("Here's your initial array, but randomized:", array);
    }

    //  Adds dynamic number of buttons to DOM based on how many teams that
    //  would logically and reasonably be wanted (for example, for 19 people
    //  it would be between 2 and 9 teams)
    function appendButtons() {
        for (var i = 1; i < maxNumber; i++) {
            $("#numberOfTeams").append("<button type='button' class='btn btn-lg btn-default' id='numTeamsChosen'>" + (i + 1) + "</button>");
        }
    }

    //  Returns an array of arrays of randomized teams
    function makeTeams() {
        var tempArray = [];
        tempArray = chunkify(studentArray, numTeams, true);
        console.log("Here's your array of randomized teams:", tempArray);
        return tempArray;
    }

    //  Takes in array (already randomized) that you want to chunkify, the
    //  number of chunks that you want, and whether you want the chunks to be
    //  similarly sized as a boolean value (false will likely give you a team
    //  with only one person)
    function chunkify(arrayYouWantToChunkify, howManyChunksYouWant, doYouWantChunksOfSimilarSize) {
        if (howManyChunksYouWant < 2)
            return [arrayYouWantToChunkify];
        var len = arrayYouWantToChunkify.length,
            out = [],
            i = 0,
            size;
        if (len % howManyChunksYouWant === 0) {
            size = Math.floor(len / howManyChunksYouWant);
            while (i < len) {
                out.push(arrayYouWantToChunkify.slice(i, i += size));
            }
        } else if (doYouWantChunksOfSimilarSize) {
            while (i < len) {
                size = Math.ceil((len - i) / howManyChunksYouWant--);
                out.push(arrayYouWantToChunkify.slice(i, i += size));
            }
        } else {
            howManyChunksYouWant--;
            size = Math.floor(len / howManyChunksYouWant);
            if (len % size === 0)
                size--;
            while (i < size * howManyChunksYouWant) {
                out.push(arrayYouWantToChunkify.slice(i, i += size));
            }
            out.push(arrayYouWantToChunkify.slice(size * howManyChunksYouWant));
        }
        console.log("Here's your chunkified array of randomized teams:", out);
        return out;
    }

    //  Clears div in DOM that lists teams, and reappends the teams according
    //  to the current value of the teams array
    function appendTeams() {
        $("#teamList").empty();
        for (var i = 0; i < teams.length; i++) {
            $("#teamList").append("<ul class='list-group'></ul>");
            $("#teamList").find("ul:last")
                .append("<li class='list-group-item list-group-item-success'>" +
                    "<h3>Team " + (i + 1) + "</h3></li>");
            for (var j = 0; j < teams[i].length; j++) {
                $("#teamList").find("ul:last")
                    .append("<li class='list-group-item'><h4>" + teams[i][j] +
                        "</h4></li>");
            }
        }
    }

    //  FUNCTIONS TO EXECUTE ON LOAD
    appendButtons();

    //  EVENT LISTENERS
    //  Event listener for button click for number of teams desired
    $("#numberOfTeams").on("click", "#numTeamsChosen", function(event) {
        event.preventDefault();
        numTeams = $(this).text();
        console.log("You want", $(this).text(), "randomized teams");
    });

    //  Event listener for button click for generating randomized teams
    $("#randomize").on("click", function(event) {
        //  TODO: Create logic checking if numTeams = 0, then alert user
        //        that they need to first pick desired number of teams
        event.preventDefault();
        randomizeArray(studentArray);
        teams = makeTeams();
        appendTeams();
    });
});
