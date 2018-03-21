// Instruments
import avatar from '../../theme/assets/volodymyr-mordas.jpg';


const GROUP_ID = 'sn8x1osnm1';
const TOKEN = 'hpat31rqpx';

const initialState = {
    avatar,
    api:       `https://lab.lectrum.io/react/api/${GROUP_ID}`,
    firstName: 'Volodymyr',
    lastName:  'Mordas',
    token:     TOKEN
};

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
