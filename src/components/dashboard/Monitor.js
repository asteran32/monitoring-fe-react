import WebRTCStream from "../cards/camera/Steam";

const Monitor = () => {
    return(
        <>
        <div className="container-fluid mt-4">
            {/* head line */}
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Monitor</h1>
            </div>
            {/* main contents */}
            <WebRTCStream />
                    
        </div>
        </>
    )
};

export default Monitor;
