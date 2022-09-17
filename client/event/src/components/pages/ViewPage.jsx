import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSortDate, showAllData } from "../Redux/action";
import { filterData } from "../Redux/action";
import RegionFilter from "../FilterTags/RegionFilter";
import { useSearchParams } from "react-router-dom";
import DateFilter from "../FilterTags/DateFilter";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
import styled from "../style/Style.module.css";
import Loder from "./Loder";
const ViewPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.data);
  const [param, setParam] = useSearchParams();
  const [EventRegion, setRegion] = useState(param.get("EventRegion") || "");
  const [EventType, setEventType] = useState(param.get("EventType") || "");
  const [StartDate, setStartDate] = useState(param.get("StartDate") || "");
  const [EndDate, setEndDate] = useState(param.get("EndDate") || "");
  const [startSort, setStartSort] = useState(false);
  const [endSort, setEndSort] = useState(false);
  const regions = [
    "North Bangalore",
    "South Bangalore",
    "Central Bangalore",
    "East Bangalore",
  ];
  const EventTypes = [
    "Entertainment",
    "Spiritual",
    "Professional",
    "Political",
    "Sports",
  ];

  const handleChangeSelecte = () => {
    dispatch(
      filterData({ EventType, EventRegion, StartDate, EndDate }, setParam)
    );
  };
  useEffect(() => {
    handleChangeSelecte();
    // dispatch(showAllData());
  }, []);
  const state1 = useSelector((state) => state.isLoading);
  if (state1) {
    return <Loder />;
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          gap: "2%",
        }}
      >
        <RegionFilter
          setvalue={setRegion}
          value={EventRegion}
          data={regions}
          name={"EventRegion"}
        />
        <RegionFilter
          setvalue={setEventType}
          value={EventType}
          data={EventTypes}
          name={"EventTypes"}
        />

        <DateFilter
          startDateFilter={StartDate}
          date={"start date"}
          setStartDateFilter={setStartDate}
        />
        <DateFilter
          startDateFilter={EndDate}
          date={"end date"}
          setStartDateFilter={setEndDate}
        />
        <div>
          <button className={styled.btn} onClick={handleChangeSelecte}>
            Filter
          </button>
        </div>
        <div>
          <button
            className={styled.btn}
            onClick={() => {
              dispatch(showAllData());
              setRegion("");
              setEventType("");
              setParam({});
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <table border="1" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>EventName</th>
            <th>
              StartDate
              {startSort ? (
                <AiOutlineArrowDown
                  className={styled.arrow1}
                  onClick={() =>
                    dispatch(
                      handleSortDate("StartDate", startSort, setStartSort)
                    )
                  }
                />
              ) : (
                <AiOutlineArrowUp
                  className={styled.arrow1}
                  onClick={() =>
                    dispatch(
                      handleSortDate("StartDate", startSort, setStartSort)
                    )
                  }
                />
              )}
            </th>
            <th>
              EndDate
              {endSort ? (
                <AiOutlineArrowDown
                  className={styled.arrow1}
                  onClick={() =>
                    dispatch(handleSortDate("EndDate", endSort, setEndSort))
                  }
                />
              ) : (
                <AiOutlineArrowUp
                  className={styled.arrow1}
                  onClick={() =>
                    dispatch(handleSortDate("EndDate", endSort, setEndSort))
                  }
                />
              )}
            </th>
            <th>EventRegion</th>
            <th>EventType</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>
          {state.map((el, i) => {
            return (
              <tr key={i}>
                <td>{el.EventName}</td>
                <td>{el.StartDate}</td>
                <td>{el.EndDate}</td>
                <td>{el.EventRegion}</td>
                <td>{el.EventType}</td>
                <td>
                  {el?.Tags?.map((el, i) => {
                    return <span key={i}>{el}, </span>;
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ViewPage;
