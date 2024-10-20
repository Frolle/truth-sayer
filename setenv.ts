import replace from 'replace-in-file';

const apiUrl = process.env.API_URL || 'http://localhost:9001/api';

const options = {
  files: './src/environments/environment.prod.ts',
  from: /#{API_URL}#/g,
  to: apiUrl,
};

replace(options)
  .then((results) => {
    console.log('Replacement results:', results);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });

