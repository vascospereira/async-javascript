(function () {
    /*
    var request = new XMLHttpRequest();
    request.open("GET", "data/movies.json", true);
    request.onload = function(){
        if(request.readyState === XMLHttpRequest.DONE && request.status === 200){
            // console.log(JSON.parse(http.responseText));
            var response = JSON.parse(request.responseText);
            // console.log(response);
            console.table(response.movies);
            var movies = response.movies;
            var output = '';
            for (var i = 0; i < movies.length; i++) {
                output += '<li>' + movies[i].title + '</li>';
            }
            document.getElementById("p").innerHTML = output;
        } else {
            console.error("Something went wrong.");
        }
    };
    request.send();


    // POST info
    var url = "http://jsonplaceholder.typicode.com/posts";
    var data = {
        title: "Ferrari",
        body: "Enzo"
    };
    // data.title = "Ferrari";
    // data.body  = "Enzo";
    
    var json = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    
    xhr.onload = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 201) {
            var info = JSON.parse(xhr.responseText);
            //console.log(info);
            console.table(info);
        } else {
            console.error("Something went wrong.");
        }
    };
    xhr.send(json);
    */

    /*
    // PUT to update info
    var url = "http://jsonplaceholder.typicode.com/posts/1";
    var data = {
        title: "Porsche",
        body: "Carrera"
    };
    // data.title = "Porsche";
    // data.body  = "Carrera";

    var json = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');

    xhr.onload = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var info = JSON.parse(xhr.responseText);
            //console.log(info);
            console.table(info);
        } else {
            console.error("Something went wrong.");
        }
    };
    xhr.send(json);

    // DELETE info
    var url = "http://jsonplaceholder.typicode.com/posts/1";
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", url, true);

    xhr.onload = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var info = JSON.parse(xhr.responseText);
            console.log(info);
            console.table(info);
        } else {
            console.error("Something went wrong.");
        }
    };
    xhr.send(null);

    // jQuery
    $.getJSON("data/players.json", data => {
           //console.log(players);
           var players = data.players;

           var output = '';
           for (var i = 0; i < players.length; i++) {
               output += '<li>' + players[i].name + '</li>';
           }

           $("#p").html(output);
    });
    */

    /*
    //Promises
    $.get("data/clubs.json")
    .then(clubs => {
        console.log(clubs);
        return $.get("data/movies.json");
    })
    .then(movies => {
        console.log(movies);
        return $.get("data/players.json");
    })
    .then(players => console.log(players))
    .catch(errors => console.log(errors.responseText));
    */

    /*
    const info = async () =>{
        const clubs = await $.get("data/clubs.json");
        const movies = await $.get("data/movies.json");
        const players = await $.get("data/players.json");
        return [clubs, movies, players];
    };
    info().then(res => console.log(res));
    */

    /*
    Promise.all([
        $.get("data/clubs.json"),
        $.get("data/movies.json"),
        $.get("data/players.json")
    ]).then(([clubs, movies, players]) => {
        console.log(clubs, movies, players);
    });
    */

    /*
    var getData = async () => {
        return await Promise.all([
            $.getJSON("data/clubs.json"),
            $.getJSON("data/movies.json"),
            $.getJSON("data/players.json")
        ]);
    };
    getData().then(res => console.log(res));
    */

    //Generators
    /*
    genWrap(function*() {
        const players = yield $.getJSON("data/players.json");
        console.log(players);
        const clubs = yield $.getJSON("data/clubs.json");
        console.log(clubs);
        const movies = yield $.getJSON("data/movies.json");
        console.log(movies);
    });

    function genWrap(generator){
        // prepare the generator
        let g = generator();

        function handle(yielded){
            if(!yielded.done){
                yielded.value.then( data => {
                    return handle(g.next(data));
                })
            }
        }

        return handle(g.next());
    }
    */

})();
