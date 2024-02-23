var clickCount = 0;

function incrementCounter() 
{
    clickCount++;
    document.getElementById('clickCount').textContent = clickCount;
}