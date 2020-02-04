// import a CSS module
// import classes from './app.css';

// export default () => {
//   console.log(classes.app);
// };

export const hello = () => {return 'hello'};

export const add = (x, y) => {
  if(typeof(x) !== "number" || typeof(y) !== "number")
    return (null);

  return(x + y);
};