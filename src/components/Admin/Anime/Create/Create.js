import React, { Component, Fragment } from 'react';

import "./Create.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'reactstrap';

import { animeData } from '../../../../services/firebase';

/**----------------------------------------
     * Function: Auto random ID
     * Component: AdminPage
     ----------------------------------------**/
const autoRandomStringGUID = () => {
    return Math.floor((1 + Math.random()) * 0x1000).toString(16).substring(1);
}

const autoGenerateRandomGUID = () => {
    return autoRandomStringGUID() + autoRandomStringGUID() + autoRandomStringGUID();
}

class Create extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: autoGenerateRandomGUID(),
            name: '',
            engname: '',
            studio: '',
            year: '',
            views: {
                "total": 55133,
                "week": 10232,
                "season": 30345,
                "day": 1024
            },
            score: 9.2,
            episodes: '12',
            newep: '01',
            genres: '',
            type: 'TV series',
            season: 'Spring',
            favorite: false,
            thumblink: '',
            bglink: '',
            list: '',
            related: [],
            desc: ''
        }
    }

    handleChange = e => {
        let target = e.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    handleSubteam = e => {
        let target = e.target;
        let value = target.value;

        this.setState(prevState => {

            if (value.length === 0) {
                return {
                    list: ''
                }
            }

            return {
                list: {
                    [value]: [
                        {
                            ep: '01',
                            link: '',
                            backuplink: []
                        }
                    ]
                }
            }

        })
    }

    handleLink = e => {
        let target = e.target;
        let name = target.name;

        let subteam = Object.keys(this.state.list)[0];

        let link = name === 'link' ? target.value : this.state.list[subteam][0].link;

        let backuplink = name === 'backuplink' ? target.value.split(',') : this.state.list[subteam][0].backuplink;

        this.setState(prevState => {
            return {
                list: {
                    [subteam]: [
                        {
                            ep: '01',
                            link,
                            backuplink
                        }
                    ]
                },
                related: [
                    {
                        part: "SS 1",
                        relatedId: this.state.id
                    }
                ]
            }

        })
    }


    handleSubmit = () => {

        animeData.child(this.state.id).set(this.state);

    }

    render() {

        return (
            <Fragment>
                <Col xs="6" sm="6" md="6" lg="6" xl="6">
                    <div className="post__info">

                        <div className="post__title">Info <i className="fas fa-info-circle"></i></div>
                        <div className="post__content">
                            <Col xs="12" sm="12" md="12" lg="12" xl="12">
                                <form>
                                    <div>
                                        <label>ID</label>
                                        <div className="input__add">
                                            <input name='id' disabled value={this.state.id} type='text' />
                                        </div>
                                    </div>
                                    <div>
                                        <label>Name</label>
                                        <input name='name' onChange={this.handleChange} value={this.state.name} type='text' />
                                    </div>
                                    <div>
                                        <label>English Name</label>
                                        <input name='engname' onChange={this.handleChange} value={this.state.engname} type='text' />
                                    </div>
                                    <div>
                                        <label>Studio</label>
                                        <input name='studio' onChange={this.handleChange} value={this.state.studio} type='text' />
                                    </div>
                                    <div>
                                        <label>Year</label>
                                        <input name='year' onChange={this.handleChange} value={this.state.year} type='text' />
                                    </div>
                                    <div>
                                        <label>Episodes</label>
                                        <input name='episodes' onChange={this.handleChange} value={this.state.episodes} type='text' />
                                    </div>
                                    <div>
                                        <label>New Episode</label>
                                        <input name='newep' onChange={this.handleChange} value={this.state.newep} type='text' disabled />
                                    </div>
                                    {/* <div>
                                        <label>Subteam</label>
                                        <input name='subteam' onChange={this.handleChange} value={this.state.subteam} type='text' />
                                    </div> */}
                                    <div>
                                        <label>Genres</label>
                                        <input name='genres' onChange={this.handleChange} value={this.state.genres} type='text' />
                                    </div>
                                    <div className="select__box">
                                        <div className="custom__select">
                                            <label>Type</label>
                                            <select name="type" onChange={this.handleChange} value={this.state.type}>
                                                <option value="TV series">TV series</option>
                                                <option value="Live">Live Action</option>
                                            </select>
                                        </div>
                                        <div className="custom__select">
                                            <label>Season</label>
                                            <select name="season" onChange={this.handleChange} value={this.state.season}>
                                                <option value="spring">Spring</option>
                                                <option value="summer">Summer</option>
                                                <option value="fall">Fall</option>
                                                <option value="winter">Winter</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </Col>

                        </div>
                    </div>
                </Col>

                <Col xs="6" sm="6" md="6" lg="6" xl="6" className="">
                    <div className="post__link">

                        <div className="post__title">Link <i className="fas fa-compass"></i></div>
                        <div className="post__content">
                            <Col xs="12" sm="12" md="12" lg="12" xl="12">
                                <form>
                                    <div>
                                        <label>Thumbnail Img</label>
                                        <input name='thumblink' onChange={this.handleChange} value={this.state.thumblink} type='text' />
                                    </div>
                                    <div>
                                        <label>Background Img</label>
                                        <input name='bglink' onChange={this.handleChange} value={this.state.bglink} type='text' />
                                    </div>
                                    <div>
                                        <label>Subteam</label>
                                        <div className="input__add">
                                            <input name='subteam' onChange={this.handleSubteam} value={this.state.subteam} type='text' />
                                            {/* <span className="btn btn-primary"><i className="fas fa-plus"></i></span> */}
                                        </div>
                                        <div className="add__link">
                                            {/* <div>
                                                <label>Ep Number</label>
                                                <input name='ep' value="01" type='text' disabled/>
                                            </div> */}
                                            <div>
                                                <label>Main Link</label>
                                                <input name='link' onChange={this.handleLink} value={this.state.link} disabled={this.state.list === '' ? true : false} type='text' />
                                            </div>
                                            <div>
                                                <label>Backup Link</label>
                                                <textarea name='backuplink' onChange={this.handleLink} value={this.state.backuplink} disabled={this.state.list === '' ? true : false} rows="4" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label>Related Series</label>
                                        <input name='related' onChange={this.handleChange} value="Season 1" type='text' disabled />
                                    </div>
                                    <div>
                                        <label>Description</label>
                                        <textarea name='desc' onChange={this.handleChange} value={this.state.desc} rows="5" />
                                    </div>
                                </form>
                            </Col>
                        </div>

                    </div>

                    <div className="publish__btn px-0">
                        <Col xs="12" sm="12" md="12" lg="12" xl="12" className="px-0">
                            <button type="button" className="btn btn-primary">Preview</button>
                            <button onClick={this.handleSubmit} className="btn btn-primary">Publish</button>
                        </Col>
                    </div>

                </Col>
            </Fragment>
        );
    }
};

export default Create;