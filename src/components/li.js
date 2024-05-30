import { Link } from 'react-router-dom';
export default function Li(props){
  return(
    <li>
      <Link to={props.route}> {props.children} </Link>
    </li>
  );
}
