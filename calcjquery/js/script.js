$(function() {
    let errorflag = false;
    let emptyflag = true;
    let memory = null;
    let action = null;
    let scr = $('.screen');

    $('.clear').on('click', function() {
        scr.html('0');
        errorflag = false;
        emptyflag = true;
    });

    $('.backspace').on('click', function() {
        if (!errorflag && !emptyflag) {
            if ((scr.html()[0] == '-') && (scr.html().length == 2)) {
                scr.html('0');
            } else if (scr.html().length == 1) {
                scr.html('0');
            } else {
                render(Number(scr.html().slice(0, -1)));
            }
        }
    });

    $('.eval').on('click', function() {
        if ((memory !== null) && action && !errorflag) {
            evaluate();
            memory = null;
            action = null;
            emptyflag = false;
        }
    });

    $('.oneonx').on('click', function() {
        if (!errorflag) {
            render(1/+scr.html());
            emptyflag = true;
        }
    });

    $('.square').on('click', function() {
        if (!errorflag) {
            render(scr.html()**2);
            emptyflag = true;
        }
    });
    $('.sqrt').on('click', function() {
        if (!errorflag) {
            render(Math.sqrt(scr.html()));
            emptyflag = true;
        }
    });
    $('.sign').on('click', function() {
        if (!errorflag) {
            render(scr.html() * -1);
        }
    });

    $('.point').on('click', function() {
        if (!errorflag) {
            if (emptyflag || (scr.html() == '0')) {
                scr.html('0.');
                emptyflag = false;
            } else {
                if(!$('.screen:contains(".")').length) {
                    scr.html(scr.html() + '.');
                }
            }
        }
    });

    $('.action').on('click', function() {
        if (!errorflag) {
            if ((memory !== null) && action) {
                evaluate();
            }
            memory = +scr.html();
            action = $(this).data('action');
            emptyflag = true;
        }
    });

    $('.digit').on('click', function() {
        if (!errorflag) {
            if (emptyflag || (scr.html() == '0')) {
                scr.html($(this).html());
                emptyflag = false;
            } else {
                if(scr.html().replace(/\D/g, '').length < 16) {
                    scr.html(scr.html() + $(this).html());
                }
            }
        }
    });

    function render(num) {
        console.log(num);
        if (isNaN(num) || (Math.abs(num) > 9007199254740991)) {
            errorflag = true;
            scr.html('error');
        } else {
            if (Math.abs(num) >= 1) {
                scr.html(parseFloat(num.toPrecision(17)));
            } else if (Math.abs(num) >= 0.000001) {
                scr.html(parseFloat(num.toFixed(16)));
            } else {
                num = num.toFixed(16);
                while (num.match(/^\d+\.\d*0$/)) {
                    num = num.slice(0, -1);
                }
                if (num.match(/^\d+\.$/)) num = num.slice(0, -1);

                scr.html(num);
            }
        }
    }

    function evaluate() {
        switch (action) {
            case 'divide':
                render(memory / +scr.html());
            break;
            case 'multiple':
                render(memory * +scr.html());
            break;
            case 'minus':
                render(memory - +scr.html());
            break;
            case 'plus':
                render(memory + +scr.html());
            break;
            case 'exponent':
                render(Math.pow(memory, +scr.html()));
            break;
        }
    }
});
