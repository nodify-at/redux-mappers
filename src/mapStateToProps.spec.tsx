import {mapStateToProps} from "./mapStateToProps";
import * as React from "react";
import {shallowWithStore} from 'enzyme-redux';
import {createMockStore} from 'redux-test-utils';
import {EnzymePropSelector} from "enzyme";

describe('mapStateToProps decorator', () => {
    it('should map state to props as expected using decorator', () => {

        interface ReduxState { test: any };
        interface Props { test?: any; }

        @mapStateToProps<ReduxState>(state => ({ test: state.test }))
        class Custom extends React.Component<Props> {
            render(): React.ReactNode {
                return <div>{ this.props.test } </div>
            }
        }

        const expectedState = { test: 'hello' };

        const component = shallowWithStore(<Custom />, createMockStore(expectedState));
        expect(component.props()).toEqual(expectedState);
    });
});

