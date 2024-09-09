import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // To display error
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      setErrorMessage("Vui lòng nhập đầy đủ email và mật khẩu.");
      return;
    }
  
    try {
      // Make API call to JSON server to validate the user
      const response = await fetch(`http://localhost:8000/users?email=${email}&password=${password}`);
      const data = await response.json();
  
      if (data.length > 0) {
        // User exists, redirect to homepage
        navigate("/home", { state: { user: data[0] } });
      } else {
        // Invalid login credentials
        setErrorMessage("Email hoặc mật khẩu không đúng");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("Có lỗi xảy ra. Vui lòng thử lại sau.");
    }
  };
  

  const handleEmailKeyPress = (e) => {
    if (e.key === "Enter" && email) {
      setShowPasswordInput(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <h1 className="text-4xl font-bold mb-24 mt-20 mx-36">
          Đăng nhập để thanh toán nhanh hơn.
        </h1>
        <form
          className="mx-auto rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm"
          onSubmit={handleSubmit}
        >
          <div className="">
            <label
              className="flex text-gray-700 text-2xl whitespace-nowrap font-bold mb-10 mx-auto items-center justify-center"
              htmlFor="email"
            >
              Đăng nhập vào Apple Store
            </label>
            <input
              className="appearance-none border rounded-tl-lg rounded-tr-lg border-gray-600 w-full py-0 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-10"
              id="email"
              type="text"
              placeholder="Email hoặc số điện thoại"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleEmailKeyPress}
            />
          </div>

          {showPasswordInput && (
            <div className="">
              <input
                className="appearance-none border-b border-x border-gray-600 rounded-bl-lg rounded-br-lg w-full py-0 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="password"
                type="password"
                placeholder="Nhập mật khẩu của bạn"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          )}

          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}

          <div className="flex items-center mb-4 mt-4 justify-center">
            <input
              id="rememberMe"
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="mr-2 leading-tight bg-transparent"
            />
            <label className="text-sm font-bold" htmlFor="rememberMe">
              Lưu tôi
            </label>
          </div>

          <div className="hidden items-center justify-center">
            {showPasswordInput && (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Đăng nhập
              </button>
            )}
          </div>

          <div className="mt-4 text-sm flex flex-col justify-center items-center leading-none">
            <a href="#" className="text-blue-500 hover:underline">
              Bạn đã quên mật khẩu?
            </a>
            <br />
            <a href="#" className="flex whitespace-nowrap">
              <p className="mr-1">Bạn không có ID Apple?</p>{" "}
              <p className="text-blue-500 hover:underline">
                Tạo tài khoản của bạn ngay bây giờ.
              </p>
            </a>
          </div>
        </form>
      </div>

      <div className="text-center text-sm border-t z-10 mt-4 py-4">
        Bạn cần hỗ trợ thêm?{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Chat ngay
        </a>{" "}
        hoặc gọi 1800–1192.
      </div>
    </div>
  );
};

export default Login;
