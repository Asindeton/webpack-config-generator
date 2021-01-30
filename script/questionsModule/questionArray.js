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
    title: 'Entry Points',
    sendingValue: 'entryPoints',
    requireInput: true,
    placeholder: './src/index.js/',
    answer: null,
  },
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
            title: 'Source Mapping',
            requireInput: false,
            sendingValue: 'sourceMapping',
            answer: null,
          },
        ],
      },
    ],
  },
  {
    title: 'Bundle Analysis',
    sendingValue: 'bundleAnalysis',
    requireInput: false,
    answer: null,
    child: [
      {
        title: 'webpack-char',
        sendingValue: 'webpackChar',
        requireInput: false,
        answer: null,
      },
      {
        title: 'webpack-visualizer',
        sendingValue: 'webpackVisualizer',
        requireInput: false,
        answer: null,
      },
      {
        title: 'webpack-bundle-analyze',
        sendingValue: 'webpackBundleAnalyze',
        requireInput: false,
        answer: null,
      },
      {
        title: 'bundle-stats',
        sendingValue: 'bundleStats',
        requireInput: false,
        answer: null,
      },
    ],
  },
  {
    title: 'Auto npm install',
    sendingValue: 'npmInstallWebpackPlugin',
    requireInput: false,
    answer: null,
  },
];

export default questionArray;