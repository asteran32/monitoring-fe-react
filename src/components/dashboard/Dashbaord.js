import StatusCard from '../cards/status/StatusCard';
import OpcuaClient from '../cards/sensor/OpcuaClient';
import GltfCards from '../cards/model/Gltf';

const Dashboard = () => {
    return(
        <>
            <div className="container-fluid mt-4">
                {/* head line */}
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                </div>
                {/* main contents */}
                <StatusCard />
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                    <GltfCards />
                    </div>
                    <div className="col-md-6 col-sm-12">
                    <OpcuaClient />
                    </div>
                </div>
            </div>
        </>
    )

};

export default Dashboard;