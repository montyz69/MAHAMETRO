import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const AdminLoginPage = () => {
  const navigate = useNavigate();

  const onLoginButtonContainerClick = useCallback(() => {
    navigate("/admin-homepage-1");
  }, [navigate]);

  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#bc6cd0_57%,_#c714f4)] h-[836px] overflow-hidden text-center text-5xl text-white font-inter">
      <div className="absolute top-[34px] left-[700px] w-[665.2px] h-[768px]">
        <img
          className="absolute top-[0px] left-[0px] rounded-3xl w-[665.2px] h-[768px]"
          alt=""
          src="/login-section.svg"
        />
        <div
          className="absolute top-[552px] left-[197px] w-[272px] h-[53px] cursor-pointer text-lg"
          onClick={onLoginButtonContainerClick}
        >
          <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumseagreen w-[272px] h-[53px]" />
          <div className="absolute top-[0px] left-[0px] flex items-center justify-center w-[272px] h-[53px]">
            login
          </div>
        </div>
        <div className="absolute h-[9.11%] w-[79.92%] top-[51.56%] right-[10.04%] bottom-[39.32%] left-[10.04%] text-left text-gray-200">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-darkslateblue" />
          <div className="absolute h-full w-[86.25%] top-[0%] left-[13.75%] flex items-center">
            ************
          </div>
          <img
            className="absolute h-[77.14%] w-[9.16%] top-[11.43%] right-[88.81%] bottom-[11.43%] left-[2.03%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/lock-icon.svg"
          />
        </div>
        <div className="absolute h-[9.11%] w-[79.92%] top-[39.32%] right-[10.04%] bottom-[51.56%] left-[10.04%] text-left text-gray-200">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-darkslateblue" />
          <div className="absolute h-full w-[86.25%] top-[0%] left-[13.75%] flex items-center">
          <input
            type="text"
            className="absolute h-full w-[86.25%] top-[0%] left-[13.75%] flex items-center"
            background-color="">
            </input>
          </div>
          <img
            className="absolute h-[77.14%] w-[7.3%] top-[10%] right-[89.82%] bottom-[12.86%] left-[2.88%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/user-icon.svg"
          />
        </div>
        <b className="absolute top-[37px] left-[227px] text-[62px] flex items-center justify-center w-[212px] [text-shadow:4px_10px_10px_rgba(0,_0,_0,_0.25)]">
          Login
        </b>
      </div>
      <img
        className="absolute top-[200px] left-[156px] w-[435px] h-[435px] object-cover"
        alt=""
        src="/pune-metro-logo@2x.png"
      />
    </div>
  );
};

export default AdminLoginPage;
