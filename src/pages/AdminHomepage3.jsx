import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const AdminHomepage3 = () => {
  const navigate = useNavigate();

  const onAddIncidentContainerClick = useCallback(() => {
    navigate("/add-incident-page");
  }, [navigate]);

  const onPreviousReportsContainerClick = useCallback(() => {
    navigate("/previous-reports-page");
  }, [navigate]);

  const onNextPageImageClick = useCallback(() => {
    navigate("/admin-homepage-2");
  }, [navigate]);

  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#612570_57%,_#87349c)] h-[836px] overflow-hidden text-left text-5xl text-darkslateblue font-inter">
      <img
        className="absolute top-[663px] left-[1131px] w-[391px] h-[218px] overflow-hidden object-contain"
        alt=""
        src="/metro-image@2x.png"
      />
      <div className="absolute h-[58.85%] w-[68.33%] top-[15.31%] right-[15.9%] bottom-[25.84%] left-[15.77%] text-lg text-black">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xl bg-gainsboro" />
        <div className="absolute top-[392px] left-[129px] leading-[25px] inline-block w-[784px] h-[74px]">
          <p className="m-0 font-extrabold text-chocolate">{`Fall Detection Alert `}</p>
          <p className="m-0 font-medium">Entities: 2</p>
          <p className="m-0 font-medium">Location: Northwest Escalator</p>
        </div>
        <img
          className="absolute h-[79.7%] w-full top-[0%] right-[0%] bottom-[20.3%] left-[0%] rounded-t-3xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/video@2x.png"
        />
        <img
          className="absolute top-[18px] left-[18px] w-[98px] h-20 overflow-hidden"
          alt=""
          src="/escalator.svg"
        />
      </div>
      <div className="absolute top-[647px] left-[832px] w-[259px] h-[53px] text-center text-lg text-white">
        <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumseagreen w-[259px] h-[53px]" />
        <div className="absolute top-[0px] left-[0px] flex items-center justify-center w-[259px] h-[53px]">
          Mark as resolved
        </div>
      </div>
      <div className="absolute top-[647px] left-[423px] w-[259px] h-[53px] text-center text-lg text-white">
        <div className="absolute top-[0px] left-[0px] rounded-sm bg-brown w-[259px] h-[53px]" />
        <div className="absolute top-[0px] left-[0px] flex items-center justify-center w-[259px] h-[53px]">
          Call for Assistance
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_418px)] left-[calc(50%_-_737px)] rounded-t-none rounded-b-lg bg-white w-[1474px] h-[47px]" />
      <div className="absolute top-[calc(50%_-_409px)] left-[calc(50%_-_521px)] w-[102px] h-[29px]">
        <img
          className="absolute top-[calc(50%_-_14.5px)] left-[calc(50%_-_51px)] w-[28.7px] h-[29px]"
          alt=""
          src="/home-icon.svg"
        />
        <b className="absolute top-[0px] left-[33px]">Home</b>
      </div>
      <div
        className="absolute top-[calc(50%_-_411px)] left-[calc(50%_-_300px)] w-[221px] h-[29px] cursor-pointer"
        onClick={onAddIncidentContainerClick}
      >
        <img
          className="absolute top-[calc(50%_-_14.5px)] left-[calc(50%_-_110.5px)] w-[28.7px] h-[29px] overflow-hidden"
          alt=""
          src="/add-incident-icon.svg"
        />
        <div className="absolute top-[2px] left-[31px] w-[190px] h-[25px]">
          <div className="absolute top-[0px] left-[0px] inline-block w-[190px] h-[25px]">
            Add Incident
          </div>
        </div>
      </div>
      <div
        className="absolute top-[9px] left-[803px] w-[221px] h-[25px] cursor-pointer"
        onClick={onPreviousReportsContainerClick}
      >
        <div className="absolute top-[0px] left-[31px] w-[190px] h-[25px]">
          <div className="absolute top-[0px] left-[0px] inline-block w-[190px] h-[25px]">
            Previous reports
          </div>
        </div>
        <img
          className="absolute top-[calc(50%_-_11.5px)] left-[calc(50%_-_110.5px)] w-[29px] h-6"
          alt=""
          src="/warning-icon.svg"
        />
      </div>
      <div className="absolute top-[9px] left-[1208px] w-[74px] h-[25.2px]">
        <div className="absolute top-[0px] left-[29px] w-[45px] h-[25px]">
          <div className="absolute top-[0px] left-[0px] inline-block w-[45px] h-[25px]">
            Info
          </div>
        </div>
        <img
          className="absolute h-full w-[33.78%] top-[0%] right-[66.22%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/info-icon.svg"
        />
      </div>
      <img
        className="absolute top-[-6px] left-[60px] w-[59px] h-[59px] object-cover"
        alt=""
        src="/pune-metro-icon@2x.png"
      />
      <div className="absolute top-[164px] left-[369px] bg-purple w-[784px] h-[342px]" />
      <img
        className="absolute top-[368px] left-[1345px] w-[100px] h-[100px] object-cover cursor-pointer"
        alt=""
        src="/next-page@2x.png"
        onClick={onNextPageImageClick}
      />
      <img
        className="absolute top-[368px] left-[75px] w-[100px] h-[100px] object-contain"
        alt=""
        src="/next-page@2x.png"
      />
    </div>
  );
};

export default AdminHomepage3;
