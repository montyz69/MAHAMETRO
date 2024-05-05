import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const PreviousReportsPage = () => {
  const navigate = useNavigate();

  const onAddIncidentContainerClick = useCallback(() => {
    navigate("/add-incident-page");
  }, [navigate]);

  const onHomeContainerClick = useCallback(() => {
    navigate("/admin-homepage-1");
  }, [navigate]);

  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#612570_57%,_#87349c)] h-[836px] overflow-hidden text-left text-5xl text-darkslateblue font-inter">
      <div className="absolute h-[31.58%] w-[68.33%] top-[50%] right-[15.9%] bottom-[18.42%] left-[15.77%] text-lg text-black">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xl bg-gainsboro" />
        <div className="absolute top-[203px] left-[770px] w-[263px] h-[53px] text-center text-white">
          <div className="absolute top-[0px] left-[4px] rounded-sm bg-deepskyblue w-[259px] h-[53px]" />
          <div className="absolute top-[0px] left-[0px] flex items-center justify-center w-[259px] h-[53px]">
            See details
          </div>
        </div>
        <div className="absolute top-[217px] left-[14px] inline-block w-[708px] h-[47px]">
          2 laadies fell from the escalator near gate 2, platform 1
        </div>
        <img
          className="absolute h-[79.7%] w-full top-[0%] right-[0%] bottom-[20.3%] left-[0%] rounded-t-3xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/video@2x.png"
        />
        <div className="absolute top-[8px] left-[916px] font-fira-code inline-block w-[113px]">
          <p className="m-0">23/03/2024</p>
          <p className="m-0">16:40</p>
        </div>
        <img
          className="absolute top-[9px] left-[9px] w-[79px] h-[65px] overflow-hidden"
          alt=""
          src="/escalator-icon.svg"
        />
      </div>
      <div className="absolute h-[31.58%] w-[68.33%] top-[86.36%] right-[15.9%] bottom-[-17.94%] left-[15.77%] text-lg text-black">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xl bg-gainsboro" />
        <div className="absolute top-[203px] left-[770px] w-[263px] h-[53px] text-center text-white">
          <div className="absolute top-[0px] left-[4px] rounded-sm bg-deepskyblue w-[259px] h-[53px]" />
          <div className="absolute top-[0px] left-[0px] flex items-center justify-center w-[259px] h-[53px]">
            See details
          </div>
        </div>
        <div className="absolute top-[217px] left-[14px] inline-block w-[708px] h-[47px]">
          2 laadies fell from the escalator near gate 2, platform 1
        </div>
        <img
          className="absolute h-[79.7%] w-full top-[0%] right-[0%] bottom-[20.3%] left-[0%] rounded-t-3xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/video@2x.png"
        />
        <div className="absolute top-[8px] left-[916px] font-fira-code inline-block w-[113px]">
          <p className="m-0">23/03/2024</p>
          <p className="m-0">16:40</p>
        </div>
        <img
          className="absolute top-[9px] left-[9px] w-[79px] h-[65px] overflow-hidden"
          alt=""
          src="/escalator-icon.svg"
        />
      </div>
      <div className="absolute h-[31.58%] w-[68.33%] top-[13.64%] right-[15.9%] bottom-[54.78%] left-[15.77%] text-lg text-black">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xl bg-gainsboro" />
        <div className="absolute top-[203px] left-[770px] w-[263px] h-[53px] text-center text-white">
          <div className="absolute top-[0px] left-[4px] rounded-sm bg-deepskyblue w-[259px] h-[53px]" />
          <div className="absolute top-[0px] left-[0px] flex items-center justify-center w-[259px] h-[53px]">
            See details
          </div>
        </div>
        <div className="absolute top-[217px] left-[14px] inline-block w-[708px] h-[47px]">
          2 laadies fell from the escalator near gate 2, platform 1
        </div>
        <img
          className="absolute h-[79.7%] w-full top-[0%] right-[0%] bottom-[20.3%] left-[0%] rounded-t-3xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/video@2x.png"
        />
        <div className="absolute top-[8px] left-[916px] font-fira-code inline-block w-[113px]">
          <p className="m-0">23/03/2024</p>
          <p className="m-0">16:40</p>
        </div>
        <img
          className="absolute top-[9px] left-[9px] w-[79px] h-[65px] overflow-hidden"
          alt=""
          src="/escalator-icon.svg"
        />
      </div>
      <div className="absolute top-[calc(50%_-_418px)] left-[calc(50%_-_737px)] rounded-t-none rounded-b-lg bg-white w-[1474px] h-[47px]" />
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
      <div className="absolute top-[9px] left-[803px] w-[270px] h-[25px]">
        <b className="absolute top-[0px] left-[31px] inline-block w-[239px] h-[25px]">
          Previous reports
        </b>
        <img
          className="absolute top-[calc(50%_-_11.5px)] left-[calc(50%_-_135px)] w-[29px] h-6"
          alt=""
          src="/warning-icon.svg"
        />
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
        <div className="absolute top-[2px] left-[31px] inline-block w-[190px] h-[25px]">
          Add Incident
        </div>
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

export default PreviousReportsPage;
