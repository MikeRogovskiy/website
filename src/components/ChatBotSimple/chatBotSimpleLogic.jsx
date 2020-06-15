// https://lucasbassetti.com.br/react-simple-chatbot - source docs

const steps = [
    {
        id: '1',
        message: 'Hello! How can I help you?',
        trigger: '2',
    },
    {
        id: '2',
        options: [
            { value: 1, label:  "Something's wrong", trigger: "3" },
            { value: 2, label:  "Where can I find?", trigger: "4" },
            { value: 3, label: "How can I?", trigger: "5" },
        ],
    },
    {
        id: '3',
        message: 'Please, report about bug!',
    },
    {
        id: '4',
        message: 'Please, report about misunderstandings!',
        trigger: '5',
    },
    {
        id: '5',
        message: 'I am not programed well to answer now)',
        end: true,
    },
];

export { steps };