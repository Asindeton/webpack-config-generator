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
    sendingValue: 'htmlWebpackPlugin',
    requireInput: false,
    answer: null,
    child: [
      {
        sendingValue: 'htmlTeamplate',
        requireInput: true,
        placeholder: 'index.html',
        answer: null,
      },
    ],
  },
  {
    sendingValue: 'preprocessors',
    requireInput: false,
    answer: null,
    child: [
      {
        title: 'SASS/SCSS',
        sendingValue: 'sass',
        requireInput: false,
        answer: null,
      },
      {
        title: 'LESS',
        sendingValue: 'less',
        requireInput: false,
        answer: null,
      },
    ],
  },
  {
    title: 'TypeScript',
    sendingValue: 'typescript',
    requireInput: false,
    answer: null,
  },
  {
    title: 'React',
    sendingValue: 'react',
    requireInput: false,
    answer: null,
  },
  {
    title: 'DevServer',
    requireInput: false,
    sendingValue: 'devServer',
    answer: null,
    child: [
      {
        title: 'DevServer port',
        requireInput: true,
        sendingValue: 'devServerPort',
        placeholder: '4200',
        answer: null,
      },
    ],
  },
];

export default questionArray;
