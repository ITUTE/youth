import React, { Component, createRef } from 'react'
import styles from './index.module.scss';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import YITIcon from '../../../assets/YIT logo.png';
import { Link } from 'react-router-dom'
import Img1 from '../../../assets/office icon/1.png';
import Img2 from '../../../assets/office icon/2.png';
import Img3 from '../../../assets/office icon/3.png';
import Img4 from '../../../assets/office icon/4.png';
import Img5 from '../../../assets/office icon/5.png';
import Img6 from '../../../assets/office icon/6.png';
import Img7 from '../../../assets/office icon/7.png';
import Img8 from '../../../assets/office icon/8.png';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: true,
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.wrapperRef = createRef();
    }
    componentDidMount() {
        document.addEventListener('click', this.handleClick)
    }
    componentWillUnmount() {
        // important
        document.removeEventListener('click', this.handleClick)
    }
    // handleClick = (event) => {
    //     const { target } = event
    //     if (!this.wrapperRef.current.contains(target)) {
    //         this.setState({ menu: false})
    //     }
    // }
    toggleMenu() {
        this.setState({ menu: !this.state.menu })
    }
    render() {

        const show = (this.state.menu) ? "show" : "";
        return (
            <div className={styles.wrapper} ref={this.wrapperRef}>
                {/* <button type="button" className={show?(styles.menu + " " + styles.button_close) : (styles.menu + " " + styles.button_open)} onClick={this.toggleMenu}>
                <span className={styles.top}></span>
                <span className={styles.middle}></span>
                <span className={styles.bottom}></span>
            </button> */}
                <div className={styles.sidebar + ' ' + show} style={show ? { width: "350px" } : { width: '0px' }}>
                    <img src={YITIcon} alt="YIT"></img>

                    <div className={styles.linkWrapper}>
                        <div className={styles.link} >
                            <Link to="/office/vanban">
                                <img src={Img1} alt="1"></img>
                                <span>V??n b???n</span>
                            </Link>
                        </div>
                        <div className={styles.link}>
                            <Link to="/office/bieumau">
                                <img src={Img2} alt="2"></img>
                                <span>Bi???u m???u</span>
                            </Link>
                        </div>
                        <div className={styles.link}>
                            <Link to="/office/tracuudiem">
                                <img src={Img3} alt="3"></img>
                                <span>Tra c???u ??i???m</span>
                            </Link>
                        </div>
                        <div className={styles.link + " " + styles.big}>
                            <Link to="/office/doanhoivien">
                                <img src={Img4} alt="4"></img>
                                <span>Qu???n l??<br></br>??o??n vi??n - h???i vi??n</span>
                            </Link>
                        </div>
                        <div className={styles.link}>
                            <Link to="/office/trinhkyvanban">
                                <img src={Img5} alt="5"></img>
                                <span className={styles.lowcolor}>Tr??nh k?? v??n b???n</span>
                            </Link>
                        </div>
                        <div className={styles.link}>
                            <Link to="/office/thongtinbaocao">
                                <img src={Img6} alt="6"></img>
                                <span className={styles.lowcolor}>Th??ng tin b??o c??o</span>
                            </Link>
                        </div>
                        <div className={styles.link}>
                            <Link to="/office/quanlyvanban">
                                <img src={Img7} alt="7"></img>
                                <span className={styles.lowcolor}>Qu???n l?? v??n b???n</span>
                            </Link>
                        </div>
                        <div className={styles.link}>
                            <Link to="/office/quanlyhoatdong">
                                <img src={Img8} alt="8"></img>
                                <span className={styles.lowcolor}>Qu???n l?? ho???t ?????ng</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
