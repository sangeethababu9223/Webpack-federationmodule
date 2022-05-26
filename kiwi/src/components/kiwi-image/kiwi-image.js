import kiwi from './kiwi.jpg';

class KiwiImage {
    render() {
        const img = document.createElement('img');
        img.alt = 'Kiwi';
        img.src = kiwi;
        img.classList.add('kiwi-image');

        const body = document.querySelector('body');
        body.appendChild(img);
    }
}

export default KiwiImage;