import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';

import "./Edit.css"

import { actFetchAnimeRequest, actSearchByKeyword, actChangeNotify } from '../../../../actions/index';


class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchID: '',
            showSubTeam: false,
            id: '',
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
            score: 0,
            episodes: '12',
            newep: '',
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

    /**----------------------------------------
     * Function: Goi method dispatch request du lieu
     * Component: HomePage
     ----------------------------------------**/
    componentDidMount() {
        this.props.fecthAnimeRequest();
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

        // animeData.child(this.state.id).set(this.state);

    }

    handleSearch = e => {
        this.setState({
            searchID: this.refs.searchID.value
        })
        e.preventDefault();
    }

    shouldComponentUpdate(nextProps, nextState) {

        if (nextState.searchID.length > 0 && this.state.searchID !== nextState.searchID) {
            console.log(nextState)
            let { anime } = this.props;

            anime = anime.find(item => {
                return item.id === nextState.searchID;
            })

            nextState.id = anime.id;
            nextState.name = anime.name;
            nextState.engname = anime.engname;
            nextState.studio = anime.studio;
            nextState.year = anime.year;
            nextState.episodes = anime.episodes;
            nextState.newep = anime.newep;
            nextState.genres = anime.genres;
            nextState.type = anime.type;
            nextState.season = anime.season;
            nextState.thumblink = anime.thumblink;
            nextState.bglink = anime.bglink;
            nextState.list = anime.list;
            nextState.related = anime.related;
            nextState.desc = anime.desc;

            return true;
        } else {
            return true;
        }
    }

    handleShowSubteam = () => {
        let result = [];
        let { list } = this.state;
        for (let key in list) {
            result.push(
                <div key={key}>
                <div className="input__add">
                    <button type="button" className='btn btn-primary mr-2 mt-3 mb-1'>{key}</button>
                    {/* <span className="btn btn-primary" onClick={this.handleShowSub}><i className="fas fa-plus"></i></span> */}
                </div>
                {this.handleList(list[key], key)}
                </div>
            )
        }
        return result;
    }

    handleList = (listLink, subTeam) => {
        let result = [];
        for (let index in listLink) {
            result.push(<button type="button" className='btn btn-danger mr-2' onClick={() => this.handleEditLink(subTeam, index)} key={index}>{index}</button>)
        }

        return result;
    }

    handleEditLink = (subTeam, index) => {
        console.log(subTeam, index)
    }

    render() {
        let { searchID } = this.state;

        if (searchID === '') {
            return (
                <Col xs="12" sm="12" md="12" lg="12" xl="12" className="edit__search">
                    <form onSubmit={this.handleSearch}>
                        <input type="text" placeholder="Type Post's ID" ref="searchID" />
                    </form>
                </Col>
            )
        }

        return (
            <Fragment>
                <Col xs="12" sm="12" md="12" lg="12" xl="12" className="edit__search">
                    <form onSubmit={this.handleSearch}>
                        <input type="text" placeholder="Type Post's ID" ref="searchID" />
                    </form>
                </Col>

                <Col xs="6" sm="6" md="6" lg="6" xl="6" className="pt-5">
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
                                        <input name='newep' onChange={this.handleChange} value={this.state.newep} type='text' />
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

                <Col xs="6" sm="6" md="6" lg="6" xl="6" className="pt-5">
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

                                        {/* <input name='subteam' onChange={this.handleSubteam} value={this.state.subteam} type='text' /> */}
                                        {this.handleShowSubteam()}

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
                        <Col xs="12" sm="12" md="12" lg="12" xl="12" className="px-0 mb-5">
                            <button type="button" className="btn btn-primary">Preview</button>
                            <button onClick={this.handleSubmit} className="btn btn-primary">Publish</button>
                        </Col>
                    </div>

                </Col>

            </Fragment>
        );
    }
};

const mapStateToProps = state => {
    return {
        anime: state.anime,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fecthAnimeRequest: () => {
            dispatch(actFetchAnimeRequest());
        },
        searchByKeyWord: keyword => {
            dispatch(actSearchByKeyword(keyword)); // dispatch search keyword
        },
        changeNotify: (style, content, isShowNotify) => {
            dispatch(actChangeNotify(style, content, isShowNotify));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);