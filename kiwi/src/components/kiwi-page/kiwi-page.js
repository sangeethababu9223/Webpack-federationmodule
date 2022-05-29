import Heading from '../heading/heading.js';
import KiwiImage from '../kiwi-image/kiwi-image.js';

class KiwiPage {
    render() {
        const heading = new Heading();
        heading.render('Kiwi');
        
        const kiwiImage = new KiwiImage();
        kiwiImage.render();
    }
}

export default KiwiPage;

// import('HelloWorldApp/HelloWorldButton')
//     .then(HelloWorldButtonModule => {
//         const HelloWorldButton = HelloWorldButtonModule.default;
//         const helloWorldButton = new HelloWorldButton(); 
//         helloWorldButton.render();
//     })
// import('HelloWorldApp/HelloWorldPage')
//     .then(HelloWorldPageModule => {
//         const HelloWorldPage = HelloWorldPageModule.default;
//         const helloWorldPage = new HelloWorldPage(); 
//         helloWorldPage.render();
//     })
