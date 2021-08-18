(function() {
    console.log('urgency banner js ready')

    window.addEventListener("DOMContentLoaded", function () {
        if (Shopify.Checkout.page !== "thank_you") {
            document.querySelector('.logo--left').style.textAlign = "center";
            var time_in_minutes = 10;
            var current_time = Date.parse(new Date());
            var deadline = new Date(current_time + time_in_minutes*60*1000);
            
            var x = setInterval(function() {
                var now = new Date().getTime();
                var distance = deadline - now;
                
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
                document.getElementById("checkout-timer-mobile").innerHTML = minutes + "m " + seconds + "s";
                document.getElementById("checkout-timer-desktop").innerHTML = minutes + "m " + seconds + "s";
                
                if (distance < (2*60000)) {
                    document.getElementById("checkout-timer-mobile").classList.add('warning-text');
                    document.getElementById("checkout-timer-desktop").classList.add('warning-text');
                }
                
                if (distance < (1)) {
                    clearInterval(x);
                    document.getElementById("checkout-timer-mobile").innerHTML = '0s';
                    document.getElementById("checkout-timer-desktop").innerHTML = '0s';
                }
            }, 1000);
        }
    });
}());