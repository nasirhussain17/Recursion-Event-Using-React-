import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalExample = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = props => {
    setModal(!modal);
  };

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  return (
    <div className="container">
      <div className="row mt-5">
        <div classname="col-sm col-md-4 mr-5">
          <a title="Image1" href="assets/img1.JPG">
            <img
              id="img1"
              src="assets/img1.JPG"
              height="200"
              width="250"
              alt="image1"
              onClick={toggle}
            />
          </a>

          <Modal isOpen={modal} className="Image-1">
            <ModalHeader toggle={toggle} close={closeBtn}></ModalHeader>
            <ModalBody>
              <img id="img1" src="assets/img1.JPG " height="300" width="400" />
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>

        <div classname="col-sm col-md-4 ml-4">
          <a title="Image2" href="assets/img2.JPG">
            <img
              id="img2"
              src="assets/img2.JPG"
              height="200"
              width="250"
              alt="image2"
              onClick={toggle}
            />
          </a>

          <Modal className="Image-2" isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle} close={closeBtn}></ModalHeader>
            <ModalBody>
              <img id="img2" src="assets/img2.JPG " height="300" width="400" />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>

        <div classname="col-sm col-md-4 ml-4">
          <a title="Image3" href="assets/img3.JPG">
            <img
              id="img3"
              src="assets/img3.JPG"
              height="200"
              width="250"
              alt="image2"
              onClick={toggle}
            />
          </a>

          <Modal className="Image-3" isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle} close={closeBtn}></ModalHeader>
            <ModalBody>
              <img id="img3" src="assets/img3.JPG " height="300" width="400" />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>

        <div classname="col-sm col-md-4 ml-4">
          <a title="Image4" href="assets/img4.JPG">
            <img
              id="img4"
              src="assets/img4.JPG"
              height="200"
              width="250"
              alt="image2"
              onClick={toggle}
            />
          </a>

          <Modal className="Image-4" isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle} close={closeBtn}></ModalHeader>
            <ModalBody>
              <img id="img4" src="assets/img2.JPG " height="300" width="400" />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
        <div className="container">
          <div className="row mt-5">
            <div classname="col-sm col-md-4 ml-4 ">
              <img
                id="img5"
                src="assets/img5.JPG"
                height="200"
                width="250"
                alt="image2"
                onClick={toggle}
              />

              <Modal className="Image-5" isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle} close={closeBtn}></ModalHeader>
                <ModalBody>
                  <a title="Image5" href="assets/img5.JPG">
                    <img
                      id="img5"
                      src="assets/img2.JPG "
                      height="300"
                      width="400"
                    />
                  </a>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={toggle}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            </div>

            <div classname="col-sm col-md-4 ml-4">
              <a title="Image6" href="assets/img6.JPG">
                <img
                  id="img6"
                  src="assets/img6.JPG"
                  height="200"
                  width="250"
                  alt="image2"
                  onClick={toggle}
                />
              </a>

              <Modal className="Image-6" isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle} close={closeBtn}></ModalHeader>
                <ModalBody>
                  <img
                    id="img6"
                    src="assets/img6.JPG "
                    height="300"
                    width="400"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={toggle}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            </div>

            <div classname="col-sm col-md-4 ml-4">
              <a title="Image7" href="assets/img7.JPG">
                <img
                  id="img7"
                  src="assets/img7.JPG"
                  height="200"
                  width="250"
                  alt="image7"
                  onClick={toggle}
                />
              </a>

              <Modal className="Image-7" isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle} close={closeBtn}></ModalHeader>
                <ModalBody>
                  <img
                    id="img7"
                    src="assets/img7.JPG "
                    height="300"
                    width="400"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={toggle}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            </div>

            <div classname="col-sm col-md-4 ml-4">
              <a title="Image8" href="assets/img8.JPG">
                <img
                  id="img8"
                  src="assets/img8.JPG"
                  height="200"
                  width="250"
                  alt="image8"
                  onClick={toggle}
                />
              </a>

              <Modal className="Image-8" isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle} close={closeBtn}></ModalHeader>
                <ModalBody>
                  <img
                    id="img8"
                    src="assets/img8.JPG "
                    height="300"
                    width="400"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={toggle}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            </div>

            <div className="container">
              <div className="row row-content">
                <div classname="col-sm col-md-4 ml-4">
                  <a title="Image9" href="assets/img9.JPG">
                    <img
                      id="img9"
                      src="assets/img9.JPG"
                      height="200"
                      width="250"
                      alt="image9"
                      onClick={toggle}
                    />
                  </a>

                  <Modal className="Image-9" isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle} close={closeBtn}></ModalHeader>
                    <ModalBody>
                      <img
                        id="img9"
                        src="assets/img9.JPG "
                        height="300"
                        width="400"
                      />
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={toggle}>
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Modal>
                </div>

                <div classname="col-sm col-md-4 ml-4">
                  <a title="Image10" href="assets/img10.JPG">
                    <img
                      id="img10"
                      src="assets/img10.JPG"
                      height="200"
                      width="250"
                      alt="image10"
                      onClick={toggle}
                    />
                  </a>

                  <Modal className="Image-10" isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle} close={closeBtn}></ModalHeader>
                    <ModalBody>
                      <img
                        id="img10"
                        src="assets/img10.JPG "
                        height="300"
                        width="400"
                      />
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={toggle}>
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Modal>
                </div>

                <div classname="col-sm col-md-4 ml-4">
                  <a title="Image11" href="assets/img11.JPG">
                    <img
                      id="img11"
                      src="assets/img11.JPG"
                      height="200"
                      width="250"
                      alt="image11"
                      onClick={toggle}
                    />
                  </a>

                  <Modal className="Image-11" isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle} close={closeBtn}></ModalHeader>
                    <ModalBody>
                      <img
                        id="img11"
                        src="assets/img11.JPG "
                        height="300"
                        width="400"
                      />
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={toggle}>
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Modal>
                </div>

                <div classname="col-sm col-md-4 ml-4">
                  <a title="Image12" href="assets/img12.JPG">
                    <img
                      id="img12"
                      src="assets/img12.JPG"
                      height="200"
                      width="250"
                      alt="image12"
                      onClick={toggle}
                    />
                  </a>

                  <Modal className="Image-12" isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle} close={closeBtn}></ModalHeader>
                    <ModalBody>
                      <img
                        id="img12"
                        src="assets/img12.JPG "
                        height="300"
                        width="400"
                      />
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={toggle}>
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalExample;
