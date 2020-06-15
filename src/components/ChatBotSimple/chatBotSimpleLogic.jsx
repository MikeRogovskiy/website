// https://lucasbassetti.com.br/react-simple-chatbot - source docs

const steps = [
    {
        id: '1',
        message: 'What is your name?',
        trigger: '2',
    },
    {
        id: '2',
        user: true,
        trigger: '3',
    },
    {
        id: '3',
        message: 'Hi {previousValue}, nice to meet you!',
        trigger: '4',
    },
    {
        id: '4',
        user: true,
        trigger: '5',
    },
    {
        id: '5',
        message: 'I am not programed well to understand {previousValue}',
        end: true,
    },
];

export { steps };