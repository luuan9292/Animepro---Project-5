import React from 'react';

const SideBarRecommend = props => {
    return (
        <div className='recommend'>
            <div className="sidebar__title">
                <div className="title__wrapper">
                    <h5>Recommend</h5>
                </div>
                <div className="title__icon">
                    <i className="far fa-lightbulb"></i>
                </div>
            </div>

            {props.children}

        </div>
    );
}

export default SideBarRecommend;