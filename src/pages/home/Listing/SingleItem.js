import React from "react";

const SingleItem = ({ data }) => {
  return (
    <div className="col-sm-3 col-xs-12 mb-1">
      <div className="card single_card">
        <div className="p-3">
          <img
            src={data?.links?.mission_patch_small}
            alt=""
            className="image"
          />
          <h1 className="mission_title mb-2">
            {data?.mission_name} # {data?.flight_number}
          </h1>
          {data?.mission_id?.length > 0 ? (
            <>
              <h3 className="mb-2">Misson Ids</h3>
              <ul>
                {data?.mission_id?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </>
          ) : null}
          <h3 className="mb-2">
            Launch year: <span className="value">{data?.launch_year}</span>
          </h3>
          <h3 className="mb-2">
            Successful Launch:{" "}
            <span className="value">{data?.launch_success.toString()}</span>
          </h3>{" "}
          <h3 className="mb-2">
            Successful Landing:{" "}
            <span className="value">
              {data?.rocket?.first_stage?.cores[0]?.land_success
                ? data?.rocket?.first_stage?.cores[0]?.land_success?.toString()
                : "false"}
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
