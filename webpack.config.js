const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        script: './src/script.js',
        school: './src/school.js',
        teach: './src/teach.js',
        students: './src/students.js',
    },
    output:{
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    watch: true
}