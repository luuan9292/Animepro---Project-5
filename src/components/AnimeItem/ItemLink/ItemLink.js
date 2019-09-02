import React, { Component, Fragment } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';

import "./ItemLink.css"

class ItemLink extends Component {

    constructor(props) {
        super(props);

        // Chua thong tin can render cua player
        this.state = {
            subteam: "",
            ep: "",
            link: "",
            backupLink: [],
            isLightTurnOn: false
        }
    }

    /**----------------------------------------
    * Function: reset lai state moi lan chuyen sang phan phim khac nhau, id duoc truyen qua props tu container
    * Component: ItemPage
    ----------------------------------------**/
    componentWillUpdate(nextProps, nextState) {
        if (nextProps.id !== this.props.id) { // neu props id hien tai khac props id truoc do thi thuc thi reset
            nextState.ep = "";
            nextState.link = "";
            nextState.backupLink = [];
        }
    }

    /**----------------------------------------
    * Function: Duyet qua cac object cua list
    * Component: ItemPage
    ----------------------------------------**/
    showItem = item => {
        let result = [];

        if (item !== undefined) {
            for (let key in item.list) {
                result.push(
                    <div className="episode__info" key={key}>
                        <h6><i className="fas fa-closed-captioning"></i> {key}</h6>
                        <ul className="list__episode">

                            {this.showItemLink(item.list[key], key)}

                        </ul>
                    </div>
                );
            }
        }

        return result;
    }

    /**----------------------------------------
    * Function: Mapping array cua tung object 
    * Component: ItemPage
    ----------------------------------------**/
    showItemLink = (itemLink, subteam) => {
        let result = null;

        if (itemLink.length > 0) {
            result = itemLink.map((item, index) => {
                if (item.ep === this.state.ep && subteam === this.state.subteam) {  // neu ep cua item bang ep cua state thi them class active
                    return <li className="active" key={index}>{item.ep}</li>
                } else {    // Cac item con lai do ra ko co class active, dong thoi them event click chua cac params can thiet
                    return <li onClick={() => this.handleActive(item.ep, subteam, item.link, item.backuplink)} key={index}>{item.ep}</li>
                }

            })
        }

        return result;
    }

    /**----------------------------------------
      * Function: Xu li state khi click vao cac tap phim
      * Component: ItemPage
      ----------------------------------------**/
    handleActive = (ep, subteam, link, backupLink) => {
        this.setState({
            subteam,
            ep,
            link,
            backupLink,
        })
    }

    /**----------------------------------------
      * Function: Mapping cac link server du phong
      * Component: ItemPage
      ----------------------------------------**/
    showBackupLink = (backupLink) => {

        let result = [];

        for (let index = 0; index < backupLink.length; index++) {
            result.push(
                <div className="server__backup" key={index}>
                    <span><i className="fas fa-database"></i> Server Backup: </span>
                    <button onClick={() => this.handleChangeServer(backupLink[index])}>{`Backup ${index + 1}`}</button>
                </div>
            );
        }

        return result;
    }

    /**----------------------------------------
      * Function: Gan link cho state de render tuong ung voi link du phong
      * Component: ItemPage
      ----------------------------------------**/
    handleChangeServer = link => {
        this.setState({
            link
        })
    }

    /**----------------------------------------
      * Function: Xu li cho nut Next va nut Prev
      * Component: ItemPage
      ----------------------------------------**/
    handleNextPrevButton = (item, step) => {    // sSep la gia tri +1 hoac -1 duoc truyen tu su kien onClick cua 2 cai nut
        for (let key in item) {
            if (this.state.subteam === key) {   // So sanh de biet duoc dang click link cua nhom Sub nao
                for (let index = 0; index < item[key].length; index++) {
                    // So sanh de xac dinh Ep hien tai va xac dinh dieu kien ko duoc Next o Ep cuoi cung hoac Prev o Ep dau tien
                    if (this.state.ep === item[key][index].ep && ((index < item[key].length - 1 && step > 0) || (index > 0 && step < 0))) {
                        this.setState({
                            // Set state lai tuong ung voi ep va link co duoc de Player no render ra
                            ep: item[key][index + step].ep,
                            link: item[key][index + step].link
                        })
                    }
                }
            }
        }
    }

    /**----------------------------------------
      * Function: Render Player
      * Component: ItemPage
      ----------------------------------------**/
    showPlayer = item => {
        if (this.state.link.length) {   // Neu State co link thi moi hien thi Player
            return (
                <Fragment>
                    <div className={this.state.isLightTurnOn === true ? "player__wrapper" : ''} onClick={this.handleTurnOnLight}>
                        <div className="jw__player">
                            <iframe title="jwplayer" width="100%" height="100%" src={this.state.link} frameBorder="0" allow="autoplay" allowFullScreen={true}></iframe>
                        </div>
                    </div>
                    <div className="control">
                        <ul>
                            <li onClick={() => this.handleNextPrevButton(item, -1)}><i className="fas fa-step-backward"></i> Prev</li>
                            <li onClick={() => this.handleNextPrevButton(item, +1)}><i className="fas fa-step-forward"></i> Next</li>
                            <li onClick={this.handleTurnOnLight}><i className="fas fa-lightbulb"></i> Light</li>
                            <li><i className="fas fa-expand"></i> Expand</li>
                            <li><i className="fas fa-cloud-download-alt"></i> Download</li>
                            <li><i className="fas fa-ad"></i> Add</li>
                            <li><i className="fas fa-info-circle"></i> Info</li>
                        </ul>
                    </div>
                </Fragment>
            );
        } else {
            return '';
        }
    }

    /**----------------------------------------
      * Function: Xu li su kien click vao nut Tat den
      * Component: ItemPage
      ----------------------------------------**/
    handleTurnOnLight = () => {
        this.setState({
            isLightTurnOn: !this.state.isLightTurnOn
        })
    }

    render() {

        let { item } = this.props;

        if(item === undefined) {
            return 0;
        }

        return (
            <Row>
                <Col xs="12" sm="12" md="12" lg="12" xl="12" className="anime__player px-0">

                    {this.showPlayer(item.list)}

                    {this.showBackupLink(this.state.backupLink)}

                    <div className="anime__episode px-0">


                        {this.showItem(item)}


                    </div>
                </Col>
            </Row>
        );
    }
};

export default ItemLink;