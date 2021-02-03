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
    title: 'Context',
    sendingValue: 'context',
    requireInput: true,
    placeholder: 'src',
    answer: null,
  },
  {
    title: 'Entry Points',
    sendingValue: 'entryPoints',
    requireInput: true,
    placeholder: 'script.js',
    answer: null,
  },
  {
    title: 'Output folder',
    sendingValue: 'outputFolder',
    requireInput: true,
    placeholder: 'dist',
    answer: null,
  },
  {
    sendingValue: 'htmlWebpackPlugin',
    requireInput: false,
    answer: null,
    child: [
      {
        sendingValue: 'htmlTemplate',
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
    title: 'Vanilla JS',
    sendingValue: 'vanillaJs',
    requireInput: false,
    answer: null,
    child: [
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
    ],
  },
  {
    title: 'local files',
    sendingValue: 'localFiles',
    requireInput: false,
    answer: null,
    child: [
      {
        title: 'Image extension',
        sendingValue: 'imageExtension',
        requireInput: true,
        placeholder: '/\.(png|jpg|svg|gif)$/',
        answer: null,
      },
      {
        title: 'Font extension',
        sendingValue: 'fontExtension',
        requireInput: true,
        placeholder: '/\.(ttf|woff|woff2|eot)$/',
        answer: null,
      },
      {
        title: 'Audio extension',
        sendingValue: 'audioExtension',
        requireInput: true,
        placeholder: '/\.mp3$/',
        answer: null,
      },
      {
        title: 'Video extension',
        sendingValue: 'videoExtension',
        requireInput: true,
        placeholder: '/\.mp4$/',
        answer: null,
      },
    ],
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
      {
        title: 'Hot Module Replacement',
        requireInput: false,
        sendingValue: 'hotModuleReplacement',
        answer: null,
      },
    ],
  },
  {
    title: 'Optimization',
    requireInput: false,
    sendingValue: 'optimization',
    answer: null,
    child: [
      {
        title: 'External libraries',
        requireInput: false,
        sendingValue: 'libraries',
        answer: null,
      },
      {
        title: 'Production',
        requireInput: false,
        sendingValue: 'production',
        answer: null,
        child: [
          {
            title: 'Minification',
            requireInput: false,
            sendingValue: 'minification',
            answer: null,
            child: [
              {
                title: 'Minification HTML',
                requireInput: false,
                sendingValue: 'minificationHTML',
                answer: null,
              },
              {
                title: 'Minification CSS',
                requireInput: false,
                sendingValue: 'minificationCSS',
                answer: null,
              },
              {
                title: 'Minification JS',
                requireInput: false,
                sendingValue: 'minificationJS',
                answer: null,
              },
            ],
          },
          {
            title: 'Source Map',
            requireInput: false,
            sendingValue: 'sourceMap',
            answer: null,
          },
        ],
      },
    ],
  },
  {
    title: 'Bundle analyzer',
    sendingValue: 'bundleAnalyzer',
    requireInput: false,
    answer: null,
  },
];

export default questionArray;
