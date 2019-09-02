import React, { Component, Fragment } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import "./SearchItems.css"

class SearchItems extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            itemsPerPage: 24,
            startIndex: 0,
            endIndex: 5,
            pageQuantity: 0
        }
    }

    /**----------------------------------------
    * Function: Tra ve mang cac items hien tai cua trang
    * Component: SearchPage
    ----------------------------------------**/
    renderProduct = (currentItems) => {
        return currentItems;
    }

    /**----------------------------------------
    * Function: 
    *       + Moi lan click gan currentPage bang id hien tai (number page)
    *       + Gan length cua page
    * Component: SearchPage
    ----------------------------------------**/
    handleClick = (para, event) => {
        this.setState({
            currentPage: +event.target.id,
            pageQuantity: para
        });
    }

    /**----------------------------------------
    * Function: Render lai so page moi lan chuyen page moi
    * Component: SearchPage
    ----------------------------------------**/
    componentWillUpdate(nextProps, nextState) {
        if (nextState.currentPage > 1 && nextState.currentPage < nextState.pageQuantity - 1) {// Moi lan chuyen trang
            nextState.startIndex = nextState.currentPage - 2;
            nextState.endIndex = nextState.currentPage + 3;
        }
        else if(nextState.currentPage === 1) { //Truong hop chuyen ve first page
            nextState.startIndex = 0;
            nextState.endIndex = 5;
        }
        else if(nextState.currentPage === nextState.pageQuantity) {//Truong hop chuyen den last page
            nextState.startIndex = nextState.pageQuantity - 4;
            nextState.endIndex = nextState.pageQuantity + 1;
        }
    }

    /**----------------------------------------
    * Function: Tien toi mot trang
    * Component: SearchPage
    ----------------------------------------**/
    handleBack = () => {
        let { currentPage } = this.state;
        if (currentPage > 1) {
            this.setState(state => {
                return {
                    currentPage: currentPage - 1
                }
            })
        }
    }
    /**----------------------------------------
    * Function: Lui ve mot trang
    * Component: SearchPage
    ----------------------------------------**/
    handleNext = () => {
        let { currentPage } = this.state;
        if (currentPage >= 1) {
            this.setState(state => {
                return {
                    currentPage: currentPage + 1
                }
            })
        }
    }

    /**----------------------------------------
    * Function: Toi trang cuoi cung
    * Component: SearchPage
    ----------------------------------------**/
    handleBackFirstPage = () => {
        this.setState(state => {
            return {
                currentPage: 1
            }
        })
    }

    /**----------------------------------------
    * Function: Lui ve trang dau tien
    * Component: SearchPage
    ----------------------------------------**/
    handleGoLastPage = (lastPage) => {
        this.setState(state => {
            return {
                currentPage: lastPage,
                pageQuantity: lastPage
            }
        })
    }

    /**----------------------------------------
    * Function: render ra cac page cua pagination
    * Component: SearchPage
    ----------------------------------------**/
    renderPageNumbers = (pageNumbers) => {
        let result = null;
        let active = false;
        let { startIndex, endIndex } = this.state
        if (pageNumbers !== undefined) {
            //cat ra array bang vi tri bat dau va ket thuc (so voi currentPage)
            result = pageNumbers.slice(startIndex, endIndex).map(number => {
                this.state.currentPage === number ? active = true : active = false;
                return (
                    <PaginationItem active={active} key={number}>
                        <PaginationLink id={number} onClick={(event) => this.handleClick(pageNumbers.length, event)}>{number}</PaginationLink>
                    </PaginationItem>
                );
            })
        }
        window.scrollTo(0, 0);
        return result;
    }

    render() {
        /**----------------------------------------
        * Function: 
        *       + Dat bien, xac dinh so luong item 
        *       + Xac dinh so luong page
        * Component: SearchPage
        ----------------------------------------**/

        const JSXitems = this.props.children;// Mang JSX truyen tu SearchContainer

        const { currentPage, itemsPerPage } = this.state;// Trang hien tai va so luong item moi trang

        const pageNumbers = [];//So luong trang

        // Chuan bi cac bien can thiet
        if (JSXitems !== null && JSXitems !== undefined && JSXitems.length > 0) {
            const indexOfLastItem = currentPage * itemsPerPage;// Chi so cua item cuoi cung
            const indexOfFirstItem = indexOfLastItem - itemsPerPage;// Chi so item dau tien
            var currentItems = JSXitems.slice(indexOfFirstItem, indexOfLastItem);// Mang JSX chua Item hien tai cua trang

            // Lap so trang hien thi
            for (let i = 1; i <= Math.ceil(JSXitems.length / itemsPerPage); i++) {
                pageNumbers.push(i);
            }
        }

        return (
            <Fragment>
                <Row className="main__content">
                    <Col xs="12" sm="12" md="12" lg="12" xl="12" className="content pr-0">
                        <Row className="anime">

                            {this.renderProduct(currentItems)}

                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="12" md="12" lg="12" xl="12" className="page__divide">
                        <Pagination aria-label="Page navigation example">
                            <PaginationItem>
                                <PaginationLink first onClick={this.handleBackFirstPage} />
                            </PaginationItem>
                            <PaginationItem disabled={this.state.currentPage === pageNumbers[0] ? true : false}>
                                <PaginationLink previous onClick={this.handleBack} />
                            </PaginationItem>

                            {this.renderPageNumbers(pageNumbers)}

                            <PaginationItem disabled={this.state.currentPage === pageNumbers.length ? true : false}>
                                <PaginationLink next onClick={this.handleNext} />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink last onClick={() => this.handleGoLastPage(pageNumbers.length)} />
                            </PaginationItem>
                        </Pagination>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default SearchItems;