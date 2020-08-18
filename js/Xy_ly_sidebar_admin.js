function load() {
    var pathname = window.location.pathname;


    if (pathname == '/admin/list_auth') {
        button = document.getElementById("qlxt")
        button.click()
        var element = document.getElementById("item1");
        element.classList.add("active");
    }
    if (pathname == '/admin/list_guest') {

        button1 = document.getElementById("qlkh")
        button1.click()
        var element1 = document.getElementById("item5");
        element1.classList.add("active");

    }
    if (pathname == '/admin/admin_update_info') {
        button2 = document.getElementById("qlkh")
        button2.click()
        var element2 = document.getElementById("item4");
        element2.classList.add("active");
    }
}