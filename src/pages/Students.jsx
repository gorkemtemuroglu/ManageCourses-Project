import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import "./Students.module.css";

import Row from "../ui/Row";
import Input from "../ui/Input";
import Button from "../ui/Button";

import Spinner from "../ui/Spinner";
import PaginationPage from "./PaginationPage";

import { useUsers } from "../features/users/useUsers";
import CreateUserForm from "../features/users/CreateUserForm";
import UserTable from "../features/users/UserTable";

import searchIcon from "../../public/SidebarIcons/search.png";

const ContainerInput = styled.div`
  position: relative;
`;

function Students() {
  const [showForm, setShowForm] = useState(false);
  const [query, setQuery] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedValue, setSelectedValue] = useState(1);
  const [page, setPage] = useState(0);
  const [render, setRender] = useState(false);
  const [addRender, setAddRender] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [creatingUser, setCreatingUser] = useState(false);
  const [editUser, setEditUser] = useState(false);

  const { isLoading, allUsers, error } = useUsers();

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const navigate = useNavigate();

  useEffect(() => {
    async function searchPeopleWithNum() {
      if (creatingUser) return;
      if (selectedValue === 1) return;
      if (addRender) return;

      try {
        setRender(true);

        const res = await fetch(
          `https://dummyjson.com/users?limit=${selectedValue}&skip=${page}&select=firstName,age,email,phone,image,company`
        );
        const data = await res.json();

        allUsers.users = data.users;

        navigate(`?size=${selectedValue}&page=${page}`);
      } catch (e) {
        alert(e.message);
      }
    }
    searchPeopleWithNum();
  }, [
    render,
    selectedValue,
    allUsers,
    page,
    navigate,
    creatingUser,
    addRender,
    formSubmitted,
  ]);

  useEffect(
    function () {
      async function searchUser() {
        if (!query || !formSubmitted) return;

        setFormSubmitted(false);
        try {
          const res = await fetch(
            `https://dummyjson.com/users/search?q=${query}`
          );
          const data = await res.json();

          allUsers.users = data.users;
          setQuery("");
        } catch (e) {
          console.error(e);
        }
      }
      searchUser();
    },
    [query, formSubmitted, allUsers]
  );

  if (isLoading) return <Spinner></Spinner>;

  if (error) return <div>Errorr</div>;

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted");
    navigate(`?search=${query}`);
    setFormSubmitted((cur) => !cur);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
      }}
    >
      <Row type="horizontal">
        <p
          style={{
            fontFamily: "Montserrat",
            fontSize: "22px",
            fontWeight: "700",
            lineHeight: "27px",
            letterSpacing: "0em",
            textAlign: "left",
            color: "black",
          }}
        >
          Students List
        </p>
        <div style={{ display: "flex", gap: "1rem" }}>
          <form onSubmit={handleSubmit}>
            <ContainerInput>
              <Input
                type="text"
                value={query}
                placeholder="Search..."
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              />
              <img
                src={searchIcon}
                alt="Search"
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "0.5rem",
                  transform: "translateY(-50%)",
                }}
              />
            </ContainerInput>
          </form>
          <Button
            size="small"
            onClick={() => {
              setShowForm((cur) => !cur);
              setCreatingUser((c) => !c);
            }}
          >
            Add New Student
          </Button>
        </div>
      </Row>

      <UserTable
        allUsers={allUsers}
        setEditUser={setEditUser}
        setCreatingUser={setCreatingUser}
      />

      <div>
        {showForm && (
          <div>
            <CreateUserForm
              user={allUsers}
              editForm={editForm}
              setShowForm={setShowForm}
              setCreatingUser={setCreatingUser}
            />
          </div>
        )}
      </div>

      <PaginationPage
        setPage={setPage}
        setRender={setRender}
        page={page}
        selectedValue={selectedValue}
        handleChange={handleChange}
        setCreatingUser={setCreatingUser}
      />
    </div>
  );
}

export default Students;
