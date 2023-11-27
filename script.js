document.querySelector('.menu').addEventListener('click', function () {
    console.log("ok");
    document.querySelector('.left-main-body').classList.toggle('active');
    document.querySelector('.right-main-body').classList.toggle('active');
    document.querySelector('.backdrop').classList.toggle('active');
});