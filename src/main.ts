import kaboom from 'kaboom';
import LoadAssets from './assets';

// Initalize canvas
const game = kaboom({
    width: window.innerWidth,
    height: window.innerHeight
});

// Load game assets
LoadAssets();

game.add([

    sprite('dev_test_image')

])