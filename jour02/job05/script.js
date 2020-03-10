var footer = document.getElementsByTagName('footer')[0];

window.addEventListener('scroll', function(event)
{
    var windowscroll = document.body.scrollTop ||document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (windowscroll / height) * 100;
    footer.style.width = scrolled + "%";
})