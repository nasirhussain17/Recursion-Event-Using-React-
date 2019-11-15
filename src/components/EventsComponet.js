import React, { Component } from "react";
import { Media } from "reactstrap";

class Events extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Media>
            <Media left href="#">
              <img
                class="d-flex mt-2 mr-3 img-thumbnail align-self-center"
                src="assets/code.jpeg"
                heigt="150"
                width="200"
                alt="Uthappizza"
              />
            </Media>
            <Media body>
              <Media heading className="mt-4">
                1. Codathon
              </Media>
              <p className="d-none d-sm-block mt-3">
                Technical: This is an end to end code-marathon where the
                fastest, strongest and sharpest triumphs
              </p>
            </Media>
          </Media>

          <Media>
            <Media left href="#">
              <img
                class="d-flex mr-3 img-thumbnail align-self-center"
                src="assets/code1.jpeg"
                heigt="150"
                width="200"
                alt="Uthappizza"
              />
            </Media>
            <Media body>
              <Media heading className="mt-4">
                2. Webfusion
              </Media>
              technical : Be it the internet boom or the big data boom, today
              it's synonymous with web and SQL... let's see how well does one
              query the web
            </Media>
          </Media>

          <Media>
            <Media left href="#">
              <img
                class="d-flex mt-2 mr-3 img-thumbnail align-self-center"
                src="assets/sherlocked.jpeg"
                heigt="150"
                width="200"
                alt="Uthappizza"
              />
            </Media>
            <Media body>
              <Media heading className="mt-5">
                3. Sher-locked
              </Media>
              Technical :Allan Turing used Enigma to outplay the Nazis, it's
              time to do the same yet again in his honour,logically .Put on your
              Sherlock hats to play this round.
            </Media>
          </Media>

          <Media>
            <Media left href="#">
              <img
                class="d-flex mt-2 mr-3 img-thumbnail align-self-center"
                src="assets/techopera.svg"
                heigt="150"
                width="200"
                alt="Uthappizza"
              />
            </Media>
            <Media body>
              <Media heading className="mt-5">
                4. TechnOpera
              </Media>
              Technical : Beyond the fight of wits it tests how aptly you
              discern your understanding to the world and re[resent it in your
              words.
            </Media>
          </Media>

          <Media>
            <Media left href="#">
              <img
                class="d-flex mt-2 mr-3 img-thumbnail align-self-center"
                src="assets/inferno.svg"
                heigt="150"
                width="200"
                alt="Uthappizza"
              />
            </Media>
            <Media body>
              <Media heading className="mt-5">
                5.Inferno
              </Media>
              Non-Technical : Be it the infinity stones, or the periodic
              elements or the taxi cab number or the Taj Mahal,... the clues
              will make sure you'll enjoy the journey more than the destination
            </Media>
          </Media>

          <Media>
            <Media left href="#">
              <img
                class="d-flex mt-2 mr-3 img-thumbnail align-self-center"
                src="assets/delightah.svg"
                heigt="150"
                width="200"
                alt="Uthappizza"
              />
            </Media>
            <Media body>
              <Media heading className="mt-5">
                6. Delightah!
              </Media>
              Non-Technical : After a day laden with code , dust and sun nothing
              will wind you down than a series of fun and frolic entertainment.
              So be ready for the tensor of thrill fun and mystery !
            </Media>
          </Media>

          <Media>
            <Media left href="#">
              <img
                class="d-flex mt-2 mr-3 img-thumbnail align-self-center"
                src="assets/witcracker.svg"
                heigt="150"
                width="200"
                alt="Uthappizza"
              />
            </Media>
            <Media body>
              <Media heading className="mt-5">
                7. WitCracker
              </Media>
              Non-Technical : Curiousity pervades our planet be it the moon
              lander 'vikram' or the masterpiece 'Inception',... it's those grey
              cells that will lead your treasure expedition.
            </Media>
          </Media>

          <Media>
            <Media left href="#">
              <img
                class="d-flex mt-2 mr-3 img-thumbnail align-self-center"
                src="assets/endgame.svg"
                heigt="150"
                width="200"
                alt="Uthappizza"
              />
            </Media>
            <Media body>
              <Media heading className="mt-5">
                8. AimEndGame
              </Media>
              Non-Technical : Shoot, attack , grenade fire, cover....are
              dangerous unless you are in front of a screen....so load up your
              rifles and come prepared
            </Media>
          </Media>

          <Media>
            <Media left href="#">
              <img
                class="d-flex mt-2 mr-3 img-thumbnail align-self-center"
                src="assets/eventx.svg"
                heigt="150"
                width="200"
                alt="Uthappizza"
              />
            </Media>
            <Media body>
              <Media heading className="mt-5">
                9. Event-X
              </Media>
              Technical: Let's spice up fun and code together to see how far
              someone will go to code at the expense of fun...after all what is
              coding without fun ?
            </Media>
          </Media>
        </div>
      </div>
    );
  }
}
export default Events;
