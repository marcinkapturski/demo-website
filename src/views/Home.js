import Logo from "components/Logo/Logo";
import Footer from "components/Footer/Footer";
import HeadingPost from "components/HeadingPost/HeadingPost";
import DemoMenuHorizontal from "components/DemoMenuHorizontal/DemoMenuHorizontal";
import DemoButtonStates from "components/DemoButtonStates/DemoButtonStates";
import DemoProductOrderForm from "components/DemoProductOrderForm/DemoProductOrderForm";
import DemoStepsProcessing from "components/DemoStepsProcessing/DemoStepsProcessing";
import DemoAutoComplete from "components/DemoAutoComplete/DemoAutoComplete";
import DemoTransfer from "components/DemoTransfer/DemoTransfer";
import DemoActionButtons from "components/DemoActionButtons/DemoActionButtons";

import AOS from "aos";
AOS.init();

const Home = function () {
  return (
    <section>
      <>
        <div className="pb-0">
          <div className="spacer-double"></div>
          <div className="container">
            <Logo />
            <div className="spacer-double"></div>
            <HeadingPost text="DEMO COMPONENTS" />
            <div className="spacer-double"></div>
            <div className="row">
              <DemoMenuHorizontal />
            </div>
            <div className="spacer-double"></div>
            <div className="row gh-5">
              <div className="col-lg-6" data-aos="fade-up" data-aos-once="true">
                <div className="p-4">
                  <h3 className="s_border">Demo Form</h3>
                  <ul className="d_timeline">
                    <li className="d_timeline-item">
                      <h3 className="d_timeline-title">Product order</h3>
                      <DemoProductOrderForm />
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-once="true">
                <div className="p-4">
                  <ul className="d_timeline">
                    <li className="d_timeline-item">
                      <h3 className="d_timeline-title">Steps processing</h3>
                      <DemoStepsProcessing />
                    </li>
                    <li className="d_timeline-item">
                      <h3 className="d_timeline-title">Autocomplete</h3>
                      <DemoAutoComplete />
                    </li>
                    <li className="d_timeline-item">
                      <h3 className="d_timeline-title">Search & Transfer</h3>
                      <DemoTransfer />
                    </li>
                    <li className="d_timeline-item">
                      <h3 className="d_timeline-title">States</h3>
                      <DemoButtonStates />
                    </li>
                    <li className="d_timeline-item">
                      <h3 className="d_timeline-title">Actions</h3>
                      <DemoActionButtons />
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="spacer-double"></div>
          </div>
          <Footer />
        </div>
      </>
    </section>
  );
};

export default Home;
