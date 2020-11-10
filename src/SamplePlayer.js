import { Player } from 'tone';

const player1 = new Player(`${process.env.PUBLIC_URL}/sounds/sounds.mp3`).toDestination();
const player2 = new Player(`${process.env.PUBLIC_URL}/sounds/sounds.mp3`).toDestination();
const player3 = new Player(`${process.env.PUBLIC_URL}/sounds/sounds.mp3`).toDestination();
const player4 = new Player(`${process.env.PUBLIC_URL}/sounds/sounds.mp3`).toDestination();

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