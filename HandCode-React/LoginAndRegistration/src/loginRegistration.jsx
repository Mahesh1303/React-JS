import { useState } from "react";

function InputField({ label, type }) {
  return (
    <div>
      {label}
      <input type={type} className="space-y-4 mx-auto m-8 ml-9" />
    </div>
  );
}

function LoginRegistration() {
  const [isLogin, setLogin] = useState(false);

  const toggle = () => {
    setLogin(!isLogin);
  };

  return (
    <div className="justify-center bg-slate-700 h-[500px] w-[500px]">
      <div>
        <InputField label="Username" type="text" />
        <InputField label="Password" type="password" />
        {!isLogin && <InputField label="Confirm Password" type="password" />}
      </div>

      <div>
        <button className="m-4 bg-red-600 p-4 rounded-full">
          {isLogin ? "Login" : "Register"}
        </button>
      </div>

      <div>
        <button onClick={toggle}>
          {isLogin
            ? "Don't have an Account? Click to Register"
            : "Already have an Account? Login here"}
        </button>
      </div>
    </div>
  );
}

export default LoginRegistration;
