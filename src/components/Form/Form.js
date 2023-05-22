import { useContext, useState } from "react";
import FormInput from "./FormInput";
import "./styles.css";
import { UserContext } from "../Providers/UserContextProvider";
import { users } from "../Constants/constants";
import useAlert from "../Providers/useAlert";

const Form = ({ user, setShowModal }) => {
  const { updateUser } = useContext(UserContext);
  const [values, setValues] = useState(user);

  const { setAlert } = useAlert();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(values.id, values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form className="edit-form" onSubmit={handleSubmit}>
        {users.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <div className="footer">
          <button
            onClick={() => {
              setShowModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button type="submit" onClick={()=>{
              setAlert("success", "Edit Row was carried out succesfully.");
          }}>Update</button>
        </div>
      </form>
 
    </>
  );
};

export default Form;
