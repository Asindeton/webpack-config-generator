const questionArray = [
  // {
  //   title: '1',
  //   text: '',
  //   requireInput: false,
  //   answer: null,
  //   child: [
  //     {
  //       title: '1.1',
  //       text: '',
  //       answer: null,
  //       child: [
  //         {
  //           title: '1.1.1',
  //           text: '',
  //           answer: null,
  //         },
  //         {
  //           title: '1.1.2',
  //           text: '',
  //           answer: null,
  //         },
  //         {
  //           title: '1.1.3',
  //           text: '',
  //           placeholder: 'index.html',
  //           answer: null,
  //         },
  //         {
  //           title: '1.1.4',
  //           text: '',
  //           answer: null,
  //         },
  //       ],
  //     },
  //     {
  //       title: '1.2',
  //       text: '',
  //       answer: null,
  //       child: [
  //         {
  //           title: '1.2.1',
  //           text: '',
  //           answer: null,
  //           child: [
  //             {
  //               title: '1.2.1.1',
  //               text: '',
  //               answer: null,
  //               child: [
  //                 {
  //                   title: '1.2.1.1.1',
  //                   text: '',
  //                   answer: null,
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    title: 'HTMLWebpackPlugin',
    text: 'Ваше приложение использует подготовленную заранее верстку(html файл)?',
    sendingValue: 'htmlWebpackPlugin',
    requireInput: false,
    answer: null,
    child: [
      {
        title: 'Имя HTML Файла',
        text: 'Ваше приложение использует подготовленную заранее верстку(html файл)?',
        sendingValue: 'htmlTeamplate',
        requireInput: true,
        placeholder: 'index.html',
        answer: null,
      },
    ],
  },
  {
    title: 'Препроцессоры',
    text: 'Собираетесь ли вы использовать препроцессоры при создании приложения?',
    requireInput: false,
    sendingValue: 'preproccesors',
    answer: null,
    child: [
      {
        title: 'SASS/SCSS',
        text: 'Вы будете использовать SASS/SCSS?',
        sendingValue: 'sass',
        requireInput: false,
        answer: null,
      },
      {
        title: 'LESS',
        text: 'Вы будете использовать LESS?',
        sendingValue: 'less',
        requireInput: false,
        answer: null,
      },
    ],
  },
  {
    title: 'TypeScript',
    text: 'Ваше приложение использует Typescript?',
    sendingValue: 'typescript',
    requireInput: false,
    answer: null,
  },
  {
    title: 'React',
    text: 'Ваше приложение использует React',
    sendingValue: 'react',
    requireInput: false,
    answer: null,
  },
  {
    title: 'DevServer',
    text: 'Вы хотите иметь возможность видеть изменения в реальном времени, использовать встроенный сервер разработчика?',
    requireInput: false,
    sendingValue: 'devServer',
    answer: null,
    child: [
      {
        title: 'DevServer port',
        text: 'Введите порт сервера разработчика',
        requireInput: true,
        sendingValue: 'devServerPort',
        placeholder: '4200',
        answer: null,
      },
    ],
  },
];

export default questionArray;
