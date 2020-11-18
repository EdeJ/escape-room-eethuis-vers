import { Player, Buffer } from 'tone';

let player1;
let player2;
let player3;
let player4;


const buffer = new Buffer(`${process.env.PUBLIC_URL}/sounds/sounds.mp3`, function () {
    const buff = buffer.get();
    player1 = new Player(buff).toDestination();
    player2 = new Player(buff).toDestination();
    player3 = new Player(buff).toDestination();
    player4 = new Player(buff).toDestination();
});


const Sounds = function () {
    Sounds.prototype.play = (sample) => {
        switch (sample) {
            case 'blop':
                player1.start('0', '0', '1');
                break;
            case 'click':
                player2.start('0', '1', '1');
                break;
            case 'correct':
                player3.start('0', '2', '1');
                break;
            case 'wrong':
                player4.start('0', '3', '1');
                break;
            default:
                break;
        }
    }
}
export default Sounds;