import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Flying_Bus_Robot_Car_Transfom from "../../Assets/Projects/Flying Bus Robot Car Transfom.png";
import Police_Cargo_Truck_Offroad_3D from "../../Assets/Projects/Police Cargo Truck Offroad 3D.png";
import Fire_Grand_Battle_Royale from "../../Assets/Projects/Fire Grand Battle Royale.png";
import FPS_Commando_Shooting_Strike from "../../Assets/Projects/FPS Commando Shooting Strike.png";
import Shooter_Games from "../../Assets/Projects/Shooter Games 3D.png";
import Assassin from "../../Assets/Projects/Assassin.png";
import TripleMatch from "../../Assets/Projects/TripleMatch.png";
import TapAway from "../../Assets/Projects/TapAway.png";
import DriveCar from "../../Assets/Projects/DriveCar.png";
import SpiderRobot from "../../Assets/Projects/Spider Robot Car Transform.png";
import Counter_Terrorist_Shooting from "../../Assets/Projects/Counter Terrorist Shooting.png";
import FruitMerge from "../../Assets/Projects/FruiteMerge.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Fire_Grand_Battle_Royale}
              isBlog={false}
              title= <strong className="purple">Fire Grand Battle Royale </strong>
              description="This game delivers stunning 3D open-world environments,from dense forests and desert wastelands to neon-lit cityscapes,complete with realistic sound design. Engage solo, duo, or squad modes using a variety of vehicles (bikes, cars, helicopters) and real-feeling weapons, plus unique abilities like deployable drones, energy shields, and turrets. Experience dynamic gameplay with secret loot crates, shrinking safe zones, and multiple mission types for endless replayability."
              demoLink="https://play.google.com/store/apps/details?id=com.battleroyale.offlinegames.fortbattle.crazygames"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Shooter_Games}
              isBlog={false}
              title= <strong className="purple">Shooter Games 3D</strong>
              description="Experience a massive open-world gangster crime simulation with high quality 3D graphics, dynamic environments, and immersive missions.Drive a wide range of vehicles including bikes, supercars, and helicopters while battling rival gangs and escaping intense police chases. Enjoy action packed gunfights with realistic weapons, mafia boss missions, and thrilling survival gameplay all in a free offline MMO-style experience."
              demoLink="https://play.google.com/store/apps/details?id=com.cb.gangster.crime.game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FPS_Commando_Shooting_Strike}
              isBlog={false}
              title= <strong className="purple">FPS Commando Shooting Strike </strong>
              description="Engage in intense offline FPS action with bomb disposal missions, tactical combat, and multiple game modes in FPS Gun Strike. Play as a commando in city-based environments, facing off against enemy squads using a variety of weapons. Enjoy smooth controls, powerful upgrades and a fast-paced shooting experience"
              demoLink="https://play.google.com/store/apps/details?id=com.inferno.real.commando.CT.FPS.Shooting.Games"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Assassin}
              isBlog={false}
              title= <strong className="purple">Assassin Sniper Shooter 3D</strong>
              description="This game offers high quality environments, realistic sniper rifles, and a diverse cast of customizable characters. Players can enjoy smooth gun shooting controls and an immersive offline experience with thrilling missions and zombie survival modes. With powerful weapon upgrades and strategic gameplay, it's the ultimate sniper challenge for fans of gun games 3D."
              demoLink="https://play.google.com/store/apps/details?id=com.ags.assassinsnipershooter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Flying_Bus_Robot_Car_Transfom}
              isBlog={false}
              title= <strong className="purple">Flying Bus Robot Car Transform</strong>
              description="Robot Transforming Game offers thrilling multi-mode gameplay with flying, shooting, and MECH combat. Enjoy unique bus and car robot transformations, each equipped with powerful futuristic abilities. Experience smooth controls, dynamic environments, and intense battles against lethal robot enemies."
              demoLink="https://play.google.com/store/apps/details?id=com.inferno.hammer.robot.bus.game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Police_Cargo_Truck_Offroad_3D}
              isBlog={false}
              title= <strong className="purple">Police Cargo Truck Offroad 3D</strong>
              description="Our Police Cargo Transport game features a massive open environment designed specifically for immersive truck driving missions. Players can choose from a variety of trucks while enjoying realistic controls and smooth driving mechanics. To add more challenge and engagement, the game also includes bonus car parking missions after each successful cargo delivery."
              demoLink="https://play.google.com/store/apps/details?id=com.md.prisoner.transporter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TripleMatch}
              isBlog={false}
              title= <strong className="purple">Triple Match Car Merge</strong>
              description="This game delivers a visually rich 3D car matching experience with detailed graphics and intuitive controls designed for all ages. Its progressively challenging levels offer strategic gameplay that keeps players engaged and thinking. With high replay value and a vast variety of puzzles, it’s the ultimate car themed match game for puzzle lovers."
              demoLink="https://play.google.com/store/apps/details?id=com.ags.TripleMatchCarMaster"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TapAway}
              isBlog={false}
              title= <strong className="purple">knife Jam: Tap Away</strong>
              description="This is puzzle game. hit the enemy who's color is matching with knife. Kill all enemies to complete the level. Just tap the right knife."
              demoLink="https://play.google.com/store/apps/details?id=com.ags.KnifeJam.tap.away"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DriveCar}
              isBlog={false}
              title= <strong className="purple">Drive Car Simulator </strong>
              description="Game offers over 25 vehicles with realistic physics and diverse drivers, letting players test their skills across drift, fun play, and arcade modes. The game features an expansive open-world environment filled with lifelike traffic and dynamic challenges. With frequent updates, polished graphics, and engaging driving mechanics, it’s a complete driving sim experience for car enthusiasts."
              demoLink="https://play.google.com/store/apps/details?id=com.AvariGameStudio.DriveCarSimulator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FruitMerge}
              isBlog={false}
              title= <strong className="purple">Fruit Merge Crush</strong>
              description="Merge puzzle experience with intuitive drop mechanics and vibrant fruit animations that keep players engaged for hours. With over 2048 thoughtfully designed levels and smooth gameplay, it challenges both casual players and puzzle pros alike."
              demoLink="https://play.google.com/store/apps/details?id=com.ags.FruitMergeCrush2048"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SpiderRobot}
              isBlog={false}
              title= <strong className="purple">Spider Robot Car Transform</strong>
              description="Game delivers a stunning environment crafted specifically for crab robot action. Players can unlock multiple hero powers and enjoy the smoothest combat controls in transforming robot games. Dive into intense robot battles featuring jet robots, monster trucks, and futuristic enemies for a thrilling gameplay experience."
              demoLink="https://play.google.com/store/apps/details?id=com.inferno.crab.robot.car.game"
            />
          </Col>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Counter_Terrorist_Shooting}
              isBlog={false}
              title= <strong className="purple">Counter Terrorist Shooting</strong>
              description="Games offers a diverse blend of game modes including sniper missions, zombie shooting, and stealth commando operations, all within richly designed 3D environments. With advanced gun mechanics, smooth shooting controls, and a wide range of unique weapons, players can enjoy intense FPS combat in offline mode. "
              demoLink="https://play.google.com/store/apps/details?id=com.md.commando.ops.critical.strike.game"
            />
          </Col>
          

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
