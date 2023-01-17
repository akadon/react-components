// import useStyles from '../large/styles'
// import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     test: {
//       width: "100%",
//     },
//   })
// );

interface ComponentProps {
  children?: any;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, onClick, className }: ComponentProps): JSX.Element => {
  // const classes = useStyles();
  return (
    <>
      <button onClick={onClick} className={className} > {children} </button><p></p>
    </>
  );
};

Button.defaultProps = {
  children: "button",
  className: "btn",
};

export default Button;
