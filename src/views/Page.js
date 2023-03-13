import Logo from "components/Logo/Logo";
import Footer from "components/Footer/Footer";
import HeadingPost from "components/HeadingPost/HeadingPost";
import DemoMenuHorizontal from "components/DemoMenuHorizontal/DemoMenuHorizontal";

import AOS from "aos";
AOS.init();

const Page = function () {
  return (
    <section>
      <>
        <div className="pb-0">
          <div className="spacer-double"></div>
          <div className="container">
            <Logo />
            <div className="spacer-double"></div>
            <HeadingPost text="DEMO SAMPLE PAGE" />
            <div className="spacer-double"></div>
            <div className="row">
              <DemoMenuHorizontal />
            </div>
            <div className="spacer-double"></div>
            <div className="row gh-5">
            </div>
            <div className="spacer-double"></div>
          </div>
          <Footer />
        </div>
      </>
    </section>
  );
};

export default Page;
