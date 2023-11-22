// 코드 인덱싱?
// 로컬에서 함수, 컴포넌트 등을 불러올 때 경로 일일히 지정하기 번거로움
// 따라서 index.js 파일 하나에서 모두 볼러오고, 실제 사용할 때는 index.js에 있는 컴포넌트를 불러옴

import ScreenHeaderBtn from "./common/header/ScreenHeaderBtn";
import Welcome from "./home/welcome/Welcome";

import Nearbyjobs from "./home/nearby/Nearbyjobs";
import Popularjobs from "./home/popular/Popularjobs";

import Company from "./jobdetails/company/Company";
import About from "./jobdetails/about/About";
import Footer from "./jobdetails/footer/Footer";
import Specifics from "./jobdetails/specifics/Specifics";
import Tabs from "./jobdetails/tabs/Tabs";

export {
    ScreenHeaderBtn,
    Welcome,
    Popularjobs,
    Nearbyjobs,
    Company,
    About,
    Footer,
    Specifics,
    Tabs,
}