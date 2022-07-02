import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsKey } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import "./form.css";

const LoginForm = ({ handleChange, handleSubmit, firstRef, secondRef }) => {
  return (
    <div className="form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            ref={firstRef}
            type="email"
            placeholder="E-mail"
            name="email"
            onChange={handleChange}
            required
          />
          <HiOutlineMail className="icon" />
        </div>
        <div className="form-group">
          <input
            ref={secondRef}
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            required
          />
          <BsKey className="icon" />
        </div>
        <div className="form-group">
          <button>Login</button>
        </div>
      </form>
      <span>
        Doesn't have an account? <a href="/auth/register">Sign Up</a>
      </span>
    </div>
  );
};

const RegisterForm = ({
  handleChange,
  handleSubmit,
  data,
  message,
  setMessage,
}) => {
  const [page, setPage] = useState(0);
  const title = ["Register", "Personal Info"];
  const slideOne = () => {
    return (
      <>
        {message ? message : ""}
        <div className="form-group">
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            onChange={handleChange}
            value={data.email}
            required
          />
          <HiOutlineMail className="icon" />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
            value={data.username}
            required
          />
          <AiOutlineUser className="icon" />
        </div>
        {data.password.length < 2 &&
          setMessage("Password must be longer than 5 digit")}
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={data.password}
            required
          />
          <BsKey className="icon" />
        </div>
      </>
    );
  };

  const slideTwo = () => {
    return (
      <form onSubmit={handleSubmit}>
        {message ? message : ""}
        <div className="form-group">
          <input
            type="text"
            placeholder="Jenjang Pendidikan"
            name="jenjang"
            onChange={handleChange}
            value={data.jenjang}
            required
          />
          <HiOutlineMail className="icon" />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Kota"
            name="kota"
            onChange={handleChange}
            value={data.kota}
            required
          />
          <AiOutlineUser className="icon" />
        </div>

        <div className="button">
          <div className="form-group">
            <button
              onClick={() => {
                if (!data.error) {
                  setPage((currPage) => currPage - 1);
                }
              }}>
              Prev
            </button>
          </div>
          <div className="form-group">
            <button>Register</button>
          </div>
        </div>
      </form>
    );
  };
  return (
    <div className="form">
      <h2>{title[page]}</h2>
      {page === 0 ? slideOne() : slideTwo()}
      {page === 0 ? (
        <div className="form-group">
          <button
            disabled={page === 1}
            onClick={() => {
              setPage((currPage) => currPage + 1);
            }}>
            Next
          </button>
        </div>
      ) : (
        ""
      )}

      <span>
        Already have an account? <a href="/auth/login">Sign In</a>
      </span>
    </div>
  );
};

export { LoginForm, RegisterForm };
