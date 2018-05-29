import {connect, MapDispatchToPropsParam} from 'react-redux';

export const mapDispatchToProps = <DispatchProps, OwnProps>(actions: MapDispatchToPropsParam<DispatchProps, OwnProps>): any => {
    const mapStateToProps = () => ({});
    return connect(mapStateToProps, actions);
};