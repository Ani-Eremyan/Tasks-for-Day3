var div = document.getElementById('p');
var button = document.getElementById('toggleButton');

let display = true;

function toggleButtonParagraph(){
        if (display)
        {
            div.style.display = 'none';
            button.textContent = 'Show';
        }
        else
        {
            div.style.display = 'block';
            button.textContent = 'Hide';
        }
        

    display = !display;
}