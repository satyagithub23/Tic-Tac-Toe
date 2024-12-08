$(document).ready(function () {
    const socket = io('http://localhost:3400')

    var name = prompt("Please enter your name to join the game")

    if (name != '') {
        socket.emit('new-player-joined', name)
    }
    var id = "";
    socket.on('player-joined', details => {
        console.log(`${name} joined the game`);
        id = details.id;
    })
    console.log("Document is ready");
    var fp = "";
    var sp = "";
    var click = 0;
    var gameOver = 0;
    var exe_once = true;

    let dp = $('#pName').html()    
    $('#pName').html(dp+name)
    
    let pid = $('#pId').html()
    $('#pId').html(pid + id)

    $('#xplyr').on('click', function () {
        console.log("First player choose X");
        console.log("Second player choose O");
        $('#chse').hide();
        fp = "X";
        sp = "0";
    })
    $('#oplyr').on('click', function () {
        console.log("First player choose 0");
        console.log("Second player choose X");
        $('#chse').hide();
        fp = "0";
        sp = "X";
    })
    $('#logo').hide();
    $('#logo').on('click', function () {
        location.reload();
    })
    var clickCount = function () {

        if (fp == "" || sp == "") {
            exe_once = false;
            $('#chse').html("First choose X or 0").css({
                "color": "yellow",
                "font-size": "2rem",
                "font-weight": "bold"
            }).animate({
                "font-size": "4rem"
            }, {
                "duration": 1000
            })
            setTimeout(function () {
                location.reload(true);
            }, 2000);

        }

        else if (fp == "X") {
            exe_once = false;
            $('#o').toggle();
        }
        else if (fp == "0") {
            exe_once = false;
            $('#x').toggle();
        }


    }
    function getInputs() {
        box1 = $('#box-1').val();
        box2 = $('#box-2').val();
        box3 = $('#box-3').val();
        box4 = $('#box-4').val();
        box5 = $('#box-5').val();
        box6 = $('#box-6').val();
        box7 = $('#box-7').val();
        box8 = $('#box-8').val();
        box9 = $('#box-9').val();

        if (box1 === box4 && box4 === box7 && box1 != "" && box4 != "" && box7 != "") {
            if (box1 == "X" && box4 == "X" && box7 == "X" && fp == "X") {
                $('#msg').html("First Player won").animate({ "font-size": "4rem" }, {
                    "duration": 1000,
                });
                $('#logo').show();
                $('audio#gamewin')[0].play();
            }
            else if (box1 == "X" && box4 == "X" && box7 == "X" && sp == "X") {
                $('#msg').html("Second Player won").animate({
                    "font-size": "4rem"
                }, {
                    "duration": 1000

                });
                $('#logo').show();
                $('audio#gamewin')[0].play();
            }
            else if (box1 == "0" && box4 == "0" && box7 == "0" && fp == "0") {
                $('#msg').html("First Player won").animate({
                    "font-size": "4rem"
                }, {
                    "duration": 1000

                });
                $('#logo').show();
                $('audio#gamewin')[0].play();
            }
            else if (box1 == "0" && box4 == "0" && box7 == "0" && sp == "0") {
                $('#msg').html("Second Player won").animate({
                    "font-size": "4rem"
                }, {
                    "duration": 1000

                });
                $('#logo').show();
                $('audio#gamewin')[0].play();
            }
            $('input').attr('disabled', 'disabled');
            console.log("Game Finished");

        }
        else if (box2 === box5 && box5 === box8 && box2 != "" && box5 != "" && box8 != "") {
            if (box2 == "X" && box5 == "X" && box8 == "X" && fp == "X") {
                $('#msg').html("First Player won").animate({
                    "font-size": "4rem"
                }, {
                    "duration": 1000

                });
                $('#logo').show();
                $('audio#gamewin')[0].play();
            }
            else if (box2 == "X" && box5 == "X" && box8 == "X" && sp == "X") {
                $('#msg').html("Second Player won").animate({
                    "font-size": "4rem"
                }, {
                    "duration": 1000

                });
                $('#logo').show();
                $('audio#gamewin')[0].play();
            }
            else if (box2 == "0" && box5 == "0" && box8 == "0" && fp == "0") {
                $('#msg').html("First Player won").animate({
                    "font-size": "4rem"
                }, {
                    "duration": 1000

                });
                $('#logo').show();
                $('audio#gamewin')[0].play();
            }
            else if (box2 == "0" && box5 == "0" && box8 == "0" && sp == "0") {
                $('#msg').html("Second Player won").animate({
                    "font-size": "4rem"
                }, {
                    "duration": 1000

                });
                $('#logo').show();
                $('audio#gamewin')[0].play();
            }
            $('input').attr('disabled', 'disabled');
            console.log("Game Finished")
        }
        else if (box3 === box6 && box6 === box9 && box3 != "" && box6 != "" && box9 != "") {
            if (box3 == "X" && box6 == "X" && box9 == "X" && fp == "X") {
                $('#msg').html("First Player won").animate({
                    "font-size": "4rem"
                }, {
                    "duration": 1000

                });
                $('#logo').show();
                $('audio#gamewin')[0].play();
            }
            else if (box3 == "X" && box6 == "X" && box9 == "X" && sp == "X") {
                $('#msg').html("Second Player won").animate({
                    "font-size": "4rem"
                }, {
                    "duration": 1000

                });
                $('#logo').show();
                $('audio#gamewin')[0].play();
            }
            else if (box3 == "0" && box6 == "0" && box9 == "0" && fp == "0") {
                $('#msg').html("First Player won").animate({
                    "font-size": "4rem"
                }, {
                    "duration": 1000

                });
                $('#logo').show();
                $('audio#gamewin')[0].play();
            }
            else if (box3 == "0" && box6 == "0" && box9 == "0" && sp == "0") {
                $('#msg').html("Second Player won").animate({
                    "font-size": "4rem"
                }, {
                    "duration": 1000

                });
                $('#logo').show();
                $('audio#gamewin')[0].play();
            }
            $('input').attr('disabled', 'disabled');
            console.log("Game Finished")
        }
        else if (box1 === box2 && box2 === box3 && box1 != "" && box2 != "" && box3 != "") {
            if (box1 == "X" && box2 == "X" && box3 == "X" && fp == "X") {
                $('#msg').html("First Player won").animate({
                    "font-size": "4rem"
                }, {
                    "duration": 1000

                });
                $('#logo').show();
                $('audio#gamewin')[0].play();
            }
            else if (box1 == "X" && box2 == "X" && box3 == "X" && sp == "X") {
                $('#msg').html("Second Player won").animate({
                    "font-size": "4rem"
                }, {
                    "duration": 1000

                });
                $('#logo').show();
                $('audio#gamewin')[0].play();
            }
            else if (box1 == "0" && box2 == "0" && box3 == "0" && fp == "0") {
                $('#msg').html("First Player won").animate({
                    "font-size": "4rem"
                }, {
                    "duration": 1000

                });
                $('#logo').show();
                $('audio#gamewin')[0].play();
            }
            else if (box1 == "0" && box2 == "0" && box3 == "0" && sp == "0") {
                $('#msg').html("Second Player won").animate({
                    "font-size": "4rem"
                }, {
                    "duration": 1000

                });
                $('#logo').show();
                $('audio#gamewin')[0].play();
            }
            $('input').attr('disabled', 'disabled');
            console.log("Game Finished")
        }
        else if (box4 === box5 && box5 === box6 && box4 != "" && box5 != "" && box6 != "") {
            if (box4 == "X" && box5 == "X" && box6 == "X" && fp == "X") {
                $('#msg').html("First Player won").animate({
                    "font-size": "4rem"
                }, {
                    "duration": 1000

                });
                $('#logo').show();
                $('audio#gamewin')[0].play();
            }
            else if (box4 == "X" && box5 == "X" && box6 == "X" && sp == "X") {
                $('#msg').html("Second Player won").animate({
                    "font-size": "4rem"
                }, {
                    "duration": 1000

                });
                $('#logo').show();
                $('audio#gamewin')[0].play();
            }
            else if (box4 == "0" && box5 == "0" && box6 == "0" && fp == "0") {
                $('#msg').html("First Player won").animate({
                    "font-size": "4rem"
                }, {
                    "duration": 1000

                });
                $('#logo').show();
                $('audio#gamewin')[0].play();
            }
            else if (box4 == "0" && box5 == "0" && box6 == "0" && sp == "0") {
                $('#msg').html("Second Player won").animate({
                    "font-size": "4rem"
                }, {
                    "duration": 1000

                });
                $('#logo').show();
                $('audio#gamewin')[0].play();
            }
            $('input').attr('disabled', 'disabled');
            console.log("Game Finished")
        }
        else if (box7 === box8 && box8 === box9 && box7 != "" && box8 != "" && box9 != "") {
            if (box7 == "X" && box8 == "X" && box9 == "X" && fp == "X") {
                $('#msg').html("First Player won").animate({
                    "font-size": "4rem"
                }, {
                    "duration": 1000

                });
                $('#logo').show();
                $('audio#gamewin')[0].play();
            }
            else if (box7 == "X" && box8 == "X" && box9 == "X" && sp == "X") {
                $('#msg').html("Second Player won").animate({
                    "font-size": "4rem"
                }, {
                    "duration": 1000

                });
                $('#logo').show();
                $('audio#gamewin')[0].play();
            }
            else if (box7 == "0" && box8 == "0" && box9 == "0" && fp == "0") {
                $('#msg').html("First Player won").animate({
                    "font-size": "4rem"
                }, {
                    "duration": 1000

                });
                $('#logo').show();
                $('audio#gamewin')[0].play();
            }
            else if (box7 == "0" && box8 == "0" && box9 == "0" && sp == "0") {
                $('#msg').html("Second Player won").animate({
                    "font-size": "4rem"
                }, {
                    "duration": 1000

                });
                $('#logo').show();
                $('audio#gamewin')[0].play();
            }
            $('input').attr('disabled', 'disabled');
            console.log("Game Finished")
        }
        else if (box1 === box5 && box5 === box9 && box1 != "" && box5 != "" && box9 != "") {
            if (box1 == "X" && box5 == "X" && box9 == "X" && fp == "X") {
                $('#msg').html("First Player won").animate({
                    "font-size": "4rem"
                }, {
                    "duration": 1000

                });
                $('#logo').show();
                $('audio#gamewin')[0].play();
            }
            else if (box1 == "X" && box5 == "X" && box9 == "X" && sp == "X") {
                $('#msg').html("Second Player won").animate({
                    "font-size": "4rem"
                }, {
                    "duration": 1000

                });
                $('#logo').show();
                $('audio#gamewin')[0].play();
            }
            else if (box1 == "0" && box5 == "0" && box9 == "0" && fp == "0") {
                $('#msg').html("First Player won").animate({
                    "font-size": "4rem"
                }, {
                    "duration": 1000

                });
                $('#logo').show();
                $('audio#gamewin')[0].play();
            }
            else if (box1 == "0" && box5 == "0" && box9 == "0" && sp == "0") {
                $('#msg').html("Second Player won").animate({
                    "font-size": "4rem"
                }, {
                    "duration": 1000

                });
                $('#logo').show();
                $('audio#gamewin')[0].play();
            }
            $('input').attr('disabled', 'disabled');
            console.log("Game Finished")
        }
        else if (box3 === box5 && box5 === box7 && box3 != "" && box5 != "" && box7 != "") {
            if (box3 == "X" && box5 == "X" && box7 == "X" && fp == "X") {
                $('#msg').html("First Player won").animate({
                    "font-size": "4rem"
                }, {
                    "duration": 1000

                });
                $('#logo').show();
                $('audio#gamewin')[0].play();
            }
            else if (box3 == "X" && box5 == "X" && box7 == "X" && sp == "X") {
                $('#msg').html("Second Player won").animate({
                    "font-size": "4rem"
                }, {
                    "duration": 1000

                });
                $('#logo').show();
                $('audio#gamewin')[0].play();
            }
            else if (box3 == "0" && box5 == "0" && box7 == "0" && fp == "0") {
                $('#msg').html("First Player won").animate({
                    "font-size": "4rem"
                }, {
                    "duration": 1000

                });
                $('#logo').show();
                $('audio#gamewin')[0].play();
            }
            else if (box3 == "0" && box5 == "0" && box7 == "0" && sp == "0") {
                $('#msg').html("Second Player won").animate({
                    "font-size": "4rem"
                }, {
                    "duration": 1000

                });
                $('#logo').show();
                $('audio#gamewin')[0].play();
            }
            $('input').attr('disabled', 'disabled');
            console.log("Game Finished")
        }


        else {
            gameOver = gameOver + 1;
            console.log("Game Over" + gameOver);

            if (gameOver == 9) {
                $('#logo').show();
                $('#msg').html("Game Over").animate({
                    "font-size": "4rem"
                }, {
                    "duration": 1000

                });
                $('audio#gameover')[0].play();
            }
        }
    }

    var color;
    $('#box-1').on('click', function () {
        if (exe_once == true) {

            clickCount();
        }
        $(this).blur();
        $('#box-1').css('background-color', 'white');
        $('#box-2').css('background-color', 'rgb(102, 44, 17)');
        $('#box-3').css('background-color', 'rgb(102, 44, 17)');
        $('#box-4').css('background-color', 'rgb(102, 44, 17)');
        $('#box-5').css('background-color', 'rgb(102, 44, 17)');
        $('#box-6').css('background-color', 'rgb(102, 44, 17)');
        $('#box-7').css('background-color', 'rgb(102, 44, 17)');
        $('#box-8').css('background-color', 'rgb(102, 44, 17)');
        $('#box-9').css('background-color', 'rgb(102, 44, 17)');
        $('#x').on('click', function () {
            color = $('#box-1').css("background-color");
            if (color == 'rgb(255, 255, 255)') {
                $('#box-1').val("X").css({ "color": "yellow", "font-weight": "bolder", "font-size": "2rem", "text-shadow": "10px 2px 4px black" })
                $('#box-1').css('background-color', 'rgb(102, 44, 17)');
                $('audio#xclick')[0].play();
                getInputs();
                $('#x').toggle();
                $('#o').toggle();

            }
        })
        $('#o').on('click', function () {
            color = $('#box-1').css("background-color");
            if (color == 'rgb(255, 255, 255)') {
                $('#box-1').val("0").css({ "color": "yellow", "font-weight": "bolder", "font-size": "2rem", "text-shadow": "10px 2px 4px black" })
                $('#box-1').css('background-color', 'rgb(102, 44, 17)');
                $('audio#oclick')[0].play();
                getInputs();
                $('#x').toggle();
                $('#o').toggle();
            }
        })

    })
    $('#box-2').on('click', function () {
        if (exe_once == true) {
            clickCount();

        }
        $(this).blur();
        $('#box-2').css('background-color', 'white');
        $('#box-1').css('background-color', 'rgb(102, 44, 17)');
        $('#box-3').css('background-color', 'rgb(102, 44, 17)');
        $('#box-4').css('background-color', 'rgb(102, 44, 17)');
        $('#box-5').css('background-color', 'rgb(102, 44, 17)');
        $('#box-6').css('background-color', 'rgb(102, 44, 17)');
        $('#box-7').css('background-color', 'rgb(102, 44, 17)');
        $('#box-8').css('background-color', 'rgb(102, 44, 17)');
        $('#box-9').css('background-color', 'rgb(102, 44, 17)');
        $('#x').on('click', function () {
            color = $('#box-2').css("background-color");
            if (color == 'rgb(255, 255, 255)') {
                $('#box-2').val("X").css({ "color": "yellow", "font-weight": "bolder", "font-size": "2rem", "text-shadow": "10px 2px 4px black" })
                $('#box-2').css('background-color', 'rgb(102, 44, 17)');
                $('audio#xclick')[0].play();
                getInputs();
                $('#x').toggle();
                $('#o').toggle();
            }
        })
        $('#o').on('click', function () {
            color = $('#box-2').css("background-color");
            if (color == 'rgb(255, 255, 255)') {
                $('#box-2').val("0").css({ "color": "yellow", "font-weight": "bolder", "font-size": "2rem", "text-shadow": "10px 2px 4px black" })
                $('#box-2').css('background-color', 'rgb(102, 44, 17)');
                $('audio#oclick')[0].play();
                getInputs();
                $('#x').toggle();
                $('#o').toggle();
            }
        })
    })
    $('#box-3').on('click', function () {
        if (exe_once == true) {
            clickCount();

        }
        $(this).blur();
        $('#box-3').css('background-color', 'white');
        $('#box-2').css('background-color', 'rgb(102, 44, 17)');
        $('#box-1').css('background-color', 'rgb(102, 44, 17)');
        $('#box-4').css('background-color', 'rgb(102, 44, 17)');
        $('#box-5').css('background-color', 'rgb(102, 44, 17)');
        $('#box-6').css('background-color', 'rgb(102, 44, 17)');
        $('#box-7').css('background-color', 'rgb(102, 44, 17)');
        $('#box-8').css('background-color', 'rgb(102, 44, 17)');
        $('#box-9').css('background-color', 'rgb(102, 44, 17)');
        $('#x').on('click', function () {
            color = $('#box-3').css("background-color");
            if (color == 'rgb(255, 255, 255)') {
                $('#box-3').val("X").css({ "color": "yellow", "font-weight": "bolder", "font-size": "2rem", "text-shadow": "10px 2px 4px black" })
                $('#box-3').css('background-color', 'rgb(102, 44, 17)');
                $('audio#xclick')[0].play();
                getInputs();
                $('#x').toggle();
                $('#o').toggle();
            }
        })
        $('#o').on('click', function () {
            color = $('#box-3').css("background-color");
            if (color == 'rgb(255, 255, 255)') {
                $('#box-3').val("0").css({ "color": "yellow", "font-weight": "bolder", "font-size": "2rem", "text-shadow": "10px 2px 4px black" })
                $('#box-3').css('background-color', 'rgb(102, 44, 17)');
                $('audio#oclick')[0].play();
                getInputs();
                $('#x').toggle();
                $('#o').toggle();
            }
        })
    })
    $('#box-4').on('click', function () {
        if (exe_once == true) {
            clickCount();

        }
        $(this).blur();
        $('#box-4').css('background-color', 'white');
        $('#box-2').css('background-color', 'rgb(102, 44, 17)');
        $('#box-3').css('background-color', 'rgb(102, 44, 17)');
        $('#box-1').css('background-color', 'rgb(102, 44, 17)');
        $('#box-5').css('background-color', 'rgb(102, 44, 17)');
        $('#box-6').css('background-color', 'rgb(102, 44, 17)');
        $('#box-7').css('background-color', 'rgb(102, 44, 17)');
        $('#box-8').css('background-color', 'rgb(102, 44, 17)');
        $('#box-9').css('background-color', 'rgb(102, 44, 17)');
        $('#x').on('click', function () {
            color = $('#box-4').css("background-color");
            if (color == 'rgb(255, 255, 255)') {
                $('#box-4').val("X").css({ "color": "yellow", "font-weight": "bolder", "font-size": "2rem", "text-shadow": "10px 2px 4px black" })
                $('#box-4').css('background-color', 'rgb(102, 44, 17)');
                $('audio#xclick')[0].play();
                getInputs();
                $('#x').toggle();
                $('#o').toggle();
            }
        })
        $('#o').on('click', function () {
            color = $('#box-4').css("background-color");
            if (color == 'rgb(255, 255, 255)') {
                $('#box-4').val("0").css({ "color": "yellow", "font-weight": "bolder", "font-size": "2rem", "text-shadow": "10px 2px 4px black" })
                $('#box-4').css('background-color', 'rgb(102, 44, 17)');
                $('audio#oclick')[0].play();
                getInputs();
                $('#x').toggle();
                $('#o').toggle();
            }
        })
    })
    $('#box-5').on('click', function () {
        if (exe_once == true) {
            clickCount();

        }
        $(this).blur();
        $('#box-5').css('background-color', 'white');
        $('#box-2').css('background-color', 'rgb(102, 44, 17)');
        $('#box-3').css('background-color', 'rgb(102, 44, 17)');
        $('#box-4').css('background-color', 'rgb(102, 44, 17)');
        $('#box-1').css('background-color', 'rgb(102, 44, 17)');
        $('#box-6').css('background-color', 'rgb(102, 44, 17)');
        $('#box-7').css('background-color', 'rgb(102, 44, 17)');
        $('#box-8').css('background-color', 'rgb(102, 44, 17)');
        $('#box-9').css('background-color', 'rgb(102, 44, 17)');
        $('#x').on('click', function () {
            color = $('#box-5').css("background-color");
            if (color == 'rgb(255, 255, 255)') {
                $('#box-5').val("X").css({ "color": "yellow", "font-weight": "bolder", "font-size": "2rem", "text-shadow": "10px 2px 4px black" })
                $('#box-5').css('background-color', 'rgb(102, 44, 17)');
                $('audio#xclick')[0].play();
                getInputs();
                $('#x').toggle();
                $('#o').toggle();
            }
        })
        $('#o').on('click', function () {
            color = $('#box-5').css("background-color");
            if (color == 'rgb(255, 255, 255)') {
                $('#box-5').val("0").css({ "color": "yellow", "font-weight": "bolder", "font-size": "2rem", "text-shadow": "10px 2px 4px black" })
                $('#box-5').css('background-color', 'rgb(102, 44, 17)');
                $('audio#oclick')[0].play();
                getInputs();
                $('#x').toggle();
                $('#o').toggle();
            }
        })
    })
    $('#box-6').on('click', function () {
        if (exe_once == true) {
            clickCount();

        }
        $(this).blur();
        $('#box-6').css('background-color', 'white');
        $('#box-2').css('background-color', 'rgb(102, 44, 17)');
        $('#box-3').css('background-color', 'rgb(102, 44, 17)');
        $('#box-4').css('background-color', 'rgb(102, 44, 17)');
        $('#box-5').css('background-color', 'rgb(102, 44, 17)');
        $('#box-1').css('background-color', 'rgb(102, 44, 17)');
        $('#box-7').css('background-color', 'rgb(102, 44, 17)');
        $('#box-8').css('background-color', 'rgb(102, 44, 17)');
        $('#box-9').css('background-color', 'rgb(102, 44, 17)');
        $('#x').on('click', function () {
            color = $('#box-6').css("background-color");
            if (color == 'rgb(255, 255, 255)') {
                $('#box-6').val("X").css({ "color": "yellow", "font-weight": "bolder", "font-size": "2rem", "text-shadow": "10px 2px 4px black" })
                $('#box-6').css('background-color', 'rgb(102, 44, 17)');
                $('audio#xclick')[0].play();
                getInputs();
                $('#x').toggle();
                $('#o').toggle();
            }
        })
        $('#o').on('click', function () {
            color = $('#box-6').css("background-color");
            if (color == 'rgb(255, 255, 255)') {
                $('#box-6').val("0").css({ "color": "yellow", "font-weight": "bolder", "font-size": "2rem", "text-shadow": "10px 2px 4px black" })
                $('#box-6').css('background-color', 'rgb(102, 44, 17)');
                $('audio#oclick')[0].play();
                getInputs();
                $('#x').toggle();
                $('#o').toggle();
            }
        })
    })
    $('#box-7').on('click', function () {
        if (exe_once == true) {
            clickCount();

        }
        $(this).blur();
        $('#box-7').css('background-color', 'white');
        $('#box-2').css('background-color', 'rgb(102, 44, 17)');
        $('#box-3').css('background-color', 'rgb(102, 44, 17)');
        $('#box-4').css('background-color', 'rgb(102, 44, 17)');
        $('#box-5').css('background-color', 'rgb(102, 44, 17)');
        $('#box-6').css('background-color', 'rgb(102, 44, 17)');
        $('#box-1').css('background-color', 'rgb(102, 44, 17)');
        $('#box-8').css('background-color', 'rgb(102, 44, 17)');
        $('#box-9').css('background-color', 'rgb(102, 44, 17)');
        $('#x').on('click', function () {
            color = $('#box-7').css("background-color");
            if (color == 'rgb(255, 255, 255)') {
                $('#box-7').val("X").css({ "color": "yellow", "font-weight": "bolder", "font-size": "2rem", "text-shadow": "10px 2px 4px black" })
                $('#box-7').css('background-color', 'rgb(102, 44, 17)');
                $('audio#xclick')[0].play();
                getInputs();
                $('#x').toggle();
                $('#o').toggle();
            }
        })
        $('#o').on('click', function () {
            color = $('#box-7').css("background-color");
            if (color == 'rgb(255, 255, 255)') {
                $('#box-7').val("0").css({ "color": "yellow", "font-weight": "bolder", "font-size": "2rem", "text-shadow": "10px 2px 4px black" })
                $('#box-7').css('background-color', 'rgb(102, 44, 17)');
                $('audio#oclick')[0].play();
                getInputs();
                $('#x').toggle();
                $('#o').toggle();
            }
        })
    })
    $('#box-8').on('click', function () {
        if (exe_once == true) {
            clickCount();

        }
        $(this).blur();
        $('#box-8').css('background-color', 'white');
        $('#box-2').css('background-color', 'rgb(102, 44, 17)');
        $('#box-3').css('background-color', 'rgb(102, 44, 17)');
        $('#box-4').css('background-color', 'rgb(102, 44, 17)');
        $('#box-5').css('background-color', 'rgb(102, 44, 17)');
        $('#box-6').css('background-color', 'rgb(102, 44, 17)');
        $('#box-7').css('background-color', 'rgb(102, 44, 17)');
        $('#box-1').css('background-color', 'rgb(102, 44, 17)');
        $('#box-9').css('background-color', 'rgb(102, 44, 17)');
        $('#x').on('click', function () {
            color = $('#box-8').css("background-color");
            if (color == 'rgb(255, 255, 255)') {
                $('#box-8').val("X").css({ "color": "yellow", "font-weight": "bolder", "font-size": "2rem", "text-shadow": "10px 2px 4px black" })
                $('#box-8').css('background-color', 'rgb(102, 44, 17)');
                $('audio#xclick')[0].play();
                getInputs();
                $('#x').toggle();
                $('#o').toggle();
            }
        })
        $('#o').on('click', function () {
            color = $('#box-8').css("background-color");
            if (color == 'rgb(255, 255, 255)') {
                $('#box-8').val("0").css({ "color": "yellow", "font-weight": "bolder", "font-size": "2rem", "text-shadow": "10px 2px 4px black" })
                $('#box-8').css('background-color', 'rgb(102, 44, 17)');
                $('audio#oclick')[0].play();
                getInputs();
                $('#x').toggle();
                $('#o').toggle();
            }
        })
    })
    $('#box-9').on('click', function () {
        if (exe_once == true) {
            clickCount();

        }
        $(this).blur();
        $('#box-9').css('background-color', 'white');
        $('#box-2').css('background-color', 'rgb(102, 44, 17)');
        $('#box-3').css('background-color', 'rgb(102, 44, 17)');
        $('#box-4').css('background-color', 'rgb(102, 44, 17)');
        $('#box-5').css('background-color', 'rgb(102, 44, 17)');
        $('#box-6').css('background-color', 'rgb(102, 44, 17)');
        $('#box-7').css('background-color', 'rgb(102, 44, 17)');
        $('#box-8').css('background-color', 'rgb(102, 44, 17)');
        $('#box-1').css('background-color', 'rgb(102, 44, 17)');
        $('#x').on('click', function () {
            color = $('#box-9').css("background-color");
            if (color == 'rgb(255, 255, 255)') {
                $('#box-9').val("X").css({ "color": "yellow", "font-weight": "bolder", "font-size": "2rem", "text-shadow": "10px 2px 4px black" })
                $('#box-9').css('background-color', 'rgb(102, 44, 17)');
                $('audio#xclick')[0].play();
                getInputs();
                $('#x').toggle();
                $('#o').toggle();
            }
        })
        $('#o').on('click', function () {
            color = $('#box-9').css("background-color");
            if (color == 'rgb(255, 255, 255)') {
                $('#box-9').val("0").css({ "color": "yellow", "font-weight": "bolder", "font-size": "2rem", "text-shadow": "10px 2px 4px black" })
                $('#box-9').css('background-color', 'rgb(102, 44, 17)');
                $('audio#oclick')[0].play();
                getInputs();
                $('#x').toggle();
                $('#o').toggle();
            }
        })

    })
})