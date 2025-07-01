import Lottie from "lottie-react";
import loadingAnimation from "../../../assets/loading.json";

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <Lottie animationData={loadingAnimation} loop={true} className="w-40 h-40" />
        </div>
    );
};

export default Loading;