import { styled } from "styled-components";
import Modal from "react-modal";

import { useEffect, useState } from "react";

import editIcon from "../../../public/SidebarIcons/pen.png";
import deleteIcon from "../../../public/SidebarIcons/trash.png";
import EditUserForm from "./EditUserForm";

const SyledImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

function TableBody({ user, setEditUser, setCreatingUser }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const [fetch1, setFetch] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const {
    id,
    firstName,
    email,
    phone,
    company,
    image,
    isDeleted = false,
    website,
  } = user;
  const { name: companyName } = company;

  useEffect(
    function () {
      async function deleteUserApi(id) {
        if (!fetch1) return;
        try {
          const res = await fetch(`https://dummyjson.com/users/${id}`, {
            method: "DELETE",
          });
          const data = await res.json();
          setDeleted(data.isDeleted);

          setFetch((cur) => !cur);
          return data;
        } catch (e) {
          console.log(e);
        }
      }
      deleteUserApi(id);
    },
    [id, fetch1]
  );

  return (
    <tbody>
      {!deleted && (
        <tr
          style={{
            backgroundColor: "blue",
            background: "rgba(255, 255, 255, 1)",
          }}
        >
          <td>
            <SyledImg src={image} alt="Img" />
          </td>

          <td>{firstName}</td>
          <td>{email}</td>
          <td>{phone}</td>
          <td>{website ? website : "RandomWebSite.com"}</td>
          <td>{companyName ? companyName : "No Comp"}</td>

          <td
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "2rem",
              gap: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "1rem",
              }}
            >
              <button
                onClick={() => {
                  console.log(id);
                  openModal();
                }}
                style={{
                  background: "rgba(255, 255, 255, 1)",
                  border: "none",
                }}
              >
                <img src={editIcon} alt="DeleteIcon" />
              </button>
              <button
                onClick={() => {
                  setFetch((cur) => !cur);
                }}
                style={{
                  background: "rgba(255, 255, 255, 1)",
                  border: "none",
                }}
              >
                <img src={deleteIcon} alt="editIcon" />
              </button>
              <Modal
                isOpen={modalIsOpen}
                contentLabel="Form Modal"
                onRequestClose={closeModal}
              >
                <EditUserForm
                  userID={id}
                  closeModal={closeModal}
                  setCreatingUser={setCreatingUser}
                  user={user}
                  setEditUser={setEditUser}
                />
              </Modal>
            </div>
          </td>
        </tr>
      )}
    </tbody>
  );
}

export default TableBody;
