import arcgis_enterprise from "../assets/skills/ArcGIS-Enterprise.png";
import arcgis_quickcapture from "../assets/skills/arcgis-quickcapture.png";
import arcgis_online from "../assets/skills/arcgis-online.svg";
import survey123 from "../assets/skills/survey123.svg";
import arcmap from "../assets/skills/arcMap.png";
import arcgis_workforce from "../assets/skills/arcgis-workforce.png";
import arcgis_fieldmaps from "../assets/skills/arcgis-fieldmaps.png";
import arcgis_dashboards from "../assets/skills/arcgis-dashboards.png";
import qgis from "../assets/skills/qgis.svg";
import { VscVscode } from "react-icons/vsc";
import { TbSql } from "react-icons/tb";
import {
  SiArcgis,
  SiBulma,
  SiJquery,
  SiMicrosoftsqlserver,
  SiOracle,
  SiTailwindcss,
} from "react-icons/si";
import {
  FaBootstrap,
  FaChrome,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSquareJs,
} from "react-icons/fa6";

function Skills() {
  return (
    <section className="section">
      <div className="divider is-size-5">Skills</div>
      <div className="container has-text-centered">
        <div
          data-aos="flip-left"
          className="columns is-desktop pt-2 is-flex-direction-row is-justify-content-space-between is-align-content-center is-align-items-center"
        >
          <div className="column p-2">
            <FaHtml5 className="is-size-2 has-text-danger-50" />
            <p className="mt-2 has-text-weight-semibold">HTML</p>
          </div>
          <div className="column p-2">
            <FaCss3Alt className="is-size-2 has-text-link" />
            <p className="mt-2 has-text-weight-semibold">CSS</p>
          </div>
          <div className="column p-2">
            <FaSquareJs className="is-size-2 has-text-warning" />
            <p className="mt-2 has-text-weight-semibold">JavaScript</p>
          </div>
          <div className="column p-2">
            <SiJquery className="is-size-2 has-text-link-40" />
            <p className="mt-2 has-text-weight-semibold">JQuery</p>
          </div>
          <div className="column sp-2">
            <FaPython className="is-size-2 has-text-info" />
            <p className="mt-2 has-text-weight-semibold">Python</p>
          </div>
          <div className="column p-2">
            <TbSql className="is-size-2 has-text-warning" />
            <p className="mt-2 has-text-weight-semibold">SQL</p>
          </div>
          <div className="column p-2">
            <FaBootstrap className="is-size-2 has-text-link-100-invert" />
            <p className="mt-2 has-text-weight-semibold">Bootstrap</p>
          </div>
          <div className="column p-2">
            <SiBulma className="is-size-2 has-text-primary-45" />
            <p className="mt-2 has-text-weight-semibold">Bulma CSS</p>
          </div>
          <div className="column p-2">
            <SiTailwindcss className="is-size-2 has-text-info-45" />
            <p className="mt-2 has-text-weight-semibold">Tailwind CSS</p>
          </div>
        </div>

        <div
          data-aos="flip-up"
          className="columns is-desktop pt-2 is-flex-direction-row is-justify-content-space-between is-align-content-center is-align-items-center"
        >
          <div className="column p-2">
            <FaGitAlt className="is-size-2 has-text-danger" />
            <p className="mt-2 has-text-weight-semibold">Git</p>
          </div>
          <div className="column p-2">
            <FaGithub className="is-size-2 has-text-dark" />
            <p className="mt-2 has-text-weight-semibold">GitHub</p>
          </div>
          <div className="column p-2">
            <FaChrome className="is-size-2 has-text-info" />
            <p className="mt-2 has-text-weight-semibold">Chrome Dev Tools</p>
          </div>
          <div className="column p-2">
            <FaReact className="is-size-2 has-text-info-50" />
            <p className="mt-2 has-text-weight-semibold">React JS</p>
          </div>
          <div className="column p-2">
            <FaNodeJs className="is-size-2 has-text-primary-20" />
            <p className="mt-2 has-text-weight-semibold">Node JS</p>
          </div>
          <div className="column p-2">
            <SiMicrosoftsqlserver className="is-size-2 has-text-danger-100-invert" />
            <p className="mt-2 has-text-weight-semibold">MS SQL Server</p>
          </div>
          <div className="column p-2">
            <SiOracle className="is-size-2 has-text-danger" />
            <p className="mt-2 has-text-weight-semibold">
              Oracle SQL Developer
            </p>
          </div>
          <div className="column p-2">
            <VscVscode className="is-size-2 has-text-link" />
            <p className="mt-2 has-text-weight-semibold">VS Code</p>
          </div>

          <div className="column p-2">
            <img width="36px" src={arcmap} alt="ArcMap / ArcGIS Desktop" />
            <p className="mt-2 has-text-weight-semibold">ArcGIS Desktop</p>
          </div>
        </div>

        <div
          data-aos="flip-right"
          className="columns is-desktop pt-2 is-flex-direction-row is-justify-content-space-between is-align-content-center is-align-items-center"
        >
          <div className="column p-2">
            <SiArcgis className="is-size-2 has-text-link" />
            <p className="mt-2 has-text-weight-semibold">ArcGIS Pro</p>
          </div>
          <div className="column p-2">
            <img width="36px" src={arcgis_enterprise} alt="ArcGIS Enterprise" />
            <p className="mt-2 has-text-weight-semibold">ArcGIS Enterprise</p>
          </div>
          <div className="column p-2">
            <img width="36px" src={arcgis_online} alt="ArcGIS Online" />
            <p className="mt-2 has-text-weight-semibold">ArcGIS Online</p>
          </div>
          <div className="column p-2">
            <img width="36px" src={survey123} alt="ArcGIS Online" />
            <p className="mt-2 has-text-weight-semibold">Survey123</p>
          </div>
          <div className="column p-2">
            <img
              width="36px"
              src={arcgis_quickcapture}
              alt="ArcGIS Quick Capture"
            />
            <p className="mt-2 has-text-weight-semibold">Quick Capture</p>
          </div>
          <div className="column p-2">
            <img width="36px" src={arcgis_fieldmaps} alt="ArcGIS Fieldmaps" />
            <p className="mt-2 has-text-weight-semibold">Fieldmaps</p>
          </div>
          <div className="column p-2">
            <img width="36px" src={arcgis_workforce} alt="ArcGIS Workforce" />
            <p className="mt-2 has-text-weight-semibold">Workforce</p>
          </div>
          <div className="column p-2">
            <img width="36px" src={arcgis_dashboards} alt="ArcGIS Dashboards" />
            <p className="mt-2 has-text-weight-semibold">Dashboards</p>
          </div>
          <div className="column p-2">
            <img width="36px" src={qgis} alt="QGIS" />
            <p className="mt-2 has-text-weight-semibold">QGIS</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
