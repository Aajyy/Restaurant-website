// loadHeaderFooter.js
document.addEventListener("DOMContentLoaded", function () {

    fetch("common-header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("common-header").innerHTML = data;

            $('.btn-show-menu-mobile').on('click', function (e) {
                $(this).toggleClass('is-active');
                $('.menu-mobile').toggleClass('show');
                return false;
                e.preventDefault();
            });
        });

    fetch("common-footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("common-footer").innerHTML = data;
        });

});

// copy script in  
// call all id footer page