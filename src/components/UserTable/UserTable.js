import React, { useEffect, useState } from "react";
import Pagination from "../Pagination/Paginations";
import User from "../User";
import "./styles.css";


function UserTable({sortedUsers,
  allowPaginations,
  allowMultiSelectRow,
  selectedRow}) {



  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  const [flag, setFlag] = useState(true);

  const [rowsSelected, setRowsSelected] = useState([]);

  const lastIndex = currentPage * usersPerPage;
  const firstIndex = lastIndex - usersPerPage;

  const users = sortedUsers.slice(firstIndex, lastIndex);

  const howManyPages = Math.ceil(sortedUsers.length / usersPerPage);

  


  const handleChange = (e) => {
    const { name } = e.target;
    const mySet = new Set(rowsSelected);
    if (name === "allselect") {
      if (flag) {
        sortedUsers.map((user) => mySet.add(user.id));
      } else {
        mySet.clear();
      }
      setFlag(!flag);
    } else {
      if (!isChecked(name)) mySet.add(name);
      else mySet.delete(name);
    }
    setRowsSelected(Array.from(mySet));
  };

  const isChecked = (id) => {
    return rowsSelected.includes(id);
  };

  useEffect(() => {
    selectedRow(rowsSelected);
  }, [rowsSelected, selectedRow]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              {allowMultiSelectRow && (
                <input
                  type="checkbox"
                  name="allselect"
                  checked={
                    !sortedUsers.some(
                      (user) => isChecked(user.id) !== true
                    )
                  }
                  onChange={handleChange}
                />
              )}
            </th>
            <th>Name</th>
            <th>Email Id</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <>
              <User user={user} isChecked={isChecked} handleChange={handleChange} allowMultiSelectRow={allowMultiSelectRow} />
            </>
          ))}
        </tbody>
      </table>
      <section className="table_footer">
        {allowPaginations && (
          <Pagination pages={howManyPages} setCurrentPage={setCurrentPage} />
        )}
      </section>
    </>
  );
}

export default UserTable;
