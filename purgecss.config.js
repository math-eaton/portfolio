import cssnano from 'cssnano';

export default {
  plugins: [
    cssnano({
      preset: 'default',
    }),
  ],    
  content: ['*.html'],
  css: ['src/css/styles.css']
};
