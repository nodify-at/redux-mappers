import {connect, InferableComponentEnhancerWithProps} from "react-redux";

export const mapStateToProps = <RState = {}, Owned = {} , State = {}> (fn: (a: RState, b: Owned ) => State): InferableComponentEnhancerWithProps<State, Owned> => {
    return connect(fn, {});
};
