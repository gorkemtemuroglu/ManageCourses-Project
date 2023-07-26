import TableBody from "./TableBody";

function UserTable({
  allUsers,
  setEditForm,
  setEditUser,
  setShowForm,
  setCreatingUser,
}) {
  return (
    <div>
      <table>
        <thead>
          <tr
            style={{
              fontFamily: "Montserrat",
              fontSize: "15px",
              fontWeight: "600",
              lineHeight: "15px",
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company Name</th>
            <th></th>
          </tr>
        </thead>

        {allUsers.users.map((user) => (
          <TableBody
            key={user.id}
            user={user}
            setEditForm={setEditForm}
            setEditUser={setEditUser}
            setCreatingUser={setCreatingUser}
          />
        ))}
      </table>
    </div>
  );
}

export default UserTable;
