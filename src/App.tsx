import { useDispatch } from 'react-redux';

import FieldRenderer from './components/FieldRenderer';
import { useFields } from './redux/selectors';
import { addForms } from './redux/actions';
// import {Field} from './redux/types';
import './style.css';

const App = () => {
  const dispatch = useDispatch();
  // const [form, setForm] = useState([]);
  const fields = useFields();

  console.log(fields);

  // useEffect(() => {
  //   dispatch(setFields(fields));
  // }, [dispatch]);

  const makeHandleAddForm = (fields: any) => () => {
      dispatch(addForms(fields));
  };

  return (
    <div className="fields-container">
      <div onClick={makeHandleAddForm}>Form +</div>
      <div>
        {fields.map(field => (
          <FieldRenderer key={field.id} field={field} />
        ))}
      </div>
    </div>
  );
};
export default App;
