import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const AddIncidentPage = () => {
  const navigate = useNavigate();

  const onPreviousReportsContainerClick = useCallback(() => {
    navigate("/previous-reports-page");
  }, [navigate]);

  const onHomeContainerClick = useCallback(() => {
    navigate("/admin-homepage-1");
  }, [navigate]);

  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#612570_57%,_#87349c)] h-[836px] overflow-hidden text-left text-5xl text-darkslateblue font-inter">
      <div className="absolute top-[533px] left-[897px] w-[259px] h-[53px] text-center text-lg text-white">
        <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumseagreen w-[259px] h-[53px]" />
        <div className="absolute top-[0px] left-[0px] flex items-center justify-center w-[259px] h-[53px]">
          Send Alert
        </div>
      </div>
      <div className="absolute top-[154px] left-[771px] w-[511px] h-[243px] text-center text-lg text-gray-100">
        <img
          className="absolute top-[0px] left-[0px] rounded-[42px] w-[511px] h-[243px]"
          alt=""
          src="/description-box.svg"
        />
        <div className="absolute top-[29px] left-[31px]">
          Write description...
        </div>
      </div>
      <div className="absolute top-[154px] left-[240px] w-[511px] h-[475px] text-center text-lg text-white">
        <img
          className="absolute top-[0px] left-[0px] rounded-3xl w-[511px] h-[475px]"
          alt=""
          src="/video-section.svg"
        />
        <div className="absolute top-[24px] left-[42px] w-[428px] h-[428px] overflow-hidden">
          <img
            className="absolute h-[46.5%] w-[63.32%] top-[19.39%] right-[18.46%] bottom-[34.11%] left-[18.22%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector.svg"
          />
          <div className="absolute h-[12.38%] w-[60.51%] top-[82.94%] right-[18.46%] bottom-[4.67%] left-[21.03%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-darkslateblue" />
            <div className="absolute h-full w-full top-[0%] left-[0%] flex items-center justify-center">
              Select video source
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_418px)] left-[calc(50%_-_737px)] rounded-t-none rounded-b-lg bg-white w-[1474px] h-[47px]" />
      <div className="absolute h-[3.01%] w-[4.86%] top-[1.08%] right-[15.77%] bottom-[95.91%] left-[79.37%]">
        <img
          className="absolute h-full w-[33.78%] top-[0%] right-[66.22%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/info-icon.svg"
        />
        <div className="absolute top-[0px] left-[29px] inline-block w-[45px] h-[25px]">
          Info
        </div>
      </div>
      <div
        className="absolute top-[9px] left-[803px] w-[221px] h-[25px] cursor-pointer"
        onClick={onPreviousReportsContainerClick}
      >
        <div className="absolute top-[0px] left-[31px] inline-block w-[190px] h-[25px]">
          Previous reports
        </div>
        <img
          className="absolute top-[calc(50%_-_11.5px)] left-[calc(50%_-_110.5px)] w-[29px] h-6"
          alt=""
          src="/warning-icon.svg"
        />
      </div>
      <div className="absolute top-[calc(50%_-_411px)] left-[calc(50%_-_300px)] w-[221px] h-[29px]">
        <img
          className="absolute top-[calc(50%_-_14.5px)] left-[calc(50%_-_110.5px)] w-[28.7px] h-[29px] overflow-hidden"
          alt=""
          src="/add-incident-icon.svg"
        />
        <b className="absolute top-[1px] left-[31px] inline-block w-[190px] h-[25px]">
          Add Incident
        </b>
      </div>
      <div
        className="absolute top-[calc(50%_-_409px)] left-[calc(50%_-_521px)] w-[100px] h-[29px] cursor-pointer"
        onClick={onHomeContainerClick}
      >
        <img
          className="absolute top-[calc(50%_-_14.5px)] left-[calc(50%_-_50px)] w-[28.7px] h-[29px] overflow-hidden"
          alt=""
          src="/home-icon.svg"
        />
        <div className="absolute top-[0px] left-[33px]">Home</div>
      </div>
      <img
        className="absolute top-[-6px] left-[60px] w-[59px] h-[59px] object-cover"
        alt=""
        src="/pune-metro-icon@2x.png"
      />
    </div>
  );
};

export default AddIncidentPage;
