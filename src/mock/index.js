export const successMesasge = 'The request has been succeeded';
export const errorMessage = 'fetch error';
export const error = new Error(errorMessage);
export const user = {
    firstName: 'Walter',
    lastName:  'White'
};

export const responseData = {
    data:    user,
    message: successMesasge
};
export const responseDataFail = {
    message: errorMessage
};

export const response = {
    status: 200,
    json:   () => Promise.resolve(responseData)
};
export const responseFail = {
    status: 401,
    json:   () => Promise.resolve(responseDataFail)
};

export const setup = () => {
    /* eslint-disable no-undef */
    global.fetch = jest.fn(() => Promise.resolve(fetchResponse));
    global.localStorage = (() => {
        let storage = {};

        return {
            setItem: jest.fn((key, value) => {
                storage[key] = value;
            }),
            getItem:    jest.fn((key) => storage[key]),
            removeItem: jest.fn((key) => {
                delete storage[key];
            }),
            clear: jest.fn(() => {
                storage = {};
            })
        };
    })();
    /* eslint-enable no-undef */
};
