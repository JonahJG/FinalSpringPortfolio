import { IoLogoJavascript } from "react-icons/io";
import { useState } from "react";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "gray",
    width: 600,
    height: 100,
  },
};

function Portfolio() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div id="portfolio" className="portfolio">
      <section className="tab">
        <button className="tab1">
          <IoLogoJavascript className="java" />
          <p className="tab1text">Portfolio.js</p>
        </button>
        {/* <button className="tab2">
          <IoLogoJavascript className="java" />
          <p className="tab2text">Projects.js</p>
        </button> */}
        <button onClick={setModalOpen} className="tab3">
          <IoLogoJavascript className="java" />
          <p className="tab3text">Info.js</p>
        </button>
        <section className="modal">
          <Modal
            isOpen={modalOpen}
            onRequestClose={() => setModalOpen(false)}
            style={customStyles}
          >
            <section>
              This portfolio is a work in progress. This is the progress as of
              April 19, 2023. This portfolio will continue to be updated as time
              goes on - especially getting around to styling this modal a lot
              better. <br />
              Contact me at Jonah.Greening@Keyin.com
            </section>

            <button onClick={() => setModalOpen(false)}>Close</button>
          </Modal>
        </section>
      </section>

      <p className="numbers">
        1
        <span className="portfoliotext">
          <span style={{ color: "#BC89BD" }}>import</span>{" "}
          <span style={{ color: "#AADAFA" }}>Portfolio</span>{" "}
          <span style={{ color: "#BC89BD" }}>from</span>{" "}
          <span style={{ color: "#C1917A" }}>'skills-and-knowledge'</span>
          <span style={{ color: "white" }}>;</span>
        </span>
        <br />2
        <span className="portfoliotext">
          <span style={{ color: "#BC89BD" }}>import</span>{" "}
          <span style={{ color: "#DDBF43" }}>{"{ "}</span>
          <span style={{ color: "#AADAFA" }}>useState</span>
          <span style={{ color: "white" }}>,</span>
          {""} <span style={{ color: "#AADAFA" }}>useEffect</span>
          <span style={{ color: "#DDBF43" }}>{" }"}</span>{" "}
          <span style={{ color: "#BC89BD" }}>from</span>{" "}
          <span style={{ color: "#C1917A" }}>'react'</span>
          <span style={{ color: "white" }}>;</span>
        </span>
        <br />
        3
        <br />4
        <span className="portfoliotext">
          <span style={{ color: "#679ad1" }}>function</span>{" "}
          <span style={{ color: "#d2d2a7" }}>Portfolio</span>
          <span style={{ color: "#DDBF43" }}>{"() {"}</span>
        </span>
        <br />5
        <span className="portfoliotext">
          <span style={{ color: "#679ad1" }}>const</span>{" "}
          <span style={{ color: "#cc76d1" }}>[</span>
          <span style={{ color: "#68b2e6" }}>notAMediocreIdea</span>
          <span style={{ color: "white" }}>, </span>
          <span style={{ color: "#d2d2a7" }}>setNotAMediocreIdea</span>
          <span style={{ color: "#cc76d1" }}>]</span>
          <span style={{ color: "white" }}> = </span>
          <span style={{ color: "#d2d2a7" }}>useState</span>
          <span style={{ color: "#cc76d1" }}>('')</span>
          <span style={{ color: "white" }}>;</span>
        </span>
        <br />6
        <span className="portfoliotext">
          <span style={{ color: "#d2d2a7" }}>useEffect</span>
          <span style={{ color: "#cc76d1" }}>(</span>
          <span style={{ color: "#4896ed" }}>{"("}</span>
          <span style={{ color: "#4896ed" }}>{")"}</span>
          <span style={{ color: "#4896ed" }}>{" =>"}</span>
          <span style={{ color: "#4896ed" }}>{" {"}</span>
        </span>
        <br />7
        <span className="portfoliotext">
          <span style={{ color: "#d2d2a7" }}>fetch</span>
          <span style={{ color: "#DDBF43" }}>(</span>
          <span style={{ color: "#c1917a" }}>'brain/idea'</span>
          <span style={{ color: "#DDBF43" }}>)</span>
        </span>
        <br />8
        <span className="portfoliotext">
          <span style={{ color: "white" }}>.</span>
          <span style={{ color: "#d2d2a7" }}>then</span>
          <span style={{ color: "#ddbf43" }}>(</span>
          <span style={{ color: "#aadafa" }}>response</span>
          <span style={{ color: "#4896ed" }}> {"=>"} </span>
          <span style={{ color: "#aadafa" }}>response</span>
          <span style={{ color: "white" }}>.</span>
          <span style={{ color: "#d2d2a7" }}>text</span>
          <span style={{ color: "#cc76d1" }}>(</span>
          <span style={{ color: "#cc76d1" }}>)</span>
          <span style={{ color: "#DDBF43" }}>)</span>
          <span style={{ color: "white" }}>;</span>
        </span>
        <br />9
        <span className="portfoliotext">
          <span style={{ color: "white" }}>.</span>
          <span style={{ color: "#d2d2a7" }}>then</span>
          <span style={{ color: "#ddbf43" }}>(</span>
          <span style={{ color: "#aadafa" }}>data</span>
          <span style={{ color: "#4896ed" }}> {"=>"} </span>
          <span style={{ color: "#d2d2a7" }}>setNotAMediocreIdea</span>
          <span style={{ color: "#cc76d1" }}>(</span>
          <span style={{ color: "#aadafa" }}>data</span>
          <span style={{ color: "#cc76d1" }}>)</span>
          <span style={{ color: "#ddbf43" }}>)</span>
          <span style={{ color: "white" }}>;</span>
        </span>
        <br />
        10
        <span className="portfoliotext">
          <span style={{ color: "#4896ed" }}> {"}"}</span>
          <span style={{ color: "white" }}>, </span>
          <span style={{ color: "#4896ed" }}> []</span>
          <span style={{ color: "#cc76d1" }}>)</span>
          <span style={{ color: "white" }}>;</span>
        </span>
        <br />
        11 <br />
        12
        <span className="portfoliotext">
          <span style={{ color: "#4896ed" }}>function</span>{" "}
          <span style={{ color: "#d2d2a7" }}>softwareDeveloper</span>
          <span style={{ color: "#cc76d1" }}>() {"{"}</span>
        </span>
        <br />
        13
        <span className="portfoliotext">
          <span style={{ color: "#4896ed" }}>const Introduction</span>
          <span style={{ color: "white" }}> =</span>
        </span>
        <br />
        14
        <span className="portfoliotext">
          <span style={{ color: "white" }}>
            “Jonah Greening is a budding software development student at Keyin
            College, currently in his second semester.{" "}
          </span>
        </span>
        <br />
        15
        <span className="portfoliotext">
          <span style={{ color: "white" }}>
            {" "}
            He strives to continue to learn and grow as a developer, and push
            the limits of his knowledge and skill daily."{" "}
          </span>
        </span>
        <br />
        <span className="portfoliotext">
          <span style={{ color: "white" }}>
            {" "}
            He strives to continue to learn and grow as a developer, and push
            the limits of his knowledge and skill daily."{" "}
          </span>
        </span>
        <br />
        16
        <span className="portfoliotext">
          <span style={{ color: "white" }}>
            {" "}
            His work can be found at www.github.com/JonahJG"{" "}
          </span>
        </span>
        <br />
        17
        <span className="portfoliotext">
          <span style={{ color: "#cc76d1" }}>)</span>
          <span style={{ color: "#ffffff" }}>;</span>
        </span>
        <br />
        18 <br />
        19
        <span className="portfoliotext">
          <span style={{ color: "#cc76d1" }}>{"return ("}</span>
        </span>
        <br />
        20
        <span className="portfoliotext">
          <span style={{ color: "#757575" }}>{"<"}</span>
          <span style={{ color: "#679ad1" }}>div</span>
          <span style={{ color: "#757575" }}>{"/>"}</span>
        </span>
        <br />
        21
        <span className="portfoliotext">
          <span style={{ color: "#757575" }}>{"<"}</span>
          <span style={{ color: "#679ad1" }}>h1</span>
          <span style={{ color: "#757575" }}>{">"}</span>
          <span style={{ color: "#4896ed" }}>{"{"}</span>
          <span style={{ color: "#68b2e6" }}>notAMediocreIdea</span>
          <span style={{ color: "#4896ed" }}>{"}"}</span>
          <span style={{ color: "#757575" }}>{"<"}</span>
          <span style={{ color: "#757575" }}>{"/"}</span>
          <span style={{ color: "#679ad1" }}>h1</span>
          <span style={{ color: "#757575" }}>{">"}</span>
        </span>
        <br />
        22
        <span className="portfoliotext">
          <span style={{ color: "#757575" }}>{"<"}</span>
          <span style={{ color: "#679ad1" }}>h1</span>
          <span style={{ color: "#757575" }}>{">"}</span>
          <span style={{ color: "#d2d2a7" }}>softwareDeveloper</span>
          <span style={{ color: "#ddbf43" }}>(</span>
          <span style={{ color: "#ddbf43" }}>)</span>
          <span style={{ color: "#4896ed" }}>{"}"}</span>
          <span style={{ color: "#757575" }}>{"<"}</span>
          <span style={{ color: "#757575" }}>{"/"}</span>
          <span style={{ color: "#679ad1" }}>p</span>
          <span style={{ color: "#757575" }}>{">"}</span>
        </span>
        <br />
        23
        <span className="portfoliotext">
          <span style={{ color: "#757575" }}>{"<"}</span>
          <span style={{ color: "#679ad1" }}>div</span>
          <span style={{ color: "#757575" }}>{"/>"}</span>
        </span>
        <br />
        24
        <span className="portfoliotext">
          <span style={{ color: "#cc76d1" }}>)</span>
          <span style={{ color: "#ffffff" }}>;</span>
        </span>
        <br />
        25
        <span className="portfoliotext">
          <span style={{ color: "#ddbf43" }}>{"}"}</span>
        </span>
        <br />
        26
        <span className="portfoliotext">
          <span style={{ color: "#cc76d1" }}>export default</span>
          <span style={{ color: "#d2d2a7" }}> Portfolio</span>
          <span style={{ color: "white" }}>;</span>
        </span>
        <br />
        27 <br />
        28 <br />
      </p>
    </div>
  );
}

export default Portfolio;
