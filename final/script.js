
function dragElement(element) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    element.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        e.preventDefault();
        console.log(e);
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        element.style.top = (element.offsetTop - pos2) + 'px';
        element.style.left = (element.offsetLeft - pos1) + 'px';
    }

    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}

        dragElement(document.getElementById('mask1'));
        dragElement(document.getElementById('mask2'));
        dragElement(document.getElementById('mask3'));
        dragElement(document.getElementById('mask4'));
        dragElement(document.getElementById('mask5'));
        dragElement(document.getElementById('mask6'));
        dragElement(document.getElementById('mask7'));
        dragElement(document.getElementById('mask8'));
        dragElement(document.getElementById('mask9'));
        dragElement(document.getElementById('mask10'));