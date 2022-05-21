let numberImage = 1;
const countImage = 21;
const pathImages = "/images/gallery";
const countDiv = 50;
const speed = 100;

function generateImage()
{
    let widthDiv = 1920/countDiv;
    let image = pathImages + numberImage+".jpg";
    for(let i = 0; i < countDiv; i++)
    {
        let item = $("<div></div>");
        item.addClass("elementImage");
        item.css("width", widthDiv+"px");
        item.css("height", 880+"px");
        item.css("background-image", 'url('+image+')');
        item.css("background-position-x", - i * widthDiv +"px");
        $("#mainImage").append(item);
    }
}
function changeImage()
{
    let image = pathImages + numberImage+".jpg";
    let i = 1;
    let y = 70;
    $("#mainImage div").each(function () {
        $(this).slideToggle(speed*y, function () {
            $(this).css("background-image", 'url('+image+')');
            $(this).fadeIn(speed*i);
        });
        i++;
        y--;
    });
}

function changeImage2()
{
    let image = pathImages + numberImage+".jpg";
    let i = 70;
    let y = 1;
    $("#mainImage div").each(function () {
        $(this).slideToggle(speed*y, function () {
            $(this).css("background-image", 'url('+image+')');
            $(this).fadeIn(speed*y);
        });
        y++
        i--;
    });
}

function leftChangeImage()
{
    if(numberImage > 1)
        numberImage--;
    else
        numberImage = countImage;
    changeImage2()
}
function rightChangeImage()
{
    if(numberImage < countImage)
        numberImage++;
    else
        numberImage = 1;
    changeImage()
}
$( document).ready(function () {
    generateImage();
    let item = $("<div style='width: 600px; height: 600px; background: black'></div>");
});