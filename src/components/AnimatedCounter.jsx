import { counterItems } from "../constants";
import CountUp from "react-countup";

function AnimatedCounter() {
    return (
        <div className="p-10">
            <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
                <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {counterItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-zinc-900 rounded-lg p-8 flex items-center justify-center"
                        >
                            <div className="counter-number text-white text-5xl font-bold">
                                {item.suffix}
                                <CountUp suffix={item.suffix} end={item.value} />
                            </div>
                            <div className="text-white-50 text-lg ">{item.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AnimatedCounter