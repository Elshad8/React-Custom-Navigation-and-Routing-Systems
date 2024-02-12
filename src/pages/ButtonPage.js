import Button from '../components/Button';
import {GoBell,GoCloud,GoDatabase} from 'react-icons/go';

function ButtonPage(){


    return <div>
        <div>
            <Button className="mb-5" secondary rounded outline >
                <GoBell/>
                Click me
            </Button>
        </div>
        <div>
            <Button danger outline >
                <GoCloud/>
                Buy now!
            </Button>
        </div>
        <div>
            <Button warning >
                <GoDatabase/>
                See deal!
            </Button>
        </div>
        <div>
            <Button secondary outline>Hide ads!</Button>
        </div>
        <div>
            <Button primary rounded>Something!</Button>
        </div>
    </div>;
}

export default ButtonPage;