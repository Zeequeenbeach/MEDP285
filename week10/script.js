
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

dragElement(document.getElementById('dress1'));
dragElement(document.getElementById('dress2'));
dragElement(document.getElementById('dress3'));
dragElement(document.getElementById('dress4'));
dragElement(document.getElementById('dress5'));
dragElement(document.getElementById('dress6'));
dragElement(document.getElementById('wig1'));
dragElement(document.getElementById('wig2'));
dragElement(document.getElementById('wig3'));
dragElement(document.getElementById('wig4'));
dragElement(document.getElementById('wig5'));
