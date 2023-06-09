import React, { useContext, useState } from "react";
import { UserContext } from "../Providers/UserContextProvider";
import Modal from "../Modal";
import "./styles.css";
import useAlert from "../Providers/useAlert";

function User({ user, isChecked, handleChange, allowMultiSelectRow }) {
  const { deleteUser } = useContext(UserContext);
  const {setAlert} = useAlert();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <tr key={user.id} className={`${isChecked(user.id) ? "tr_chk" : ""}`}>
        <td>
          {allowMultiSelectRow && (
            <input
              type="checkbox"
              name={user.id}
              checked={isChecked(user.id)}
              onChange={handleChange}
            />
          )}
        </td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
          <p id="role" className={`${user.role.toLowerCase()}`}>
            {user.role}
          </p>
        </td>
        <td>
          <button className="edit-btn" onClick={() => setShowModal(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 32 32"
              viewBox="0 0 32 32"
              id="edit"
              style={{ fill: "blue" }}
            >
              <path d="M12.82373,12.95898l-1.86279,6.21191c-0.1582,0.52832-0.01367,1.10156,0.37646,1.49121c0.28516,0.28516,0.66846,0.43945,1.06055,0.43945c0.14404,0,0.28906-0.02051,0.43066-0.06348l6.2124-1.8623c0.23779-0.07129,0.45459-0.2002,0.62988-0.37598L31.06055,7.41016C31.3418,7.12891,31.5,6.74707,31.5,6.34961s-0.1582-0.7793-0.43945-1.06055l-4.3501-4.34961c-0.58594-0.58594-1.53516-0.58594-2.12109,0L13.2002,12.3291C13.02441,12.50488,12.89551,12.7207,12.82373,12.95898z M15.58887,14.18262L25.6499,4.12109l2.22852,2.22852L17.81738,16.41113l-3.18262,0.9541L15.58887,14.18262z" />
              <path d="M30,14.5c-0.82861,0-1.5,0.67188-1.5,1.5v10c0,1.37891-1.12158,2.5-2.5,2.5H6c-1.37842,0-2.5-1.12109-2.5-2.5V6c0-1.37891,1.12158-2.5,2.5-2.5h10c0.82861,0,1.5-0.67188,1.5-1.5S16.82861,0.5,16,0.5H6C2.96729,0.5,0.5,2.96777,0.5,6v20c0,3.03223,2.46729,5.5,5.5,5.5h20c3.03271,0,5.5-2.46777,5.5-5.5V16C31.5,15.17188,30.82861,14.5,30,14.5z" />
            </svg>
          </button>
          <button className="delete-btn" onClick={() => {
            deleteUser(user.id);
            setAlert("success","The action to Delete Row are Deleted succesfully.")
          }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              id="delete"
              style={{ fill: "red" }}
            >
              <path d="M24.2,12.193,23.8,24.3a3.988,3.988,0,0,1-4,3.857H12.2a3.988,3.988,0,0,1-4-3.853L7.8,12.193a1,1,0,0,1,2-.066l.4,12.11a2,2,0,0,0,2,1.923h7.6a2,2,0,0,0,2-1.927l.4-12.106a1,1,0,0,1,2,.066Zm1.323-4.029a1,1,0,0,1-1,1H7.478a1,1,0,0,1,0-2h3.1a1.276,1.276,0,0,0,1.273-1.148,2.991,2.991,0,0,1,2.984-2.694h2.33a2.991,2.991,0,0,1,2.984,2.694,1.276,1.276,0,0,0,1.273,1.148h3.1A1,1,0,0,1,25.522,8.164Zm-11.936-1h4.828a3.3,3.3,0,0,1-.255-.944,1,1,0,0,0-.994-.9h-2.33a1,1,0,0,0-.994.9A3.3,3.3,0,0,1,13.586,7.164Zm1.007,15.151V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Zm4.814,0V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Z" />
            </svg>
          </button>
        </td>
      </tr>

      {showModal && (
        <Modal className="modal" user={user} setShowModal={setShowModal} />
      )}
    </>
  );
}

export default User;
