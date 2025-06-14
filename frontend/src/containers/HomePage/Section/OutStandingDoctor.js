import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import * as actions from '../../../store/actions';
import {LANGUAGES} from '../../../utils';
class OutStandingDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrDoctors: []
        };
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topDoctorsRedux !== this.props.topDoctorsRedux) {
            this.setState({
                arrDoctors: this.props.topDoctorsRedux
            });
        }
    }
    componentDidMount() {
        this.props.loadTopDoctor();
    }
    render() {
        let arrDoctors = this.state.arrDoctors;
        let {language} = this.props;
        // arrDoctors = arrDoctors.concat(arrDoctors).concat(arrDoctors); // Duplicate the array for better slider effect
        console.log('arrDoctors: ', arrDoctors);
        console.log('topDoctorsRedux props:', this.props.topDoctorsRedux);

        return (
            <div className="section-share section-outstanding-doctor">
                <div className="section-container">
                    
                    <div className="section-header">
                        <span className="title-section">
                            <FormattedMessage id="homepage.outstanding-doctor" />
                        </span>
                        <button className="btn-section">
                            <FormattedMessage id="homepage.more-infor" />
                        </button>
                    </div>
                    <div className="section-body">

                        <Slider {...this.props.settings}>
                            {arrDoctors && arrDoctors.length > 0 &&
                                arrDoctors.map((item, index) => {
                                    let imageBase64 = '';
                                    if (item.image) {
                                        // imageBase64 = new Buffer.from(item.image, 'base64').toString('binary');
                                        imageBase64 = `data:image/jpeg;base64,${item.image}`;

                                    }
                                    let nameVi = `${item.positionData.valueVi} ${item.firstName} ${item.lastName}`;
                                    let nameEn = `${item.positionData.valueEn} ${item.firstName} ${item.lastName}`;
                                    return (
                                        <div className="section-customize" key={index}>
                                            <div className="customize-border">
                                                <div className="outer-bg">
                                                    <div className="bg-image section-outstanding-doctor"
                                                        style={({ backgroundImage: `url(${imageBase64})` })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="position text-center">
                                                <div>{language === LANGUAGES.VI ? nameVi : nameEn}</div>
                                                <div>Cơ xương khớp</div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        );

    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        lanuage: state.app.language,
        topDoctorsRedux: state.admin.topDoctors,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadTopDoctor: () => dispatch(actions.fetchTopDoctor())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
