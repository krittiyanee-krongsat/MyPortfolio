import BallCanvas from "./Ball";
import SectionWrapper from "./SectionWrapper";
import { technologies } from "../../constants";


const Tech = () => {
  return (
    // กล่องจัด layout ให้เรียงเป็นแถว และขึ้นบรรทัดใหม่ได้
    <div className="flex flex-row flex-wrap justify-center gap-10">
        {/* วนลูป technologies แล้วสร้างลูกบอลแต่ละอัน */}
        {technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
                {/* ส่ง icon เข้าไปให้ BallCanvas */}
                <BallCanvas icon={technology.icon}/>
            </div>
        ))}
    </div>
  );
};
// เอา Tech ไปครอบด้วย SectionWrapper (ใส่ animation + layout)
export default SectionWrapper(Tech, "");