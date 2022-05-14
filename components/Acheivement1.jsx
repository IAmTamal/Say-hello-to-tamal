import React, { useState } from 'react'
import styles from "../styles/Achievement.module.css"
import g1 from "../public/assets/gitgh.jpg"
import g2 from "../public/assets/gitgh2.jpg"
import Image from "next/image"
import { Button, Modal } from 'react-bootstrap'



const Acheivement1 = () => {

    const [lgShow, setLgShow] = useState(false);
    const [lgShow2, setLgShow2] = useState(false);

    return (
        <>
            <div className={styles.parent1}>

                <p className={styles.achievement_p}>Activities (Mentor,Organizer, PL)</p>

                <div className="row">
                    <div className="col-lg-6">
                        <figure className={styles.hover_img} onClick={() => setLgShow(true)}>
                            <Image src={g2} alt="fguns" />
                            <figcaption>
                                <p>The JAM Event - Tamal organized an offline web dev workshop with 150+ participants</p>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="col-lg-6">
                        <figure className={styles.hover_img} onClick={() => setLgShow2(true)}>
                            <Image src={g1} alt="fguns" />
                            <figcaption>
                                <p>Tamal explaining the basics of Git and GitHub to students</p>
                            </figcaption>
                        </figure>
                    </div>



                </div>


                <Modal
                    size="lg"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg" className={styles.mt}>
                            Jam Event
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body><Image src={g2} alt="fguns" /></Modal.Body>
                </Modal>



                <Modal
                    size="lg"
                    show={lgShow2}
                    onHide={() => setLgShow2(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg" className={styles.mt}>
                            Jam Event
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body><Image src={g1} alt="fguns" />
                    </Modal.Body>
                </Modal>




            </div>


        </>
    )
}

export default Acheivement1