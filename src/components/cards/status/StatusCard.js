import React from "react";

const stateItem = [
    { name: "Status", value: "Normal" },
    { name: "alarms", value: "7" },
    { name: "Status", value: "Warning" },
    { name: "alarms", value: "Dangers" },

];

const StatusCard = () => {
    return(
        <div className="row">
            {stateItem.map((item, index) => (
                <div className="col-xl-3 col-md-6 mb-4" key={index}>
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs text-primary text-uppercase mb-1">
                                        {item.name}
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        {item.value}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatusCard;